"use client";

import { submitForm } from "@/utils/formSubmit";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { ImSpinner } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";
import { toast } from "react-toastify";
import Button from "../ui/Button";

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

    const { success, validationErrors, serverError, networkError } =
      await submitForm({
        formData,
        requiredFields: ["name", "email", "phone"],
        onSuccess: () => {
          window.location.href = "/thankyou";
        },
        onError: (errMsg) => {
          toast.error(errMsg);
        },
      });

    if (!success && validationErrors) {
      setErrors(validationErrors);
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
      className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-1001 flex items-center justify-center`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 60 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-xl py-10 lg:p-10 h-auto max-h-[90dvh] w-[90%] lg:w-4/5 max-w-[600px] flex flex-col gap-10 items-center justify-center"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close dialog"
          className="absolute top-2 right-2 rounded-lg flex items-center justify-center text-2xl p-1 text-white bg-neutral-600 hover:bg-black hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out"
        >
          <IoMdClose />
        </button>
        <div className="text-center">
          <h2 className="title mb-3">Kickstart Your Project</h2>
          <p className="max-lg:px-5">
            Start Your Publishing Journey in Seconds!
          </p>
        </div>
        <form className="form_black form_sm" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row justify-center gap-y-3">
              <div className="md:w-1/2 md:pr-1.5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <small className="text-red-500 block pl-3.5 mt-0.5 text-xs font-medium absolute left-0 top-full">
                    {errors.name}
                  </small>
                )}
              </div>
              <div className="md:w-1/2 md:pl-1.5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <small className="text-red-500 block pl-3.5 mt-0.5 text-xs font-medium absolute left-0 top-full">
                    {errors.email}
                  </small>
                )}
              </div>
              <div className="md:w-1/2 md:pr-1.5">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <small className="text-red-500 block pl-3.5 mt-0.5 text-xs font-medium absolute left-0 top-full">
                    {errors.phone}
                  </small>
                )}
              </div>
              <div className="md:w-1/2 md:pl-1.5">
                <Select
                  options={services.map((svc) => ({
                    label: svc.title,
                    value: svc.value,
                  }))}
                  value={
                    services
                      .map((svc) => ({
                        label: svc.title,
                        value: svc.value,
                      }))
                      .find((opt) => opt.value === formData.service) || null
                  }
                  onChange={handleSelectChange}
                  placeholder="Select Service"
                  isClearable
                  name="service"
                  className="select2"
                  classNamePrefix="form_white"
                />
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                />
              </div>
              <div className="w-full flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  icon={loading ? ImSpinner : BsFillSendFill}
                  iconClassName={loading ? "animate-spin" : ""}
                  tone="primary"
                  variant="solid"
                  size="md"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
