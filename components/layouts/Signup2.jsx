"use client";

import { submitForm } from "@/utils/formSubmit";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { ImSpinner } from "react-icons/im";
import Select from "react-select";
import Button from "../ui/Button";

const manuscriptReady = [
  {
    title: "Yes, I'm ready to publish today",
    value: "Yes, I'm ready to publish today",
  },
  {
    title: "Yes, I'll be ready to publish in 1 to 3 months",
    value: "Yes, I'll be ready to publish in 1 to 3 months",
  },
  {
    title: "Yes, I'll be ready to publish in 3 to 6 months",
    value: "Yes, I'll be ready to publish in 3 to 6 months",
  },
  {
    title: "Yes, I’ll be ready to publish in 6 to 12 months",
    value: "Yes, I’ll be ready to publish in 6 to 12 months",
  },
  {
    title: "No, I do not have a book or manuscript ready",
    value: "No, I do not have a book or manuscript ready",
  },
];

const publishedBefore = [
  { title: "Yes", value: "Yes" },
  { title: "No", value: "No" },
];

const typeOfBook = [
  { title: "Business", value: "Business" },
  { title: "Biography", value: "Biography" },
  { title: "Inspirational", value: "Inspirational" },
  { title: "Non-Fiction", value: "Non-Fiction" },
  { title: "How-To", value: "How-To" },
  { title: "Autobiography / Memoir", value: "Autobiography / Memoir" },
  { title: "Self-Help", value: "Self-Help" },
  { title: "Children", value: "Children" },
  { title: "Spiritual/Religious", value: "Spiritual/Religious" },
  { title: "Fiction", value: "Fiction" },
  { title: "Art/Photography", value: "Art/Photography" },
  { title: "Cookbook", value: "Cookbook" },
];

const servicesTypes = [
  { title: "Self Publishing", value: "self-publishing" },
  { title: "Editing", value: "editing" },
  { title: "Cover Design", value: "cover-design" },
  { title: "Printing", value: "printing" },
  { title: "Interior Formatting", value: "interior-formatting" },
  { title: "Illustration", value: "illustration" },
];

const Signup2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    haveManuscriptReady: "",
    havePublishedBefore: "",
    whatTypeOfBook: "",
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

  const handleSelectChange = (key) => (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      [key]: selectedOption ? selectedOption.value : "",
    }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const collectSelectedServices = () => {
    const picked = servicesTypes
      .filter(
        (srvc) => document.querySelector(`input[name="${srvc.value}"]`)?.checked
      )
      .map((srvc) => srvc.title);

    return picked.join(", ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const servicesJoined = collectSelectedServices();
    const payload = { ...formData, service: servicesJoined };

    const { success, validationErrors } = await submitForm({
      formData: payload,
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

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-primary/60 backdrop-blur-xs py-8 px-3 shadow-[0_0_20px_3px_rgba(255,255,255,0.15)]"
    >
      <h5 className="text-[50px] text-secondary text-center mb-6">
        Let's Get Started
      </h5>
      <form className="form_white form_sm" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-y-2.5 w-full *:px-2.5">
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <small className="text-red-500 block pl-3.5 mt-0.5 text-xs font-medium w-full text-left">
                {errors.name}
              </small>
            )}
          </div>
          <div className="w-1/2 pr-1.5! lg:pr-[5px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <small className="text-red-500 block pl-3.5 mt-0.5 text-xs font-medium w-full text-left">
                {errors.email}
              </small>
            )}
          </div>
          <div className="w-1/2 pl-1.5! lg:pl-[5px]">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone No"
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <small className="text-red-500 block pl-3.5 mt-0.5 text-xs font-medium w-full text-left">
                {errors.phone}
              </small>
            )}
          </div>

          <div className="w-full">
            <Select
              options={manuscriptReady.map((svc) => ({
                label: svc.title,
                value: svc.value,
              }))}
              value={
                manuscriptReady
                  .map((svc) => ({ label: svc.title, value: svc.value }))
                  .find((opt) => opt.value === formData.haveManuscriptReady) ||
                null
              }
              onChange={handleSelectChange("haveManuscriptReady")}
              placeholder="Do you have a manuscript ready?"
              isClearable
              name="haveManuscriptReady"
              className="select2"
              classNamePrefix="form_white_sm"
            />
          </div>

          <div className="w-full">
            <Select
              options={publishedBefore.map((svc) => ({
                label: svc.title,
                value: svc.value,
              }))}
              value={
                publishedBefore
                  .map((svc) => ({ label: svc.title, value: svc.value }))
                  .find((opt) => opt.value === formData.havePublishedBefore) ||
                null
              }
              onChange={handleSelectChange("havePublishedBefore")}
              placeholder="Have you published before?"
              isClearable
              name="havePublishedBefore"
              className="select2"
              classNamePrefix="form_white_sm"
            />
          </div>

          <div className="w-full">
            <Select
              options={typeOfBook.map((svc) => ({
                label: svc.title,
                value: svc.value,
              }))}
              value={
                typeOfBook
                  .map((svc) => ({ label: svc.title, value: svc.value }))
                  .find((opt) => opt.value === formData.whatTypeOfBook) || null
              }
              onChange={handleSelectChange("whatTypeOfBook")}
              placeholder="What type of book do you plan on publishing?"
              isClearable
              name="whatTypeOfBook"
              className="select2"
              classNamePrefix="form_white_sm"
            />
          </div>

          <div className="w-full">
            <div className=" flex flex-col gap-2.5 bg-white/10 border border-white/70 rounded-md overflow-hidden">
              <span className="text-white text-sm font-medium bg-white/25 p-2">
                What Services are you looking for?
              </span>
              <div className="grid grid-cols-2 gap-3 p-2 pt-1 pb-2.5">
                {servicesTypes.map((srvc, idx) => (
                  <label
                    key={idx}
                    htmlFor={srvc.value}
                    className="flex items-center gap-2 mb-0"
                  >
                    <div className="inline-block">
                      <div className="text-white">
                        <input
                          className="checkbox_snd"
                          type="checkbox"
                          name={srvc.value}
                          id={srvc.value}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-white font-medium">
                      {srvc.title}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex text-left items-center justify-center gap-1.5 mt-1">
            <div className="bg-white/10 inline-block">
              <label className="text-white cb">
                <input
                  defaultChecked
                  className="border-white/20 scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
              </label>
            </div>
            <p className="text-[9.68px] font-medium text-neutral-300">
              <small className="text-[11px] font-semibold text-neutral-200 tracking-widest">
                Please CHECK the BOX to communicate by SMS or EMAIL
              </small>
              <br />(
              <Link
                className="underline underline-offset-2 hover:text-white transition-colors duration-300 ease-in-out"
                href="/privacy-policy"
              >
                PRIVACY POLICY
              </Link>{" "}
              &{" "}
              <Link
                className="underline underline-offset-2 hover:text-white transition-colors duration-300 ease-in-out"
                href="/terms-and-conditions"
              >
                TERMS & CONDITIONS
              </Link>
              ) - Carrier charges may apply for SMS.
            </p>
          </div>

          <div className="w-full text-center flex justify-center mt-5">
            <Button
              type="submit"
              secondary
              disabled={loading}
              icon={loading ? ImSpinner : FaPaperPlane}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Signup2;
