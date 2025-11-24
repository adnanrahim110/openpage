import Hero from "@/components/child/Hero";
import PlaceholderShowcase from "@/components/child/PlaceholderShowcase";
import JourneySteps from "@/components/child/JourneySteps";
import ProcessSection from "@/components/child/ProcessSection";
import Slider from "@/components/child/Slider";
import StorySection from "@/components/child/StorySection";
import Form from "@/components/layouts/Form";
import PortfolioSlider from "@/components/layouts/PortfolioSlider";
import Testimonials from "@/components/layouts/Testimonials";
import {
  ills_books_1,
  ills_books_2,
  ills_books_3,
  ills_books_4,
  ills_books_5,
  ills_books_6,
} from "@/public";

export const metadata = {
  title: "Childrens Book Publishing | Open Page Publishing",
};

const ChildrensPage = () => {
  return (
    <>
      <Hero />
      <StorySection />
      <ProcessSection />
      {/* <Slider /> */}
      <PlaceholderShowcase />
      <JourneySteps />
      <PortfolioSlider
        title="Beautiful Covers for Bright Young Minds"
        highlight="Bright Young Minds"
        text="Delightful Children's Book Covers Designed to Spark Young Imaginations."
        imgs={[
          ills_books_1,
          ills_books_2,
          ills_books_3,
          ills_books_4,
          ills_books_5,
          ills_books_6,
        ]}
      />
      <Testimonials />
      <Form
        title="Your Story Can Become a Book Kids Grow Up With."
        highlight="Book Kids Grow Up With"
        text="You don’t need a publisher contact, an art degree, or design skills. You just need your story — we’ll bring the team, the process, and the publishing."
        points={[
          "Perfect for first-time authors and parents",
          "Clear timelines and transparent pricing",
          "End-to-end support from idea to Amazon",
        ]}
      />
    </>
  );
};

export default ChildrensPage;
