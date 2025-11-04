"use client";

import { usePopup } from "@/context/PopupProvider";
import {
  banners_cta_bg,
  portfolio_sq1,
  portfolio_sq2,
  portfolio_sq3,
  portfolio_sq4,
  portfolio_sq5,
  portfolio_sq6,
} from "@/public";
import React from "react";
import { MdStart } from "react-icons/md";
import Button from "../ui/Button";

const Cta = () => {
  const { openPopup } = usePopup();
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-primary-600 bg-blend-multiply"
        style={{ backgroundImage: `url(${banners_cta_bg})` }}
      />
      <div className="container">
        <div className="row gap-y-10 max-lg:text-center items-center justify-center">
          <div className="lg:w-[27%]">
            <div className="relative size-full min-h-[260px]">
              <div className="absolute left-1/2 max-lg:-translate-x-1/2 lg:left-8 top-5 size-[200px] m-auto perspective-[600px] *:transition-all duration-1000 ease-[cubic-bezier(0.5,-0.75,0.2,1.5)]">
                <div className="size-[inherit] transform transform-3d rotate-y-0 rotate-x-0 animate-rotate">
                  {[...Array(3)].map((_, idx) => (
                    <div
                      key={idx}
                      className={`block size-[inherit] absolute transform-3d bg-cover bg-center ${
                        idx === 0
                          ? "rotate-y-90"
                          : idx === 1
                          ? "rotate-x-90"
                          : "rotate-x-0"
                      }`}
                    >
                      <span
                        className={`block size-[inherit] absolute transform-3d bg-cover bg-center ${
                          idx === 0
                            ? "-translate-z-[100px] -rotate-z-90"
                            : idx === 1
                            ? "-translate-z-[100px]"
                            : "-translate-z-[100px]"
                        }`}
                        style={{
                          backgroundImage: `url(${
                            idx === 0
                              ? portfolio_sq1
                              : idx === 1
                              ? portfolio_sq3
                              : portfolio_sq4
                          })`,
                        }}
                      />
                      <span
                        className={`block size-[inherit] absolute transform-3d bg-cover bg-center ${
                          idx === 0
                            ? "translate-z-[100px] -rotate-z-90"
                            : idx === 1
                            ? "translate-z-[100px] -scale-[1]"
                            : "translate-z-[100px]"
                        }`}
                        style={{
                          backgroundImage: `url(${
                            idx === 0
                              ? portfolio_sq5
                              : idx === 1
                              ? portfolio_sq6
                              : portfolio_sq2
                          })`,
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="block size-[200px] bg-black/75 absolute top-3/5 transform rotate-x-90 -z-1 blur-[20px] left-0 right-0 m-auto animate-rotate-shadow" />
              </div>
            </div>
          </div>
          <div className="lg:w-8/12">
            <div className="flex flex-col gap-5">
              <h3 className="text-[26px] lg:text-[44px] text-white">
                All Set To Publish Your Book Globally?
              </h3>
              <p className="text-neutral-200">
                Explore our comprehensive suite of ghostwriting, editing,
                publishing and book marketing services.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Button icon={MdStart} secondary onClick={openPopup}>
                  Start a Project
                </Button>
                <Button btn2 secondary to="tel:+13462967813">
                  +1 346 296 7813
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
