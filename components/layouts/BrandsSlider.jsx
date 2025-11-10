"use client";

import {
  brands_1,
  brands_2,
  brands_3,
  brands_4,
  brands_5,
  brands_6,
  brands_7,
  brands_8,
  brands_9,
} from "@/public";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandsSlider = ({ className }) => {
  return (
    <section className={`relative py-12 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gray-50/50" />

      <div className="container relative z-10">
        <div className="row">
          <div className="w-full">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-50/50 to-transparent z-10 pointer-events-none" />

              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 0 }}
                speed={3000}
                slidesPerView={7}
                draggable={false}
                allowTouchMove={false}
                breakpoints={{
                  0: { slidesPerView: 3 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 7 },
                }}
                spaceBetween={50}
                className="overflow-clip! relative touch-pan-y! *:ease-linear! *:items-center"
              >
                {[
                  brands_1,
                  brands_2,
                  brands_3,
                  brands_4,
                  brands_5,
                  brands_6,
                  brands_7,
                  brands_8,
                  brands_9,
                ].map((b, idx) => (
                  <SwiperSlide key={idx} className="size-full">
                    <div className="size-full flex items-center justify-center">
                      <Image
                        width={400}
                        height={100}
                        src={b}
                        alt={`brand ${idx + 1}`}
                        className="size-full max-h-8 object-contain "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSlider;
