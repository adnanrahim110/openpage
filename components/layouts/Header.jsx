"use client";

import { navigation } from "@/constants";
import { icons_call, nav_logo2 } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { RxTriangleDown } from "react-icons/rx";
import DropdownMenu from "./DropdownMenu";
import Submenu from "./Submenu";

const Header = ({ setIsSidebar }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState({});
  const navRef = useRef(null);
  const location = usePathname();

  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubDropdown({});
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      setActiveDropdown(null);
      setActiveSubDropdown({});
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSubDropdown = (idx, value) => {
    setActiveSubDropdown((prev) => ({ ...prev, [idx]: value }));
  };

  const isActiveItem = (item) => {
    if (item.link && location === item.link) return true;

    if (item.dropdown) {
      return item.dropdown.some((dropdownItem) => {
        if (location === dropdownItem.link) return true;
        if (dropdownItem.submenu) {
          return dropdownItem.submenu.some(
            (subItem) => location === subItem.link
          );
        }
        return false;
      });
    }
    return false;
  };

  return (
    <header
      ref={navRef}
      className={`font-dm uppercase z-999 left-0 top-5 ${
        location === "/thankyou" ? "hidden" : ""
      } ${
        isAtTop
          ? "absolute"
          : isScrollingUp
          ? "fixed translate-y-0"
          : "fixed -translate-y-[125%]"
      } w-full transition-all duration-200 ease-linear`}
    >
      <div
        className={`flex items-center justify-between relative container rounded-full ${
          isAtTop ? "bg-white/8 backdrop-blur-[3px]" : "bg-primary-900"
        }`}
      >
        <Link href="/" className="pl-2 relative inline-block">
          <Image
            width={1080}
            height={400}
            src={nav_logo2}
            alt="Western Book Publishing"
            className="h-auto max-w-[170px]"
          />
        </Link>
        <ul className="hidden lg:flex justify-center items-center gap-12">
          {navigation.map((item, idx) => {
            const isDropdownActive = item.dropdown && activeDropdown === idx;
            return (
              <li
                key={idx}
                className="relative group flex items-center justify-between text-xl uppercase tracking-wider"
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeDropdown === idx) {
                    setActiveDropdown(null);
                    setActiveSubDropdown({});
                  } else {
                    setActiveDropdown(idx);
                  }
                }}
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className={`relative inline-block before:h-0.5 before:absolute text-white before:bg-secondary before:left-0 before:top-full ${
                      isActiveItem(item)
                        ? "before:w-full"
                        : "before:w-0 hover:before:w-full"
                    } before:transition-all before:duration-200 before:ease-linear`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <span
                      className={`relative cursor-pointer inline-block before:h-0.5 before:absolute text-white before:bg-secondary before:left-0 before:top-full ${
                        isActiveItem(item) || isDropdownActive
                          ? "before:w-full"
                          : "before:w-0 hover:before:w-full"
                      } before:transition-all before:duration-200 before:ease-linear`}
                    >
                      {item.title}
                    </span>
                    <span className="ml-1 text-lg">
                      <RxTriangleDown
                        className={`transition-all duration-300 ease-out ${
                          isDropdownActive
                            ? "text-secondary rotate-180"
                            : isActiveItem(item)
                            ? "text-secondary"
                            : "text-white"
                        }`}
                      />
                    </span>
                  </>
                )}
                {item.dropdown && isDropdownActive && (
                  <DropdownMenu
                    extraClasses="absolute top-full mt-[18px] bg-white rounded-2xl shadow-lg flex flex-col z-992"
                    visible={isDropdownActive}
                  >
                    {item.dropdown.map((dropdownItem, dropdownIdx) => (
                      <li
                        key={dropdownIdx}
                        className={`relative not-last:border-b border-primary-100 first:*:rounded-t-2xl last:*:rounded-b-2xl ${
                          isDropdownActive ? "z-992" : "z-0"
                        }`}
                        onMouseEnter={() =>
                          dropdownItem.submenu
                            ? toggleSubDropdown(dropdownIdx, true)
                            : null
                        }
                        onMouseLeave={() =>
                          dropdownItem.submenu
                            ? toggleSubDropdown(dropdownIdx, false)
                            : null
                        }
                      >
                        <Link
                          href={dropdownItem.link || "#"}
                          className={`flex justify-between text-base uppercase font-normal tracking-wide whitespace-nowrap items-center px-5 py-1.5 transition duration-200 ease-in-out  ${
                            location === dropdownItem.link ||
                            (dropdownItem.submenu &&
                              dropdownItem.submenu.some(
                                (subItem) => location === subItem.link
                              ))
                              ? "bg-primary text-white"
                              : "bg-white hover:bg-primary-100 text-black"
                          }`}
                        >
                          {dropdownItem.title}
                          {dropdownItem.submenu && (
                            <RxTriangleDown
                              className={`-mt-0.5 transition-all duration-300 ease-out ${
                                activeSubDropdown[dropdownIdx]
                                  ? "text-secondary -rotate-90"
                                  : location === dropdownItem.link ||
                                    (dropdownItem.submenu &&
                                      dropdownItem.submenu.some(
                                        (subItem) => location === subItem.link
                                      ))
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            />
                          )}
                        </Link>
                        {dropdownItem.submenu &&
                          activeSubDropdown[dropdownIdx] && (
                            <Submenu
                              extraClasses="absolute top-0 left-full bg-primary shadow-lg min-w-[200px] flex flex-col z-992"
                              visible={
                                isDropdownActive &&
                                activeSubDropdown[dropdownIdx]
                              }
                            >
                              {dropdownItem.submenu.map(
                                (submenuItem, submenuIdx) => (
                                  <li
                                    key={submenuIdx}
                                    className={`relative border-b border-primary-900 ${
                                      isDropdownActive ? "z-992" : "z-0"
                                    }`}
                                  >
                                    <Link
                                      href={submenuItem.link || "#"}
                                      className={`flex justify-between text-base uppercase font-normal tracking-wide whitespace-nowrap items-center px-5 py-1.5 transition duration-200 ease-in-out  ${
                                        location === submenuItem.link ||
                                        (submenuItem.submenu &&
                                          submenuItem.submenu.some(
                                            (subItem) =>
                                              location === subItem.link
                                          ))
                                          ? "bg-white text-black"
                                          : "bg-primary hover:bg-primary-900 text-white"
                                      }`}
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  </li>
                                )
                              )}
                            </Submenu>
                          )}
                      </li>
                    ))}
                  </DropdownMenu>
                )}
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:block md:ml-5 lg:ml-16 text-2xl text-white mr-5">
          <a
            href="tel:+13462967813"
            className="flex items-center justify-center text-center gap-2.5"
          >
            <Image
              width={512}
              height={512}
              src={icons_call}
              className="h-7 w-auto"
              alt=""
            />
            <span>+1 346 296 7813</span>
          </a>
        </div>
        <button
          className="ml-auto w-9 h-6 relative lg:hidden"
          onClick={() => setIsSidebar(true)}
        >
          <span className="block size-full relative">
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`block absolute left-0 w-full h-0.5 bg-white origin-center transition-all duration-300 ease-out ${
                  index === 0
                    ? "top-0"
                    : index === 1
                    ? " top-1/2 -translate-y-1/2 duration-75"
                    : "bottom-0"
                }`}
              />
            ))}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
