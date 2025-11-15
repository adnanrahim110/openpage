import BooksSlider from "@/components/home/BooksSlider";
import Sec3 from "@/components/home/Sec3";
import Sec4 from "@/components/home/Sec4";
import BrandsSlider from "@/components/layouts/BrandsSlider";
import Faqs from "@/components/layouts/Faqs";
import Form from "@/components/layouts/Form";
import Process from "@/components/layouts/Process";
import RoundSlider from "@/components/layouts/RoundSlider";
import ServicesSec from "@/components/layouts/ServicesSec";
import Testimonials from "@/components/layouts/Testimonials";
import Hero from "@/components/ui/Hero";
import { banners_library } from "@/public";

export default function Home() {
  return (
    <>
      <Hero
        title="Bring Your Story to Life with Open Page Publishing"
        subtitle="Open Page Publishing"
        images={banners_library}
        titleHighlight="Publishing Without Limits."
        text="Thoughtfully crafted, beautifully produced, and ready for the world — we bring your story to life with premium publishing support from start to finish."
      />
      <BrandsSlider />
      <RoundSlider />
      <BooksSlider />
      <Sec3 />
      <ServicesSec />
      <Process />
      {/* <Sec4 /> */}
      <Testimonials />
      <Faqs />
      <Form />
    </>
  );
}
