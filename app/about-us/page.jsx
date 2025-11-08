import Sec1 from "@/components/about/Sec1";
import Sec2 from "@/components/about/Sec2";
import BrandsSlider from "@/components/layouts/BrandsSlider";
import Cta from "@/components/layouts/Cta";
import Form from "@/components/layouts/Form";
import PortfolioSlider from "@/components/layouts/PortfolioSlider";
import Hero from "@/components/ui/Hero";

export const metadata = {
  title: "About Us - Open Page Publishing",
};

const AboutPage = () => {
  return (
    <>
      <Hero
        hero2
        actionBtns
        subtitle="INFUSING INNOVATION WITH UNRIVALLED PERFECTION"
        title="OPEN PAGE PUBLISHING"
        text="Welcome to Open Page Publishing Portal, where endless opportunities await. Our goal is to revolutionize the book publishing industry with a dedicated team creating captivating literary works. Join us where creativity knows no bounds and every word holds power and charm."
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
