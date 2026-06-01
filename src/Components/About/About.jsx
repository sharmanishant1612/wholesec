import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Activity,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Threat Protection",
    description:
      "Advanced protection systems designed to prevent modern cyber threats.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Reliable and secure infrastructure built for performance and stability.",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring",
    description:
      "Continuous monitoring to identify and respond to security risks quickly.",
  },
  {
    icon: Lock,
    title: "Trusted Security",
    description:
      "Trusted solutions focused on protecting sensitive business data.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section
      
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#050505] py-24"
      id="about"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.06),transparent_35%)]" id="about"/>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Top Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <motion.span
            custom={1}
            variants={fadeUp}
            className="inline-flex rounded-full border border-[#00FF88]/15 bg-[#00FF88]/5 px-4 py-2 text-sm font-medium text-[#00FF88]"
          >
            About Us
          </motion.span>

          {/* Heading */}
          <motion.h2
            id="about-heading"
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Reliable Security For Modern Businesses
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            custom={3}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            We are a team of cybersecurity experts with extensive experience across the cyber spectrum. Our commitment is to deliver cost-effective holistic protection to ensure security of your business.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(0,255,136,0.25)",
                  boxShadow: "0px 0px 20px rgba(0,255,136,0.06)",
                }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/10 bg-[#111111] p-6"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00FF88]/10">
                  <Icon className="h-6 w-6 text-[#00FF88]" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;