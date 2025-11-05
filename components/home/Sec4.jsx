"use client";

import { usePopup } from "@/context/PopupProvider";
import { books_2 } from "@/public";
import { motion } from "motion/react";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoTrendingUp } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Sec4 = () => {
  const { openPopup } = usePopup();

  const stats = [
    {
      label: "Books Published",
      value: "2,500+",
      icon: FaRocket,
      gradient: "from-primary to-primary-600",
    },
    {
      label: "Happy Authors",
      value: "1,800+",
      icon: HiSparkles,
      gradient: "from-secondary to-secondary-600",
    },
    {
      label: "Success Rate",
      value: "98%",
      icon: IoTrendingUp,
      gradient: "from-primary-500 to-accent-600",
    },
  ];

  const features = [
    "Personalized guidance from industry experts",
    "End-to-end publishing support",
    "Full rights and royalties retained",
    "Professional editing and formatting",
    "Global distribution network access",
    "Marketing and promotion strategies",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-white to-gray-50" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-linear(circle at 2px 2px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-linear-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-linear-to-tl from-primary-100/50 to-accent-200/50 rounded-full blur-3xl opacity-60" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover-optimize">
                <img src={books_2.src} alt="Books" className="w-full h-auto" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="absolute -right-6 top-1/4 space-y-4 max-lg:hidden">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100 min-w-[180px] hover-optimize">
                      <div className="relative z-10 flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.gradient} flex items-center justify-center`}
                        >
                          <stat.icon className="text-white text-xl" />
                        </div>
                        <div>
                          <p className="text-2xl font-black text-gray-900">
                            {stat.value}
                          </p>
                          <p className="text-xs font-semibold text-gray-600">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -top-6 -left-6 w-32 h-32 bg-linear-to-br from-primary to-accent-600 rounded-full opacity-20 blur-2xl max-lg:hidden" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-linear-to-br from-primary-500 to-accent-500 rounded-full opacity-20 blur-2xl max-lg:hidden" />
            </div>
          </motion.div>

          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Subtitle
                variant="soft"
                icon={HiSparkles}
                iconClassName="text-primary text-lg"
                className="mb-6"
              >
                Your Publishing Partner
              </Subtitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6"
            >
              <div className="relative inline-block">
                <Title
                  as="h2"
                  variant="black"
                  title="Get Ready To Publish Your Book With a Single Tap"
                  highlight="With a Single Tap"
                  className="leading-tight"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full origin-left"
                />
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-gray-700 font-medium text-lg leading-relaxed mb-6"
            >
              At Western Book Publishing, collaboration isn't just another
              cliched term; it's our{" "}
              <span className="font-bold text-primary">secret sauce</span>. Our
              team listens, guides, and equips every author with personalized
              insight and precision.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-gray-700 font-medium text-lg leading-relaxed mb-8"
            >
              Your voice remains authentic. Our expertise polishes it into a
              publishable masterpiece. With one of the most trusted{" "}
              <span className="font-bold text-gray-900">
                book publishing service
              </span>{" "}
              teams behind you, the result is a book that captivates, connects,
              and resonates.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                  className="flex items-start gap-3 group hover-optimize"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-primary to-accent-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <FaCheckCircle className="text-white text-xs" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed group-hover:text-primary transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                onClick={openPopup}
                secondary
                icon={RiCustomerServiceFill}
              >
                Start a Project
              </Button>
              <Button onClick={() => Tawk_API.toggle()} btn2>
                Let's Chat
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8 inline-flex items-center gap-2 text-gray-600 font-medium"
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-accent-600 border-2 border-white flex items-center justify-center"
                  >
                    <HiSparkles className="text-white text-xs" />
                  </div>
                ))}
              </div>
              <span className="text-sm">
                Trusted by{" "}
                <span className="font-bold text-primary">1,800+</span> authors
                worldwide
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
