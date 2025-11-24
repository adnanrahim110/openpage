import Form from "@/components/layouts/Form";
import Hero from "@/components/ui/Hero";

export const metadata = {
  title: "Contact Us | Open Page Publishing",
};

const ContactPage = () => {
  return (
    <>
      <Hero
        hero2
        subtitle="Open Page Publishing"
        title="Contact Us"
        text="We're here to help you on your publishing journey. Reach out to us with any questions or inquiries, and our dedicated team will be happy to assist you."
      />
      <Form />
    </>
  );
};

export default ContactPage;
