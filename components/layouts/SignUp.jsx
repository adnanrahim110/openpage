"use client";

import { submitForm } from "@/utils/formSubmit";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhone, FaUser } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { ImSpinner } from "react-icons/im";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
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

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  const FormField = ({
    icon: Icon,
    type,
    name,
    placeholder,
    halfWidth,
    rows,
  }) => (
    <motion.div
      variants={inputVariants}
      animate={focusedField === name ? "focus" : "blur"}
      className={`${halfWidth ? "w-full md:w-1/2" : "w-full"} ${
        halfWidth && name === "email"
          ? "md:pr-2"
          : halfWidth && name === "phone"
          ? "md:pl-2"
          : ""
      }`}
    >
      <div className="relative group">
        <div
          className={`absolute left-4 ${
            rows ? "top-4" : "top-1/2 -translate-y-1/2"
          } z-10 transition-colors duration-300 ${
            focusedField === name ? "text-primary" : "text-gray-400"
          }`}
        >
          <Icon className="text-lg" />
        </div>

        {rows ? (
          <textarea
            name={name}
            value={formData[name]}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            rows={rows}
            placeholder={placeholder}
            className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-2xl transition-all duration-300 text-gray-800 placeholder:text-gray-400 focus:outline-none resize-none ${
              errors[name]
                ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
                : focusedField === name
                ? "border-primary focus:shadow-[0_0_0_4px_rgba(var(--primary-rgb),0.1)]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={placeholder}
            className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-2xl transition-all duration-300 text-gray-800 placeholder:text-gray-400 focus:outline-none ${
              errors[name]
                ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
                : focusedField === name
                ? "border-primary focus:shadow-[0_0_0_4px_rgba(var(--primary-rgb),0.1)]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          />
        )}

        <div
          className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
            focusedField === name ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, var(--primary) 0%, transparent 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "2px",
          }}
        />

        {errors[name] && (
          <motion.small
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 block pl-3 mt-1.5 text-xs font-medium"
          >
            {errors[name]}
          </motion.small>
        )}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
    >
      <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-white" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, gray 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative px-6 md:px-8 py-8 md:py-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/10 to-purple-500/10 rounded-full mb-4 border border-primary/20"
          >
            <HiSparkles className="text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary tracking-wide">
              Start Your Journey
            </span>
          </motion.div>

          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 leading-tight"
          >
            Let's Get Started
          </motion.h5>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 font-medium"
          >
            Share your details and we'll bring your vision to life
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-y-4"
          >
            <FormField
              icon={FaUser}
              type="text"
              name="name"
              placeholder="Full Name"
            />

            <FormField
              icon={FaEnvelope}
              type="email"
              name="email"
              placeholder="Email Address"
              halfWidth
            />

            <FormField
              icon={FaPhone}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              halfWidth
            />

            <FormField
              icon={MdMessage}
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-3 p-4 bg-linear-to-r from-gray-50 to-transparent rounded-2xl border border-gray-200"
          >
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center mt-0.5">
                <input
                  type="checkbox"
                  defaultChecked
                  className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md transition-all duration-300 cursor-pointer checked:bg-primary checked:border-primary hover:border-primary"
                />
                <IoShieldCheckmark className="absolute text-white text-sm opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="flex-1">
                <p className="text-xs leading-relaxed text-gray-700 font-medium">
                  I agree to receive communications via SMS or email. By
                  submitting, I accept the{" "}
                  <span className="text-primary font-semibold hover:underline">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-primary font-semibold hover:underline">
                    Terms & Conditions
                  </span>
                  .
                </p>
                <p className="text-[10px] text-gray-500 mt-1">
                  Standard carrier charges may apply for SMS.
                </p>
              </div>
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="pt-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-3 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-linear-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-700 hover:shadow-[0_10px_40px_rgba(var(--primary-rgb),0.4)] text-white"
                }`}
              >
                {loading ? (
                  <>
                    <ImSpinner className="text-xl animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <IoShieldCheckmark className="text-green-500 text-xl" />
              <span className="text-xs font-semibold">Secure & Private</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-600">
              <HiSparkles className="text-primary text-xl" />
              <span className="text-xs font-semibold">Quick Response</span>
            </div>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
