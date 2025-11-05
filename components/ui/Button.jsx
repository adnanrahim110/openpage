"use client";

import Link from "next/link";
import React from "react";

const Button = ({
  to,
  onClick,
  children,
  type,
  icon,
  className,
  btn2,
  secondary,
  disabled,
  iconClass,
  small,
  target,
}) => {
  const Tag = to ? Link : "button";
  const Icon = icon;

  const bgColor = secondary
    ? `bg-secondary hover:bg-secondary-900 disabled:bg-neutral-700`
    : "bg-primary hover:bg-primary-950 disabled:bg-neutral-700";

  const borderColor = secondary
    ? "border-secondary-900 disabled:border-neutral-700"
    : "border-primary-950 disabled:border-neutral-700";

  const classes = `uppercase ${bgColor} relative text-white disabled:cursor-not-allowed flex font-barlow items-center border ${borderColor} overflow-hidden cursor-pointer transition-all duration-300 group ${className} ${
    small ? "text-xl h-10 pl-5 pr-16" : "text-2xl h-12 pl-8 pr-20"
  }`;

  const Iconbg = secondary
    ? "bg-secondary-900 group-disabled:bg-neutral-500"
    : "bg-primary-950 group-disabled:bg-neutral-500";

  return (
    <Tag
      {...(to
        ? { href: to, target: target }
        : { onClick: onClick, disabled: disabled, type: type })}
      className={`${
        btn2
          ? `border text-center font-medium flex items-center justify-center group ${
              secondary
                ? "border-white bg-white text-black hover:bg-transparent hover:text-white"
                : "border-black text-white bg-black hover:bg-transparent hover:text-black"
            } ${
              small ? "text-xl h-10 px-6" : "text-xl h-12 px-10"
            } cursor-pointer transition-all duration-300`
          : classes
      }`}
    >
      <span>{children}</span>
      {!btn2 && icon && (
        <span
          className={`absolute right-0 ${
            small ? "size-10 text-xl" : "size-12 text-2xl"
          } text-center flex items-center justify-center ${Iconbg} ${
            to ? "group-hover:w-full" : "group-enabled:group-hover:w-full"
          } transition-all duration-200 ease-linear`}
        >
          <Icon className={`group-disabled:animate-spin`} />
        </span>
      )}
    </Tag>
  );
};

export default Button;
