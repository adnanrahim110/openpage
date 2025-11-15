"use client";

import Sec2 from "@/components/home/Sec2";
import BrandsSlider from "@/components/layouts/BrandsSlider";
import Cta from "@/components/layouts/Cta";
import Faqs from "@/components/layouts/Faqs";
import Form from "@/components/layouts/Form";
import PortfolioSlider from "@/components/layouts/PortfolioSlider";
import Testimonials from "@/components/layouts/Testimonials";
import BenefitsSection from "@/components/service/BenefitsSection";
import ServiceBody from "@/components/service/ServiceBody";
import TitleMarquee from "@/components/service/TitleMarquee";
import Hero from "@/components/ui/Hero";
import { faqs } from "@/constants";
import { banners_services_hero } from "@/public";
import { usePathname } from "next/navigation";

const ServicePageLayout = ({ service }) => {
  const pathname = usePathname();

  return (
    <>
      <Hero
        contentLg
        actionBtns
        comp
        images={service.hero.img || banners_services_hero}
        gradient={pathname === "/childrens-book-publishing" ? false : true}
        subtitle={service.title}
        title={service.hero.title}
        text={service.hero.text}
        qoute={service.hero.qoute}
      />

      <BrandsSlider />

      <TitleMarquee service={service} />

      <ServiceBody service={service} />

      <BenefitsSection service={service} />

      <Sec2
        title={service.sec2 && service.sec2.title}
        text={service.sec2 && service.sec2.text}
        img={service.sec2.img && service.sec2.img}
      />

      <Testimonials />

      <PortfolioSlider bg="bg-white" />

      <Cta />

      {service.faq && (
        <Faqs
          qouestionare={service.qouestionare ? service.qouestionare : faqs}
        />
      )}

      <Form />
    </>
  );
};

export default ServicePageLayout;
