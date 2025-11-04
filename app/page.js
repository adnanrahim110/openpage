import Sec2 from "@/components/home/Sec2";
import Sec3 from "@/components/home/Sec3";
import Sec4 from "@/components/home/Sec4";
import BrandsSlider from "@/components/layouts/BrandsSlider";
import Faqs from "@/components/layouts/Faqs";
import Form from "@/components/layouts/Form";
import RoundSlider from "@/components/layouts/RoundSlider";
import ServicesSec from "@/components/layouts/ServicesSec";
import Testimonials from "@/components/layouts/Testimonials";
import Hero from "@/components/ui/Hero";
import {
  banners_aboutus_bg,
  banners_contact_bg,
  banners_library,
  banners_portfolio,
} from "@/public";

const heroSlider = [
  banners_aboutus_bg,
  banners_library,
  banners_contact_bg,
  banners_portfolio,
];

export default function Home() {
  return (
    <>
      <Hero
        title="Professional Book Publishing Services!"
        subtitle="Western Book Publishing"
        images={heroSlider}
        text="Are you, where big thinking blends with daring to be different? We're not merely refining the old model of publishing; we're turning it upside down. Our pioneering spirit questions the predictable, establishes new, bold standards, and returns the creative control to the writer. With imagination, dexterity, and unstoppable enthusiasm, we are giving new breath to the process of how books come into the world. So buckle up and get ready: we are going to redefine the future of publishing where every voice is heard, where boundaries are behind us, and where storytelling has no regulations."
      />
      <BrandsSlider />
      <RoundSlider />
      <Sec2 />
      <Sec3 />
      <ServicesSec />
      <Sec4 />
      <Testimonials />
      <Faqs />
      <Form />
    </>
  );
}
