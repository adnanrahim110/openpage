"use client";

import { submitForm } from "@/utils/formSubmit";
import { motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FiCheckCircle, FiPhoneCall, FiStar } from "react-icons/fi";
import { ImSpinner } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import Title from "../ui/Title";

const services = [
  {
    title: "Book Publishing and Distribution",
    value: "book-publishing",
  },
  {
    title: "E-Book Publishing",
    value: "ebook-publishing",
  },
  {
    title: "Proofreading and Editing",
    value: "proofreading-and-editing",
  },
  {
    title: "Book Promotions and Marketing",
    value: "book-marketing-services",
  },
  {
    title: "Author Website",
    value: "author-website",
  },
  {
    title: "Customized Illustrations",
    value: "customized-illustrations",
  },
  {
    title: "Book Cover Designing",
    value: "book-cover-designing",
  },
  {
    title: "Audio Book Narration and Publishing",
    value: "audio-book-services",
  },
  {
    title: "formatting and Layout",
    value: "formatting-and-layout",
  },
  {
    title: "Ghost Writing",
    value: "ghost-writing",
  },
];
const highlightPoints = [
  "Tailored publishing strategy with a senior editor",
  "Weekly milestone check-ins and transparent reporting",
  "Launch marketing toolkit engineered for your genre",
];

