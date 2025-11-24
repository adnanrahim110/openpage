import Sec1 from "@/components/about/Sec1";
import Sec2 from "@/components/about/Sec2";
import BrandsSlider from "@/components/layouts/BrandsSlider";
import Cta from "@/components/layouts/Cta";
import Form from "@/components/layouts/Form";
import PortfolioSlider from "@/components/layouts/PortfolioSlider";
import Hero from "@/components/ui/Hero";

export const metadata = {
  title: "About Us | Open Page Publishing",
};

const AboutPage = () => {
  return (
    <>
      <Hero
        hero2
        actionBtns
        subtitle="Open Page Publishing"
        title="Where Every Story Finds Its Voice"
        text="At Open Page Publishing, we’re redefining what it means to publish a book. With innovation, creativity, and care at the heart of everything we do, we help authors bring their stories to life  from first draft to global success."
      />
      <BrandsSlider />
      <Sec1 />
      <Sec2 />
      <PortfolioSlider />
      <Cta />
      <Form />
    </>
  );
};

export default AboutPage;
