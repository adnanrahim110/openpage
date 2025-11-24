import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { FiCheckCircle } from "react-icons/fi";

export const metadata = {
  title: "Thank You | Open Page Publishing",
};

const ThankYouPage = () => {
  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(226,232,240,0.85),transparent_60%)]" />
      <div className="pointer-events-none absolute -top-24 right-12 h-72 w-72 rounded-full border border-white/70 bg-primary-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-6 h-80 w-80 rounded-full border border-white/70 bg-sky-200/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full border border-primary-50 bg-white/40 animate-[spin_20s_linear_infinite]" />
      </div>

      <section className="relative z-10 w-full max-w-xl rounded-4xl border border-white/70 bg-white px-10 py-16 text-center shadow-[0_20px_65px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="relative mx-auto flex size-20 mb-5 items-center justify-center rounded-full bg-linear-to-br from-primary-50 to-sky-50 shadow-inner shadow-white">
          <span className="absolute inset-0 rounded-full bg-primary-200/30 animate-[ping_2.2s_ease-out_infinite]" />
          <span className="absolute inset-0 rounded-full border border-primary-100/70 animate-[pulse_4s_ease-in-out_infinite]" />
          <FiCheckCircle className="relative text-3xl text-primary-500 animate-[pulse_3s_ease-in-out_infinite]" />
        </div>

        <Title as="h3" highlight="sharing your story">
          Thank you for sharing your story.
        </Title>

        <p className="mt-5 text-base text-slate-600">
          Our publishing concierge has received your submission and will reply
          shortly with next steps tailored to your manuscript.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Button href="/" size="md">
            Back to home
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ThankYouPage;
