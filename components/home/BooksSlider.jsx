"use client";

import { homeSec3 } from "@/constants";
import { HiSparkles } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../ui/Title";

const BooksSlider = () => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="row justify-center">
          <div className="w-full lg:w-8/12 text-center">
            <Title
              as="h2"
              title="YOur Published Authors"
              className="font-normal"
            />
            <p className="lg:text-xl">
              Explore books created with passion, care, and professional
              craftsmanship. Every project reflects our commitment to helping
              authors share their stories with confidence.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-10 px-0 -mx-5 lg:-mx-10">
          <div className="relative w-full">
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className="premium-books-slider py-12! px-4! lg:px-12!"
            >
              {homeSec3.map((card, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="group relative h-full">
                      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      <div className="relative h-full backdrop-blur-sm bg-white/90 border border-gray-200/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:-translate-y-2">
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-primary" />

                        <div className="p-8 flex flex-col h-full">
                          <div className="relative mb-6 flex items-center justify-center">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-32 h-40 flex items-center justify-center">
                              <img
                                src={card.img.src}
                                alt={card.title}
                                className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </div>

                          <div className="flex-1 flex flex-col">
                            <h5 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 capitalize">
                              {card.title}
                            </h5>

                            <p className="text-sm lg:text-base text-gray-600 flex-1">
                              {card.text}
                            </p>
                          </div>
                        </div>

                        <div className="absolute top-4 right-4 w-12 h-12 bg-linear-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <HiSparkles className="text-primary text-xl" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .premium-books-slider .swiper-slide {
          transition: all 0.5s ease;
          opacity: 0.5;
        }

        .premium-books-slider .swiper-slide-active {
          opacity: 1;
        }

        .premium-books-slider .swiper-slide-prev,
        .premium-books-slider .swiper-slide-next {
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default BooksSlider;
