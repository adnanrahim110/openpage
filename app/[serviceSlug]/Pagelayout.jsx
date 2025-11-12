"use client";

import Hero from "@/components/ui/Hero";
import { banners_terms_hero } from "@/public";
import { Fragment } from "react";

const parseDetail = (text) => {
  const renderBoldSegments = (content, keySeed = "b") => {
    const regex = /'([^']+)'/g;
    let lastIndex = 0;
    const result = [];
    let match;
    let idx = 0;

    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        result.push(content.substring(lastIndex, match.index));
      }
      result.push(
        <strong key={`${keySeed}-bold-${idx}`} className="text-black">
          {match[1]}
        </strong>
      );
      lastIndex = regex.lastIndex;
      idx++;
    }
    if (lastIndex < content.length) {
      result.push(content.substring(lastIndex));
    }
    return result;
  };

  const renderRichInline = (content) => {
    const linkRe = /<\s*\[([^\]]+)\]([^>]+)>/g;
    let lastIndex = 0;
    const nodes = [];
    let match;
    let idx = 0;

    while ((match = linkRe.exec(content)) !== null) {
      if (match.index > lastIndex) {
        const pre = content.slice(lastIndex, match.index);
        nodes.push(
          <Fragment key={`pre-${idx}`}>
            {renderBoldSegments(pre, `pre-${idx}`)}
          </Fragment>
        );
      }
      const href = match[1].trim();
      const label = match[2].trim();
      nodes.push(
        <a
          key={`a-${idx}`}
          href={href}
          className="font-medium text-black hover:text-primary transition-colors underline"
        >
          {renderBoldSegments(label, `a-${idx}`)}
        </a>
      );
      lastIndex = linkRe.lastIndex;
      idx++;
    }
    if (lastIndex < content.length) {
      const tail = content.slice(lastIndex);
      nodes.push(
        <Fragment key={`tail-${idx}`}>
          {renderBoldSegments(tail, `tail-${idx}`)}
        </Fragment>
      );
    }
    return nodes;
  };

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.map((line, index) => {
    if (line.startsWith("`") && line.endsWith("`")) {
      const listContent = line.slice(1, -1);
      const items = listContent.split("|").map((item) => item.trim());

      const listItems = items.map((item, i) => {
        if (item.includes("{") && item.includes("}")) {
          const regex = /(.*){(.*)}/;
          const match = item.match(regex);
          if (match) {
            const mainText = renderRichInline(match[1].trim());
            const nestedText = match[2].trim();
            const nestedItems = nestedText
              .split("\\")
              .map((t) => t.trim())
              .filter(Boolean);

            return (
              <li key={i} className="mb-4">
                {mainText}
                <ul className="pl-5 list-decimal my-4">
                  {nestedItems.map((nitem, j) => (
                    <li key={j}>{renderRichInline(nitem)}</li>
                  ))}
                </ul>
              </li>
            );
          }
        }
        return <li key={i}>{renderRichInline(item)}</li>;
      });

      return (
        <ul key={index} className="pl-6 list-disc marker:text-black">
          {listItems}
        </ul>
      );
    } else {
      return <p key={index}>{renderRichInline(line)}</p>;
    }
  });
};

const TermPageLayout = ({ term }) => {
  return (
    <>
      <Hero
        images={banners_terms_hero}
        subtitle="Open Page Publishing"
        title={term.title}
        text={term.description}
        actionBtns
      />
      <section className="py-16 border-b border-b-neutral-300">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:w-10/12">
              <div className="bg-white shadow-[0_0_5px] shadow-black/20 rounded-xl p-3 lg:p-8 text-sm relative">
                <p className="absolute right-2 top-1.5 text-xs text-neutral-500">
                  <strong className="mr-1">Effective Date:</strong> August 12,
                  2025
                </p>
                <div className="space-y-5 *:not-last:pb-5 divide-y divide-black/15">
                  {term.text.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-primary font-bold text-[44px] lg:text-4xl mb-4 text-primary">
                        {item.title}
                      </h3>
                      {parseDetail(item.detail || item.details)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermPageLayout;
