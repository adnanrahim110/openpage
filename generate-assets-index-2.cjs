#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const os = require('os');

/* ───────────── resolve global modules ───────────── */
function getGlobalNodeModules() {
  try {
    const p = execSync('npm root -g', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    return p;
  } catch {
    return null;
  }
}

function requireGlobal(mod) {
  try {
    return require(mod);
  } catch { }
  const globalRoot = getGlobalNodeModules();
  if (!globalRoot) throw new Error('Cannot resolve global npm root. Install dependencies locally or fix npm.');
  try {
    const Module = require('module');
    const globalRequire = Module.createRequire(path.join(globalRoot, '_virtual.js'));
    return globalRequire(mod);
  } catch (e) {
    const err = new Error(`Missing global module "${mod}". ${e.message}`);
    err.code = 'MODULE_NOT_FOUND_GLOBAL';
    throw err;
  }
}

let sharp = null;
try {
  sharp = requireGlobal('sharp');
} catch (e) {
  console.error('Image conversion requires sharp installed globally.');
  console.error('Install once: npm i -g sharp');
}

/* ───────────── ffmpeg resolution (robust) ───────────── */
function verifyBinary(binPath) {
  if (!binPath) return false;
  try {
    execSync(`"${binPath}" -version`, { stdio: ['ignore', 'ignore', 'ignore'] });
    return true;
  } catch {
    return false;
  }
}

function scanWingetForFfmpeg() {
  try {
    const base = path.join(
      process.env.LOCALAPPDATA || '',
      'Packages',
      'Microsoft.DesktopAppInstaller_8wekyb3d8bbwe',
      'LocalCache',
      'winget',
      'Packages'
    );
    if (!base || !fs.existsSync(base)) return null;

    const pkgs = fs.readdirSync(base, { withFileTypes: true })
      .filter(d => d.isDirectory() && /ffmpeg/i.test(d.name))
      .map(d => path.join(base, d.name));

    const candidates = [];
    for (const pkg of pkgs) {
      const direct = path.join(pkg, 'ffmpeg.exe');
      const bin = path.join(pkg, 'bin', 'ffmpeg.exe');
      if (fs.existsSync(direct)) candidates.push(direct);
      if (fs.existsSync(bin)) candidates.push(bin);

      try {
        const subdirs = fs.readdirSync(pkg, { withFileTypes: true }).filter(s => s.isDirectory());
        for (const s of subdirs) {
          const tryBin = path.join(pkg, s.name, 'bin', 'ffmpeg.exe');
          if (fs.existsSync(tryBin)) candidates.push(tryBin);
        }
      } catch { }
    }

    for (const c of candidates) if (verifyBinary(c)) return c;
    return null;
  } catch {
    return null;
  }
}

function resolveFfmpegPath() {
  if (process.env.FFMPEG_PATH && verifyBinary(process.env.FFMPEG_PATH)) {
    return process.env.FFMPEG_PATH;
  }

  try {
    if (process.platform === 'win32') {
      const out = execSync('where ffmpeg', { stdio: ['ignore', 'pipe', 'ignore'] })
        .toString().split(/\r?\n/).map(s => s.trim()).filter(Boolean);
      for (const p of out) if (verifyBinary(p)) return p;
    } else {
      const p = execSync('command -v ffmpeg', { stdio: ['ignore', 'pipe', 'ignore'] })
        .toString().trim();
      if (verifyBinary(p)) return p;
    }
  } catch { }

  const winget = scanWingetForFfmpeg();
  if (winget) return winget;

  const common = [
    'C:\\Program Files\\ffmpeg\\bin\\ffmpeg.exe',
    'C:\\ffmpeg\\bin\\ffmpeg.exe',
  ];
  for (const p of common) {
    if (fs.existsSync(p) && verifyBinary(p)) return p;
  }

  return null;
}

const ffmpegPath = resolveFfmpegPath();

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    if (!ffmpegPath) {
      return reject(new Error('ffmpeg not found. Set FFMPEG_PATH or add a real ffmpeg to PATH.'));
    }
    const p = spawn(ffmpegPath, args, { stdio: ['ignore', 'inherit', 'inherit'] });
    p.on('error', reject);
    p.on('close', code => code === 0 ? resolve() : reject(new Error(`ffmpeg exited with ${code}`)));
  });
}

