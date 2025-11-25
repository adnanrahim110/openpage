"use client";

import Sec2 from "@/components/home/Sec2";
import BrandsSlider from "@/components/layouts/BrandsSlider";
import Cta from "@/components/layouts/Cta";
import Faqs from "@/components/layouts/Faqs";
import Form from "@/components/layouts/Form";
import PortfolioSlider from "@/components/layouts/PortfolioSlider";
import Testimonials from "@/components/layouts/Testimonials";
import BenefitsSection from "@/components/service/BenefitsSection";
import Process2 from "@/components/service/Process2";
import ProcessTimeline from "@/components/service/ProcessTimeline";
import Sample from "@/components/service/Sample";
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
        btn1={service.hero.btn1}
        btn2={service.hero.btn2}
        btn2Action={service.hero.btn2Action}
      />

      <BrandsSlider />

      {service.process && service.process.second ? (
        <Process2 process={service.process} />
      ) : (
        <ProcessTimeline process={service.process} />
      )}

      <TitleMarquee service={service} />

      {service.overflow && <ServiceBody service={service} />}

      {service.sample && <Sample sample={service.sample} />}

      <BenefitsSection service={service} />

      {service.sec2 && (
        <Sec2
          title={service.sec2 && service.sec2.title}
          text={service.sec2 && service.sec2.text}
          img={service.sec2.img && service.sec2.img}
        />
      )}

      <PortfolioSlider bg="bg-white" />

      <Testimonials />

      <Cta />

      {service.faq && (
        <Faqs
          qouestionare={service.qouestionare ? service.qouestionare : faqs}
        />
      )}

      {service.faqs && <Faqs qouestionare={service.faqs} />}

      <Form
        title={service.form && service.form.title}
        text={service.form && service.form.text}
        points={service.form && service.form.points}
        highlight={service.form && service.form.titleHighlight}
      />
    </>
  );
};

export default ServicePageLayout;
