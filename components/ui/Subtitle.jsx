"use client";

import { cn } from "@/utils/cn";
import { forwardRef } from "react";

const BASE_CLASSES = {
  container:
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors duration-300",
  text: "text-sm font-semibold uppercase tracking-wide",
  icon: "text-lg",
  endIcon: "text-lg",
};

const VARIANTS = {
  soft: {
    container: "bg-linear-to-r from-primary-50 to-accent-50 border-primary-200",
    text: "text-primary",
    icon: "text-primary",
    endIcon: "text-primary",
  },
  neutral: {
    container: "bg-white border-gray-200 shadow-lg",
    text: "text-gray-900",
    icon: "text-primary",
    endIcon: "text-primary",
  },
  halo: {
    container:
      "bg-linear-to-r from-primary/10 via-purple-500/10 to-primary/10 backdrop-blur-sm border-primary/20 shadow-lg",
    text: "text-primary tracking-wider",
    icon: "text-primary",
    endIcon: "text-primary",
  },
  glass: {
    container:
      "bg-linear-to-r from-primary/20 to-primary/5 backdrop-blur-xl border-primary/30 shadow-[0_0_20px_rgba(25,123,188,0.2)]",
    text: "text-white tracking-wider",
    icon: "text-primary",
    endIcon: "text-primary",
  },
};

const getVariantStyles = (variant) => VARIANTS[variant] ?? VARIANTS.soft;

const Subtitle = forwardRef(
  (
    {
      as: Component = "div",
      children,
      icon: Icon,
      endIcon: EndIcon,
      variant = "soft",
      className = "",
      textClassName = "",
      iconClassName = "",
      endIconClassName = "",
      iconWrapperClassName = "",
      endIconWrapperClassName = "",
      ...rest
    },
    ref
  ) => {
    const variantStyles = getVariantStyles(variant);
    const containerClass = cn(
      BASE_CLASSES.container,
      variantStyles.container,
      className
    );
    const textClass = cn(BASE_CLASSES.text, variantStyles.text, textClassName);
    const iconClass = cn(BASE_CLASSES.icon, variantStyles.icon, iconClassName);
    const endIconClass = cn(
      BASE_CLASSES.endIcon,
      variantStyles.endIcon,
      endIconClassName
    );

    return (
      <Component ref={ref} className={containerClass} {...rest}>
        {Icon && (
          <span className={iconWrapperClassName}>
            <Icon className={iconClass} />
          </span>
        )}
        <span className={textClass}>{children}</span>
        {EndIcon && (
          <span className={endIconWrapperClassName}>
            <EndIcon className={endIconClass} />
          </span>
        )}
      </Component>
    );
  }
);

Subtitle.displayName = "Subtitle";

export default Subtitle;