const ASSETS_DIR = path.join(__dirname, './public');
const IMAGES_DIR = path.join(ASSETS_DIR, 'images');
const OUT_FILE = path.join(ASSETS_DIR, 'index.js');

const IN_EXT = ['.png', '.jpg', '.jpeg'];
const VIDEO_IN_EXT = ['.mp4', '.mov'];
const KEEP_EXT = ['.svg', '.gif', '.webp', '.avif'];

const exportLines = [];
const tasks = [];

const walk = dir => fs.readdirSync(dir)
  .flatMap(f => {
    const full = path.join(dir, f);
    return fs.statSync(full).isDirectory() ? walk(full) : [full];
  });

const makeName = (fullPath) => {
  const relDir = path.relative(IMAGES_DIR, path.dirname(fullPath)).replace(/\\/g, '/');
  const base = path.basename(fullPath, path.extname(fullPath)).replace(/[-\s]/g, '_');
  const name = (relDir ? relDir.split('/').join('_') + '_' : '') + base;
  return /^\d/.test(name) ? '_' + name : name;
};

const addExport = (name, rel) => {
  exportLines.push(`export { default as ${name} } from '${rel}';`);
};

walk(IMAGES_DIR).forEach(abs => {
  const ext = path.extname(abs).toLowerCase();

  if (KEEP_EXT.includes(ext)) {
    const rel = './' + path.relative(ASSETS_DIR, abs).replace(/\\/g, '/');
    addExport(makeName(abs), rel);
    return;
  }

  if (IN_EXT.includes(ext)) {
    if (!sharp) {
      console.error('⚠︎ skip (no sharp):', abs);
      return;
    }
    const avifPath = abs.replace(ext, '.avif');

    tasks.push(
      sharp(abs)
        .avif({ quality: 60, effort: 4 })
        .toFile(avifPath)
        .then(() => {
          fs.unlinkSync(abs);
          const rel = './' + path.relative(ASSETS_DIR, avifPath).replace(/\\/g, '/');
          addExport(makeName(avifPath), rel);
          console.log('✔︎', path.relative(IMAGES_DIR, avifPath));
        })
        .catch(err => console.error('⚠︎ skip', abs, err.message))
    );
    return;
  }

  if (VIDEO_IN_EXT.includes(ext)) {
    if (!ffmpegPath) {
      console.error('⚠︎ video skip (no ffmpeg):', abs);
      return;
    }

    const webmPath = abs.replace(ext, '.webm');
    const CRF = process.env.WEBM_CRF || '24';
    const SPEED = process.env.WEBM_SPEED || '2';
    const A_BR = process.env.WEBM_ABR || '128k';
    const threads = String(Math.max(2, Math.min(16, os.cpus()?.length || 4)));

    const args = [
      '-y', '-i', abs,
      '-c:v', 'libvpx-vp9',
      '-b:v', '0',
      '-crf', CRF,
      '-row-mt', '1',
      '-speed', SPEED,
      '-threads', threads,
      '-pix_fmt', 'yuv420p',
      '-c:a', 'libopus',
      '-b:a', A_BR,
      webmPath,
    ];

    tasks.push(
      runFfmpeg(args)
        .then(() => {
          fs.unlinkSync(abs);
          const rel = './' + path.relative(ASSETS_DIR, webmPath).replace(/\\/g, '/');
          addExport(makeName(webmPath), rel);
          console.log('🎞︎', path.relative(IMAGES_DIR, webmPath));
        })
        .catch(err => console.error('⚠︎ video skip', abs, err.message))
    );
    return;
  }
});

Promise.all(tasks).then(() => {
  fs.writeFileSync(OUT_FILE, exportLines.join('\n') + '\n', 'utf8');
  console.log(`\nGenerated ${path.relative('.', OUT_FILE)} with ${exportLines.length} exports.`);
});