const Popup = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const escHandler = useCallback(
    (e) => e.key === "Escape" && closePopup(),
    [closePopup]
  );
  useEffect(() => {
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, [escHandler]);

  const serviceOptions = useMemo(
    () =>
      services.map((svc) => ({
        label: svc.title,
        value: svc.value,
      })),
    []
  );

  const selectedService = useMemo(
    () =>
      serviceOptions.find((option) => option.value === formData.service) ||
      null,
    [serviceOptions, formData.service]
  );

  const selectStyles = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        borderRadius: "2rem",
        borderColor: errors.service
          ? "#f87171"
          : state.isFocused
          ? "#197BBC"
          : "rgba(148,163,184,0.4)",
        minHeight: "49.6px",
        fontSize: "14px",
        zIndex: "100",
        boxShadow: state.isFocused
          ? "0 0 0 4px #e3f0fb"
          : "0 0px 5px rgba(15,23,42,0.05)",
        backgroundColor: "rgba(255,255,255,0.95)",
        paddingLeft: "4px",
        paddingRight: "4px",
        paddingTop: "2px",
        paddingBottom: "2px",
        transition: "border-color 200ms ease, box-shadow 200ms ease",
      }),
      valueContainer: (base) => ({
        ...base,
        padding: "0px 12px",
      }),
      placeholder: (base) => ({
        ...base,
        color: "#64748b",
        fontWeight: 500,
      }),
      singleValue: (base) => ({
        ...base,
        color: "#0f172a",
        fontWeight: 600,
      }),
      input: (base) => ({
        ...base,
        color: "#0f172a",
        fontWeight: 600,
      }),
      indicatorSeparator: () => ({
        display: "none",
      }),
      dropdownIndicator: (base, state) => ({
        ...base,
        color: state.isFocused ? "#0f172a" : "#94a3b8",
      }),
      menu: (base) => ({
        ...base,
        zIndex: "100",
        borderRadius: "1rem",
        padding: "6px",
        fontSize: "12px",
        boxShadow: "0 24px 55px rgba(2,6,23,0.2)",
        border: "1px solid rgba(148,163,184,0.25)",
        overflow: "hidden",
      }),
      option: (base, state) => ({
        ...base,
        borderRadius: "0.75rem",
        fontWeight: state.isSelected ? 600 : 500,
        backgroundColor: state.isSelected
          ? "#197BBC"
          : state.isFocused
          ? "rgba(25,123,188,0.08)"
          : "transparent",
        color: state.isSelected ? "#fff" : "#0f172a",
        paddingBlock: "10px",
        marginBottom: "4px",
      }),
      menuList: (base) => ({
        ...base,
        maxHeight: "220px",
      }),
    }),
    [errors.service]
  );

  const baseInputClasses =
    "w-full rounded-3xl border bg-white/95 px-5 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-500 shadow-[0_20px_45px_rgba(15,23,42,0.06)] outline-none transition-all duration-200 focus-visible:ring-4";
  const errorInputClasses =
    "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-100";
  const normalInputClasses =
    "border-slate-200/80 focus-visible:border-primary-500 focus-visible:ring-primary-100";
  const getInputClasses = (hasError) =>
    `${baseInputClasses} ${hasError ? errorInputClasses : normalInputClasses}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      service: selectedOption ? selectedOption.value : "",
    }));
    setErrors((prev) => ({ ...prev, service: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const pageUrl =
      typeof window !== "undefined" ? window.location.href : undefined;

    const result = await submitForm({
      formData,
      requiredFields: ["name", "email", "phone"],
      formName: "Strategy Call Popup Form",
      extraFields: {
        source: "popup-strategy-call",
        ...(pageUrl ? { pageUrl } : {}),
      },
      onSuccess: () => {
        window.location.href = "/thankyou";
      },
      onError: (errMsg) => {
        toast.error(errMsg);
      },
    });

    if (!result.success && result.validationErrors) {
      setErrors(result.validationErrors);
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={closePopup}
      className="fixed inset-0 z-1001 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-md"
    >
      <span className="pointer-events-none absolute inset-0 -z-1 bg-[radial-gradient(circle_at_top,rgba(25,123,188,0.25),transparent_55%)]" />
      <span className="pointer-events-none absolute inset-0 -z-1 bg-[radial-gradient(circle_at_bottom,rgba(15,35,52,0.6),transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 60 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-5xl overflow-hidden rounded-4xl border border-white/20 bg-linear-to-br from-white/80 to-white/95 shadow-[0_50px_140px_rgba(2,6,23,0.45)]"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close dialog"
          className="absolute z-10 right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-lg text-slate-700 shadow-md transition duration-200 hover:bg-black hover:text-white"
        >
          <IoMdClose />
        </button>
        <div className="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden bg-linear-to-br from-primary-950 via-primary-800/95 to-primary-600 px-7 py-9 sm:px-9 sm:py-12 text-white">
            <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-8 h-48 w-48 rounded-full bg-primary-400/20 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                <FiStar className="text-base text-amber-300" />
                Premium Consultation
              </span>
              <div>
                <Title
                  as="h4"
                  className="text-3xl font-semibold text-white sm:text-4xl"
                >
                  Get a bespoke publishing roadmap.
                </Title>
                <p className="mt-3 text-base text-white/80">
                  Share your manuscript goals with Open Page Publishing and
                  we&apos;ll craft a white-glove launch plan that blends
                  editing, production, and marketing excellence.
                </p>
              </div>
              <ul className="space-y-3">
                {highlightPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white">
                      <FiCheckCircle className="text-base" />
                    </span>
                    <p className="text-base text-white/80">{point}</p>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 rounded-3xl border border-white/25 bg-white/5 p-4 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-white">
                  <FiPhoneCall />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Talk with a strategist
                  </p>
                  <a
                    href="tel:2145060709"
                    className="text-lg font-semibold text-white transition hover:text-primary-100"
                  >
                    +1 (214) 506 0709
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col bg-white/95 px-6 py-8 sm:px-8 lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Start here
              </p>
              <p className="mt-2 text-base text-slate-600">
                Answer a few quick questions and our publishing concierge will
                respond within one business day.
              </p>
            </div>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="popup-name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="popup-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={getInputClasses(Boolean(errors.name))}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <small className="mt-2 block text-xs font-semibold text-red-500">
                      {errors.name}
                    </small>
                  )}
                </div>
                <div>
                  <label htmlFor="popup-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="popup-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className={getInputClasses(Boolean(errors.email))}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <small className="mt-2 block text-xs font-semibold text-red-500">
                      {errors.email}
                    </small>
                  )}
                </div>
                <div>
                  <label htmlFor="popup-phone" className="sr-only">
                    Phone number
                  </label>
                  <input
                    id="popup-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className={getInputClasses(Boolean(errors.phone))}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && (
                    <small className="mt-2 block text-xs font-semibold text-red-500">
                      {errors.phone}
                    </small>
                  )}
                </div>
                <div>
                  <label htmlFor="popup-service" className="sr-only">
                    Service interest
                  </label>
                  <Select
                    inputId="popup-service"
                    instanceId="popup-service"
                    options={serviceOptions}
                    value={selectedService}
                    onChange={handleSelectChange}
                    placeholder="Select a service"
                    isClearable
                    name="service"
                    styles={selectStyles}
                  />
                  {errors.service && (
                    <small className="mt-2 block text-xs font-semibold text-red-500">
                      {errors.service}
                    </small>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="popup-message" className="sr-only">
                  Project details
                </label>
                <textarea
                  id="popup-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your manuscript, goals, or timeline."
                  className={`${getInputClasses(
                    Boolean(errors.message)
                  )} min-h-[130px] resize-none`}
                />
                {errors.message && (
                  <small className="mt-2 block text-xs font-semibold text-red-500">
                    {errors.message}
                  </small>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  disabled={loading}
                  icon={loading ? ImSpinner : BsFillSendFill}
                  iconClassName={loading ? "animate-spin" : ""}
                  tone="primary"
                  variant="solid"
                  size="lg"
                  className="w-full justify-center rounded-3xl py-3 text-base font-semibold shadow-[0_20px_40px_rgba(25,123,188,0.35)]"
                >
                  {loading
                    ? "Sending your request..."
                    : "Book my strategy call"}
                </Button>
                <p className="text-center text-xs text-slate-500">
                  By submitting, you agree to receive tailored publishing
                  insights from Open Page Publishing. We respect your inbox.
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
