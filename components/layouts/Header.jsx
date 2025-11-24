"use client";

import { contactDetails, navigation } from "@/constants";
import { nav_logo2 } from "@/public";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RxTriangleDown } from "react-icons/rx";
import Button from "../ui/Button";
import DropdownMenu from "./DropdownMenu";

const trimPath = (value = "") => {
  if (!value) return "";
  if (value === "/") return "/";
  return value.replace(/\/+$/, "");
};

const isPathActive = (pathname, target) => {
  if (!target) return false;
  const current = trimPath(pathname);
  const desired = trimPath(target);
  if (!desired) return false;
  if (desired === "/") return current === "/";
  return current === desired || current.startsWith(`${desired}/`);
};

const Header = ({ setIsSidebar }) => {
  const [{ atTop, scrollingUp }, setScrollState] = useState({
    atTop: true,
    scrollingUp: false,
  });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const nextState = {
        atTop: y <= 8,
        scrollingUp: y < lastScrollY.current,
      };

      lastScrollY.current = y;

      setScrollState((prev) =>
        prev.atTop === nextState.atTop &&
        prev.scrollingUp === nextState.scrollingUp
          ? prev
          : nextState
      );

      if (!nextState.scrollingUp) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickAway = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    return () => document.removeEventListener("mousedown", handleClickAway);
  }, []);

  const topContacts = contactDetails.slice(0, 3);
  const formatLabel = (label) =>
    label.endsWith("Us") ? label.replace(/Us$/, "Us:") : `${label}:`;

  const headerClasses = [
    "font-barlow",
    "z-999",
    "left-0",
    "top-0",
    "w-full",
    "transition-transform",
    "duration-300",
    "ease-linear",
    pathname === "/thankyou" ? "hidden" : "",
    atTop ? "absolute" : "fixed",
    atTop
      ? "translate-y-0"
      : scrollingUp
      ? "translate-y-0 lg:-translate-y-12"
      : "-translate-y-full",
    atTop ? "" : "shadow-[0_12px_24px_rgba(0,0,0,0.18)]",
  ]
    .filter(Boolean)
    .join(" ");

  const renderTriggerContent = (title, showCaret, caretActive) => (
    <span className="inline-flex items-center gap-1">
      {title}
      {showCaret ? (
        <RxTriangleDown
          className={`text-base transition-transform duration-200 ${
            caretActive ? "rotate-180" : ""
          }`}
        />
      ) : null}
    </span>
  );

  const isItemActive = (item) => {
    if (isPathActive(pathname, item.link)) {
      return true;
    }

    if (Array.isArray(item.dropdown)) {
      return item.dropdown.some((dropdownItem) =>
        isPathActive(pathname, dropdownItem.link)
      );
    }

    return false;
  };

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="hidden md:block bg-white text-slate-600">
        <div className="container mx-auto flex items-center justify-end gap-6 py-2 font-semibold tracking-wide">
          <span className="mr-5 text-slate-700">For inquiries & support -</span>
          {topContacts.map((detail, idx) => {
            const Icon = detail.icon;
            const body = (
              <>
                <Icon className="text-primary-600 text-base" />
                <span className="flex items-center gap-1 text-sm font-semibold text-neutral-700">
                  <span>{formatLabel(detail.name)}</span>
                  <span className="text-slate-900">{detail.text}</span>
                </span>
              </>
            );

            return detail.href ? (
              <a
                key={`${detail.name}-${idx}`}
                href={detail.href}
                className="flex items-center gap-2 transition-colors duration-150 hover:text-primary-700"
                title={detail.name}
              >
                {body}
              </a>
            ) : (
              <span
                key={`${detail.name}-${idx}`}
                className="flex items-center gap-2"
                title={detail.name}
              >
                {body}
              </span>
            );
          })}
        </div>
      </div>

      <div
        className={`transition-[padding] duration-300 ease-linear ${
          atTop ? "py-2 bg-black/5 backdrop-blur-xs" : "py-1 bg-primary-950"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between text-white">
          <Link href="/" className="flex items-center gap-3">
            <Image
              width={1080}
              height={400}
              src={nav_logo2}
              alt="Ink Nest Publishing"
              className={`h-auto transition-all duration-300 ease-linear ${
                atTop ? "lg:-mt-9 lg:-ml-6 w-[200px] lg:w-[300px]" : "mt-0 w-60"
              }`}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center">
            <ul className="flex items-center gap-5 text-lg">
              {navigation.map((item, idx) => {
                const hasDropdown =
                  Array.isArray(item.dropdown) && item.dropdown.length > 0;
                const dropdownOpen = hasDropdown && activeDropdown === idx;
                const itemActive = isItemActive(item);
                const triggerBase =
                  "relative inline-flex items-center gap-2 py-2 text-lg transition-colors duration-200";
                const triggerContent = renderTriggerContent(
                  item.title,
                  hasDropdown,
                  dropdownOpen
                );
                const openDropdown = hasDropdown
                  ? () => setActiveDropdown(idx)
                  : undefined;

                return (
                  <li
                    key={idx}
                    className="relative flex items-center"
                    onMouseEnter={openDropdown}
                  >
                    {item.link ? (
                      <Link
                        href={item.link}
                        className={cn(
                          triggerBase,
                          "after:absolute after:top-full after:left-0 after:h-px after:transition-all after:duration-300 after:ease-linear",
                          atTop ? "after:bg-primary" : "after:bg-primary-300",
                          itemActive || dropdownOpen
                            ? atTop
                              ? "text-primary-400"
                              : "text-primary-300"
                            : atTop
                            ? "text-white"
                            : "text-neutral-300",
                          itemActive || dropdownOpen
                            ? "after:w-full"
                            : "after:w-0 hover:after:w-full"
                        )}
                        onFocus={openDropdown}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {triggerContent}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className={cn(triggerBase)}
                        onFocus={openDropdown}
                        onClick={() =>
                          setActiveDropdown(dropdownOpen ? null : idx)
                        }
                      >
                        {triggerContent}
                      </button>
                    )}

                    {dropdownOpen && (
                      <DropdownMenu
                        extraClasses="absolute left-1/2 top-full mt-4 -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-[0_18px_45px] shadow-black/25 min-w-[220px] font-open-sans font-medium"
                        visible
                      >
                        {item.dropdown.map((dropdownItem, dropdownIdx) => {
                          const dropdownItemActive = isPathActive(
                            pathname,
                            dropdownItem.link
                          );

                          return (
                            <li
                              key={dropdownIdx}
                              className="border-b border-slate-200 last:border-none"
                            >
                              <Link
                                href={dropdownItem.link}
                                className={`flex items-center justify-between px-6 py-3 text-[15px] transition-colors duration-150 ${
                                  dropdownItemActive
                                    ? "bg-primary-600 text-white"
                                    : "hover:bg-primary-50 text-black"
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="whitespace-nowrap">
                                  {dropdownItem.title}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </DropdownMenu>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              href="/contact"
              tone="primary"
              variant="solid"
              size="sm"
              showArrow={false}
            >
              Contact Us
            </Button>
          </div>

          <button
            className="ml-auto flex h-8 w-9 items-center justify-center lg:hidden"
            onClick={() => setIsSidebar(true)}
            aria-label="Open navigation menu"
          >
            <span className="relative block h-4 w-full">
              {[0, 1, 2].map((line) => (
                <span
                  key={line}
                  className={`absolute left-0 block h-0.5 w-full origin-center bg-white transition-all duration-300 ease-out ${
                    line === 0
                      ? "top-0"
                      : line === 1
                      ? "top-1/2 -translate-y-1/2"
                      : "bottom-0"
                  }`}
                />
              ))}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
