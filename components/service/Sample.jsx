"use client";

import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { useEffect, useMemo, useRef, useState } from "react";
import { HiMiniPause, HiMiniPlay, HiMiniSpeakerWave } from "react-icons/hi2";

const formatTime = (time) => {
  if (!Number.isFinite(time) || time <= 0) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Sample = ({ sample }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const bars = useMemo(() => [92, 68, 88, 64, 96, 74, 82, 60, 90, 66], []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const handleLoadedMetadata = () => {
      const len = Number.isFinite(audio.duration) ? audio.duration : 0;
      setDuration(len);
    };

    const handleTimeUpdate = () => {
      if (!audio.duration) return;
      const current = audio.currentTime;
      setCurrentTime(current);
      setProgress((current / audio.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (audio.duration) {
        setCurrentTime(audio.duration);
        setProgress(100);
      }
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    audio.load();
  }, [sample?.audio]);

  const handleSeek = (value) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const nextTime = (value / 100) * duration;
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
    setProgress(value);
  };

  const handleSkip = (offset) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const nextTime = Math.min(
      Math.max(audio.currentTime + offset, 0),
      duration
    );
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
    setProgress((nextTime / duration) * 100);
    if (!isPlaying) setIsPlaying(true);
  };

  if (!sample) return null;

  const progressStyle = {
    background: `linear-gradient(90deg, rgba(28,155,244,0.9) ${progress}%, rgba(0,0,0,0.18) ${progress}%)`,
  };

  return (
    <section id="portfolio" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(28,155,244,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(85, 163, 247, 0.12),transparent_35%),radial-gradient(circle_at_60%_80%,rgba(14,165,233,0.1),transparent_40%)]" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative z-10 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Subtitle
            variant="halo"
            icon={HiMiniSpeakerWave}
            className="mx-auto mb-5 border-white/20 text-white/90"
            textClassName="tracking-[0.25em]"
          >
            Audiobook Preview
          </Subtitle>
          <Title
            as="h2"
            title={sample.title}
            variant="black"
            className="text-slate-900 text-3xl md:text-4xl"
          />
          {sample.text &&
            (Array.isArray(sample.text) ? (
              sample.text.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="mt-1 text-lg text-slate-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mt-1 text-lg text-slate-600 leading-relaxed">
                {sample.text}
              </p>
            ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl bg-linear-to-r from-primary/25 via-white/10 to-primary/25" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary-50 to-secondary-50 rounded-[28px]" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_10px_40px_rgba(15,23,42,0.15)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(0, 64, 255, 0.18),transparent_35%),linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />

              <div className="relative p-8 md:p-10 space-y-8 text-white">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="relative">
                      {isPlaying && (
                        <span className="absolute -inset-3.5 rounded-full bg-primary/25 blur-xl animate-ping" />
                      )}
                      <button
                        type="button"
                        onClick={() => setIsPlaying((prev) => !prev)}
                        className="relative flex size-16 items-center justify-center rounded-full bg-linear-to-br from-primary to-primary-400 shadow-xl shadow-primary/40 transition transform hover:scale-105 hover:shadow-primary/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                        aria-label={isPlaying ? "Pause sample" : "Play sample"}
                      >
                        {isPlaying ? (
                          <HiMiniPause className="text-2xl" />
                        ) : (
                          <HiMiniPlay className="text-2xl" />
                        )}
                      </button>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-black/60">
                        Studio-grade playback
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-black">
                        {sample.title}
                      </h3>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs uppercase tracking-wide text-black/70">
                        <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        {isPlaying ? "Live previewing" : "Ready to play"}
                      </div>
                    </div>
                  </div>

                  <div className="flex h-16 items-end gap-1.5 rounded-2xl bg-black/5 px-4 py-3 ring-1 ring-black/10 backdrop-blur">
                    {bars.map((height, idx) => (
                      <span
                        key={idx}
                        className={`sample-eq-bar ${
                          isPlaying ? "playing" : ""
                        } origin-bottom w-1.5 rounded-full bg-linear-to-t from-primary to-primary-300`}
                        style={{
                          height: `${height}%`,
                          animationDelay: `${idx * 0.06}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-black/70">
                    <HiMiniSpeakerWave className="text-lg text-primary-100" />
                    <span>Immersive audiobook cut with mastering applied.</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold tracking-wide text-black/60">
                      {formatTime(currentTime)}
                    </span>

                    <div className="relative flex-1">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="0.1"
                        value={progress}
                        onChange={(e) => handleSeek(Number(e.target.value))}
                        className="sample-range w-full cursor-pointer appearance-none rounded-full p-0"
                        style={progressStyle}
                        aria-label="Seek through sample"
                      />
                    </div>

                    <span className="text-xs font-semibold tracking-wide text-black/60">
                      {formatTime(duration || currentTime)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={sample.audio} preload="metadata" />

      <style jsx global>{`
        .sample-range {
          height: 12px;
          background: rgba(0, 0, 0, 0.15);
        }
        .sample-range::-webkit-slider-runnable-track {
          height: 12px;
          border-radius: 999px;
          background: transparent;
        }
        .sample-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 100%;
          background: #145d90;
          cursor: pointer;
          margin-top: -5px;
        }
        .sample-range::-moz-range-track {
          height: 12px;
          border-radius: 999px;
          background: transparent;
        }
        .sample-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: radial-gradient(circle, #000 35%, #1c9bf4 100%);
          border: 2px solid rgba(0, 0, 0, 0.35);
          box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.1),
            0 10px 30px rgba(28, 155, 244, 0.45);
          cursor: pointer;
        }
        .sample-eq-bar {
          transform: scaleY(0.55);
          transition: transform 0.4s ease, opacity 0.4s ease;
          opacity: 0.8;
        }
        .sample-eq-bar.playing {
          animation: sampleEq 1.4s ease-in-out infinite;
          opacity: 1;
        }
        @keyframes sampleEq {
          0%,
          100% {
            transform: scaleY(0.45);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Sample;
