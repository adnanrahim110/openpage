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
        title="Empowering Authors. Elevating Stories. Publishing Without Limits."
        subtitle="Open Page Publishing"
        images={banners_library}
        titleHighlight="Publishing Without Limits."
        text={[
          "Your trusted partner for professional book publishing, ghostwriting, and editing services — helping authors publish globally on Amazon, Barnes & Noble, and Audible.",
          "Welcome to Open Page Publishing, where creativity meets professionalism.We’re more than just a publishing company — we’re your partners in turning ideas into books that inspire. Whether it’s your first manuscript or your next bestseller, our expert team is here to help you publish seamlessly across leading platforms, including Amazon, Barnes & Noble, and Audible.",
          "We provide everything authors need — from editing, formatting, and ghostwriting to audiobook creation and children’s book publishing — ensuring your story reaches readers worldwide."
        ]}
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
