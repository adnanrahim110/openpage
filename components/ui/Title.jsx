"use client";

import { cn } from "@/utils/cn";
import { forwardRef } from "react";

const SIZE_MAP = {
  h1: "text-4xl md:text-6xl lg:text-7xl",
  h2: "text-2xl md:text-5xl lg:text-[46px]",
  h3: "text-2xl md:text-4xl lg:text-5xl",
  h4: "text-2xl md:text-3xl lg:text-4xl",
  h5: "text-xl md:text-2xl lg:text-3xl",
  span: "text-2xl md:text-3xl lg:text-4xl",
  p: "text-2xl md:text-3xl lg:text-4xl",
};

const VARIANT_CLASSES = {
  black: "text-gray-900",
  white: "text-white",
  primary: "text-primary",
  secondary: "text-secondary",
};

const COLOR_CLASSES = {
  primary: "text-primary",
  secondary: "text-secondary",
  black: "text-gray-900",
  white: "text-white",
};

const HIGHLIGHT_DEFAULT = {
  black: "primary",
  white: "secondary",
  primary: "secondary",
  secondary: "primary",
};

const Title = forwardRef(
  (
    {
      as: Component = "h2",
      title,
      children,
      highlight,
      highlightColor,
      variant = "black",
      className = "",
      highlightClassName = "",
      ...rest
    },
    ref
  ) => {
    const tag = typeof Component === "string" ? Component.toLowerCase() : "h2";
    const sizeClass = SIZE_MAP[tag] ?? SIZE_MAP.h2;
    const variantClass = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.black;
    const highlightToneKey =
      highlightColor ?? HIGHLIGHT_DEFAULT[variant] ?? "primary";
    const highlightToneClass =
      COLOR_CLASSES[highlightToneKey] ?? COLOR_CLASSES.primary;
    const highlightClasses = cn(
      "font-inherit",
      highlightToneClass,
      highlightClassName
    );

    const baseClass = cn("font-bold", sizeClass, variantClass, className);

    const highlightList = Array.isArray(highlight)
      ? highlight.filter(Boolean)
      : highlight
      ? [highlight]
      : [];

    let highlightKey = 0;

    const applyHighlight = (text) => {
      if (!highlightList.length) return text;

      let segments = [text];
      highlightList.forEach((segmentHighlight, highlightIndex) => {
        if (!segmentHighlight) return;
        const nextSegments = [];

        segments.forEach((segment) => {
          if (typeof segment !== "string") {
            nextSegments.push(segment);
            return;
          }

          if (!segment.includes(segmentHighlight)) {
            nextSegments.push(segment);
            return;
          }

          const parts = segment.split(segmentHighlight);

          parts.forEach((part, partIndex) => {
            if (part) nextSegments.push(part);
            if (partIndex < parts.length - 1) {
              highlightKey += 1;
              nextSegments.push(
                <span
                  key={`title-highlight-${highlightIndex}-${highlightKey}`}
                  className={highlightClasses}
                >
                  {segmentHighlight}
                </span>
              );
            }
          });
        });

        segments = nextSegments;
      });

      return segments;
    };

    const textContent =
      typeof title === "string"
        ? title
        : typeof children === "string"
        ? children
        : null;

    const content =
      textContent !== null
        ? applyHighlight(textContent)
        : title ?? children ?? null;

    return (
      <Component ref={ref} className={baseClass} {...rest}>
        {content}
      </Component>
    );
  }
);

Title.displayName = "Title";

export default Title;
