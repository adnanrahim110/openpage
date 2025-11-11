"use client";

import { cn } from "@/utils/cn";
import { submitForm } from "@/utils/formSubmit";
import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhone, FaUser } from "react-icons/fa6";
import { ImSpinner } from "react-icons/im";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import Title from "../ui/Title";

const halfWrapperClass = "w-full md:w-1/2";

const baseFieldClasses =
  "w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-2xl text-gray-800 placeholder:text-gray-400 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-100 focus:ring-offset-0";

const errorFieldClasses =
  "border-red-400 focus:border-red-500 focus:ring-red-100";

const idleFieldClasses = "border-gray-200 hover:border-gray-300";

const InputField = ({
  icon: Icon,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
  halfWidth,
  halfPadding,
  rows,
  autoComplete,
  inputMode,
}) => {
  const paddingClass =
    halfPadding === "right"
      ? "lg:pr-2"
      : halfPadding === "left"
      ? "lg:pl-2"
      : "";
  const wrapperClasses = cn(
    halfWidth ? halfWrapperClass : "w-full",
    paddingClass
  );
  const fieldClasses = cn(
    baseFieldClasses,
    error ? errorFieldClasses : idleFieldClasses
  );

  return (
    <div className={wrapperClasses}>
      <div className="group relative block">
        <span
          className={cn(
            "pointer-events-none absolute left-4 z-10 text-gray-400 transition-colors duration-300 group-focus-within:text-primary",
            rows ? "top-4" : "top-1/2 -translate-y-1/2",
            error && "text-red-400 group-focus-within:text-red-500"
          )}
        >
          <Icon className="text-lg" />
        </span>

        {rows ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
            aria-invalid={Boolean(error)}
            className={`${fieldClasses} resize-none`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            aria-invalid={Boolean(error)}
            autoComplete={autoComplete}
            inputMode={inputMode}
            className={fieldClasses}
          />
        )}

        <span
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, var(--primary) 0%, transparent 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "2px",
          }}
          aria-hidden="true"
        />
      </div>

      {error && (
        <small
          role="alert"
          className="mt-1.5 block pl-3 text-xs font-semibold text-red-500 transition-opacity duration-200"
        >
          {error}
        </small>
      )}
    </div>
  );
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
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
        <div className="text-center mb-8 space-y-2">
          <Title
            as="h5"
            variant="black"
            title="Let's Get Started"
            className="mb-0.5"
          />

          <p className="text-gray-600 font-medium">
            Share your details and we'll bring your vision to life
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-wrap gap-y-2">
            <InputField
              icon={FaUser}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Full Name"
              autoComplete="name"
            />

            <InputField
              icon={FaEnvelope}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Email Address"
              halfWidth
              halfPadding="right"
              autoComplete="email"
            />

            <InputField
              icon={FaPhone}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="Phone Number"
              halfWidth
              halfPadding="left"
              autoComplete="tel"
              inputMode="tel"
            />

            <InputField
              icon={MdMessage}
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Tell us about your project..."
              rows={5}
            />
          </div>

          <div className="flex items-start gap-3 p-2 pb-0.5 bg-linear-to-r from-gray-50 to-transparent rounded-2xl border border-gray-200">
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
                <p className="text-[10px]  text-gray-700 font-medium">
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
                <p className="text-[10px] text-gray-500">
                  Standard carrier charges may apply for SMS.
                </p>
              </div>
            </label>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              icon={loading ? ImSpinner : FaPaperPlane}
              iconClassName={loading ? "animate-spin" : ""}
              tone="primary"
              variant="solid"
              size="lg"
              className="w-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
