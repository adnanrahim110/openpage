import BooksSlider from "@/components/home/BooksSlider";
import Sec3 from "@/components/home/Sec3";
import Sec4 from "@/components/home/Sec4";
import BrandsSlider from "@/components/layouts/BrandsSlider";
import Faqs from "@/components/layouts/Faqs";
import Form from "@/components/layouts/Form";
import RoundSlider from "@/components/layouts/RoundSlider";
import ServicesSec from "@/components/layouts/ServicesSec";
import Testimonials from "@/components/layouts/Testimonials";
import Hero from "@/components/ui/Hero";
import { banners_library } from "@/public";

export default function Home() {
  return (
    <>
      <Hero
        title="Professional Book Publishing Services!"
        subtitle="Open Page Publishing"
        images={banners_library}
        titleHighlight="Book Publishing"
        text={["At Open Page Publishing, innovation meets imagination. We don’t follow the old publishing rules we create new ones. Our team blends creativity and expertise to give authors complete control and a truly modern publishing experience.", "We turn your vision into a beautifully crafted book that connects, inspires, and stands out in today’s market."]}
      />
      <BrandsSlider />
      <RoundSlider />
      <BooksSlider />
      <Sec3 />
      <ServicesSec />
      <Sec4 />
      <Testimonials />
      <Faqs />
      <Form />
    </>
  );
}
