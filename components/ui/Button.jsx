"use client";

import { cn } from "@/utils/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Button = ({
  children,
  href,
  onClick,
  type,
  disabled,
  className = "",
  target,
  tone = "primary",
  variant = "solid",
  contentClassName = "",
  showArrow = true,
  size = "md",
  icon: Icon,
  iconPosition = "left",
  iconClassName = "",
}) => {
  const Tag = href ? Link : "button";

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-6 py-2.5 text-base";
      case "lg":
        return "px-10 py-4 text-lg";
      case "xl":
        return "px-12 py-5 text-2xl";
      default:
        return "px-8 py-3 text-lg";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-6 h-6";
      case "xl":
        return "w-7 h-7";
      default:
        return "w-5 h-5";
    }
  };

  const getVariantClasses = () => {
    const baseClasses =
      "shadow-lg hover:shadow-2xl transition-all duration-500 rounded-xl border-2";

    if (variant === "solid") {
      switch (tone) {
        case "primary":
          return `${baseClasses} border-primary-600 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700`;
        case "secondary":
          return `${baseClasses} border-secondary-600 bg-linear-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700`;
        case "dark":
          return `${baseClasses} border-gray-900 bg-linear-to-r from-gray-900 to-black hover:from-black hover:to-gray-900`;
        case "light":
          return `${baseClasses} border-gray-100 bg-linear-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white`;
        default:
          return `${baseClasses} border-primary-600 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700`;
      }
    } else {
      switch (tone) {
        case "primary":
          return `${baseClasses} border-primary-500 hover:border-primary-600 bg-primary-50/50 hover:bg-primary-100/50`;
        case "secondary":
          return `${baseClasses} border-secondary-500 hover:border-secondary-600 bg-secondary-50/50 hover:bg-secondary-100/50`;
        case "dark":
          return `${baseClasses} border-gray-800 hover:border-black bg-gray-50/50 hover:bg-gray-100/50`;
        case "light":
          return `${baseClasses} bg-white/10 backdrop-blur-sm border-white/30 hover:border-white/50 hover:bg-white/20`;
        default:
          return `${baseClasses} border-primary-500 hover:border-primary-600 bg-primary-50/50 hover:bg-primary-100/50`;
      }
    }
  };

  const getTextColorClasses = () => {
    if (variant === "outline") {
      switch (tone) {
        case "primary":
          return "text-primary-600 group-hover/btn:text-white";
        case "secondary":
          return "text-secondary-600 group-hover/btn:text-white";
        case "dark":
          return "text-gray-900 group-hover/btn:text-white";
        case "light":
          return "text-white group-hover/btn:text-gray-900";
        default:
          return "text-primary-600 group-hover/btn:text-white";
      }
    } else {
      switch (tone) {
        case "primary":
          return "text-white group-hover/btn:text-primary-600";
        case "secondary":
          return "text-white group-hover/btn:text-secondary-600";
        case "dark":
          return "text-white group-hover/btn:text-primary-600";
        case "light":
          return "text-gray-900 group-hover/btn:text-white";
        default:
          return "text-white group-hover/btn:text-primary-600";
      }
    }
  };

  const getAnimationBgClasses = () => {
    if (variant === "solid") {
      switch (tone) {
        case "primary":
          return "bg-white";
        case "secondary":
          return "bg-white";
        case "dark":
          return "bg-primary-500";
        case "light":
          return "bg-black";
        default:
          return "bg-white";
      }
    } else {
      switch (tone) {
        case "primary":
          return "bg-primary-500";
        case "secondary":
          return "bg-secondary-500";
        case "dark":
          return "bg-black";
        case "light":
          return "bg-white";
        default:
          return "bg-primary-500";
      }
    }
  };

  return (
    <Tag
      {...(href ? { href, target } : { onClick, type, disabled })}
      className={cn(
        "cursor-pointer font-semibold inline-flex items-center justify-center gap-2.5 overflow-hidden relative group/btn disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg",
        getSizeClasses(),
        getVariantClasses(),
        className
      )}
    >
      <span
        className={cn(
          "relative z-20 font-semibold transition-all duration-500 flex items-center gap-2.5",
          getTextColorClasses(),
          contentClassName
        )}
      >
        {Icon && iconPosition === "left" && (
          <Icon
            className={cn(
              getIconSize(),
              "transition-all duration-300",
              iconClassName
            )}
          />
        )}

        <span className="inline-flex items-center justify-center gap-2">
          {children}
        </span>

        {Icon && iconPosition === "right" && (
          <Icon
            className={cn(
              getIconSize(),
              "transition-all duration-300",
              iconClassName
            )}
          />
        )}

        {showArrow && !Icon && (
          <ArrowRight
            className={cn(
              "transition-all duration-300 group-hover/btn:translate-x-1",
              getIconSize()
            )}
          />
        )}
      </span>

      <span
        className={cn(
          "absolute w-full h-full -left-full top-0 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:left-0 transition-all duration-500",
          getAnimationBgClasses()
        )}
      />

      <span
        className={cn(
          "absolute w-full h-full -right-full top-0 -rotate-45 group-hover/btn:rotate-0 group-hover/btn:right-0 transition-all duration-500",
          getAnimationBgClasses()
        )}
      />
    </Tag>
  );
};

export default Button;
