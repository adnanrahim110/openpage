"use client";

import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

import { navigation } from "@/constants";
import { nav_logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";

const SideBar = ({ isSidebar, setIsSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsSidebar(false);
  }, [pathname]);

  const isActiveItem = (item) => {
    if (item.link && pathname === item.link) return true;

    if (item.dropdown) {
      return item.dropdown.some((dropdownItem) => {
        if (pathname === dropdownItem.link) return true;
        return false;
      });
    }
    return false;
  };

  return (
    <div
      className={`fixed flex w-full h-screen top-0 left-0 z-1000 ${
        isSidebar ? "translate-x-0 pointer-events-auto" : " pointer-events-none"
      }`}
    >
      <div
        className={`relative flex flex-col items-start h-full text-[#212529] bg-white transition-transform ease-[cubic-bezier(0.7,0,0.2,1)] duration-500 overflow-y-auto z-1 w-full ${
          isSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-between w-full py-7 px-5">
          <Image
            width={1080}
            height={500}
            src={nav_logo}
            className="w-3/5 md:w-1/3"
            alt="Amazon Publishing Process"
          />
          <div className="inline-flex items-center shrink-0">
            <button
              className="inline-flex items-center justify-center text-[40px] text-current rounded-full"
              onClick={() => setIsSidebar(false)}
            >
              <MdOutlineClose />
            </button>
          </div>
        </div>
        <div className="grow shrink-0 basis-0 w-full py-5 overflow-hidden mb-10">
          <nav className="h-full overflow-hidden">
            <ul className="w-full flex flex-col font-orbitron h-full overflow-y-auto">
              {navigation.map((item, idx) => {
                const isDropdownActive =
                  item.dropdown && activeDropdown === idx;

                const Wrapper = item.link ? Link : "div";
                return (
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(activeDropdown === idx ? null : idx);
                    }}
                    key={idx}
                    className="w-full"
                  >
                    <Wrapper
                      {...(item.link ? { href: item.link } : {})}
                      className={`px-5 w-full h-12 text-base font-medium flex items-center justify-between flex-wrap gap-2 ${
                        isActiveItem(item)
                          ? "bg-primary-100 text-secondary"
                          : isDropdownActive
                          ? "bg-primary-50"
                          : "bg-white hover:bg-primary-50 hover:text-primary"
                      } transition-all duration-200 ease-in-out select-none`}
                    >
                      <span className="inline-flex items-center gap-2 text-current">
                        {item.title}
                      </span>
                      {!item.link && (
                        <span>
                          <FaAngleDown
                            className={`transition-all duration-200 ease-linear ${
                              isDropdownActive ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      )}
                    </Wrapper>
                    {item.dropdown && (
                      <ul
                        style={{
                          maxHeight: isDropdownActive ? `100%` : "0px",
                        }}
                        className={`bg-gray-100 overflow-hidden transition-[max-height] duration-400 ease-[cubic-bezier(0.7,0,0.2,1)]`}
                      >
                        {item.dropdown.map((ddItem, d_idx) => {
                          const isSubmenuopen =
                            ddItem.submenu && activeSubmenu === idx;
                          return (
                            <li
                              key={d_idx}
                              className={`${
                                pathname === ddItem.link
                                  ? "bg-white text-primary"
                                  : "bg-gray-100 text-black hover:bg-gray-50 hover:text-primary"
                              } pl-10 pr-5 transition-all duration-200 ease-out`}
                            >
                              <div className="text-sm font-normal h-11 flex items-center flex-wrap">
                                <Link
                                  href={ddItem.link}
                                  className="grow shrink-0 basis-0 leading-none flex justify-between items-center"
                                >
                                  <span>{ddItem.title}</span>
                                  {ddItem.submenu && (
                                    <span>
                                      <FaAngleDown
                                        className={`transition-all duration-200 ease-linear`}
                                      />
                                    </span>
                                  )}
                                </Link>
                              </div>
                              {ddItem.submenu && (
                                <ul
                                  className={`bg-gray-100 overflow-hidden transition-[max-height] duration-400 ease-[cubic-bezier(0.7,0,0.2,1)]`}
                                >
                                  {ddItem.submenu.map((submenuItem, s_idx) => {
                                    return (
                                      <li
                                        key={s_idx}
                                        className={`${
                                          pathname === submenuItem.link
                                            ? "bg-white text-primary"
                                            : "bg-gray-100 text-black hover:bg-gray-50 hover:text-primary"
                                        } pl-5 pr-5 transition-all duration-200 ease-out`}
                                      >
                                        <Link
                                          href={submenuItem.link}
                                          className="text-sm font-normal h-11 flex items-center flex-wrap"
                                        >
                                          <span>{submenuItem.title}</span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="w-full text-left mb-5 px-5">
          <Link
            href="/contact"
            className="py-2 inline-block whitespace-nowrap text-center rounded-lg px-8 font-medium uppercase bg-black text-white cursor-pointer border-2 border-black hover:bg-white hover:text-black"
          >
            Get a free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
