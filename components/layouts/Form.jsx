"use client";

import { banners_form_bg } from "@/public";
import { submitForm } from "@/utils/formSubmit";
import { motion } from "motion/react";
import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { ImSpinner } from "react-icons/im";
import { IoCheckmarkCircle } from "react-icons/io5";
import Select from "react-select";
import { toast } from "react-toastify";
import Button from "../ui/Button";

const services = [
  { title: "Book Publishing and Distribution", value: "book-publishing" },
  { title: "E-Book Publishing", value: "ebook-publishing" },
  { title: "Proofreading and Editing", value: "proofreading-and-editing" },
  { title: "Book Promotions and Marketing", value: "book-marketing-services" },
  { title: "Author Website", value: "author-website" },
  { title: "Customized Illustrations", value: "customized-illustrations" },
  { title: "Book Cover Designing", value: "book-cover-designing" },
  {
    title: "Audio Book Narration and Publishing",
    value: "audio-book-services",
  },
  { title: "formatting and Layout", value: "formatting-and-layout" },
  { title: "Ghost Writing", value: "ghost-writing" },
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

    const { success, validationErrors } = await submitForm({
      formData,
      requiredFields: ["name", "email", "phone"],
      onSuccess: () => {
        window.location.href = "/thankyou";
      },
      onError: (errMsg) => {
        if (typeof toast !== "undefined") toast.error(errMsg);
      },
    });

    if (!success && validationErrors) {
      setErrors(validationErrors);
    }

    setLoading(false);
  };

  const benefits = [
    { icon: IoCheckmarkCircle, text: "Quick response within 24 hours" },
    { icon: IoCheckmarkCircle, text: "Expert consultation included" },
    { icon: IoCheckmarkCircle, text: "Free project quotation" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${banners_form_bg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-white to-gray-50" />

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-linear-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-linear-to-tl from-primary-100/50 to-accent-200/50 rounded-full blur-3xl opacity-60" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 lg:pr-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary-50 to-accent-50 rounded-full border border-primary-200 mb-6">
                <HiSparkles className="text-primary text-lg" />
                <span className="text-sm font-bold text-primary tracking-wide uppercase">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                <span className="text-gray-900">Interested in</span>{" "}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-primary to-accent-600 bg-clip-text text-transparent">
                    Working Together?
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent-600 rounded-full origin-left"
                  />
                </span>
              </h2>

              <p className="text-gray-700 font-medium text-base leading-relaxed mb-8">
                We are here to help you with any questions you may have about
                our services. Our team of experts is always ready to answer your
                questions and provide you with the information you need.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-primary to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="text-white text-sm" />
                    </div>
                    <p className="text-gray-700 font-semibold text-sm">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary to-purple-600 flex items-center justify-center">
                    <HiSparkles className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-900">24/7</p>
                    <p className="text-sm font-semibold text-gray-600">
                      Available Support
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="form_black bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 md:p-10"
              >
                <div className="space-y-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaUser />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-primary"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <small className="text-red-500 block mt-1.5 text-xs font-medium">
                        {errors.name}
                      </small>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <FaEnvelope />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-primary"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <small className="text-red-500 block mt-1.5 text-xs font-medium">
                          {errors.email}
                        </small>
                      )}
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <FaPhone />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                            errors.phone
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-primary"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <small className="text-red-500 block mt-1.5 text-xs font-medium">
                          {errors.phone}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="service"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Select Service
                    </label>
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
                      placeholder="Choose a service..."
                      isClearable
                      name="service"
                      className="select2"
                      classNamePrefix="form_white"
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          borderRadius: "0.75rem",
                          borderWidth: "2px",
                          borderColor: state.isFocused ? "#1a73e8" : "#e5e7eb",
                          padding: "0.5rem",
                          boxShadow: state.isFocused
                            ? "0 0 0 3px rgba(26, 115, 232, 0.1)"
                            : "none",
                          "&:hover": {
                            borderColor: "#1a73e8",
                          },
                        }),
                      }}
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={loading}
                      hoverText="Send Now"
                      icon={loading ? ImSpinner : BsFillSendFill}
                      className="w-full"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-center text-gray-500 mt-4">
                    Your information is secure and will never be shared with
                    third parties.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
