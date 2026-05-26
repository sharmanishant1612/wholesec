import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    id: 1,
    title: "Email",
    value: "contact@wholesecsecurity.com",
    icon: Mail,
  },
  {
    id: 2,
    title: "Phone",
    value: "+1 (000) 123-4567",
    icon: Phone,
  },
  {
    id: 3,
    title: "Location",
    value: "New York, United States",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Working Hours",
    value: "Mon - Fri : 9AM - 6PM",
    icon: Clock3,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactSection = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#050505] py-24"
      id="contact"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.05),transparent_35%)]" />

      {/* Soft Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#00FF88]/5 blur-[120px]" />

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
            Contact Us
          </motion.span>

          {/* Heading */}
          <motion.h2
            id="contact-heading"
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Let’s Secure Your Digital Future
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            custom={3}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            Get in touch with our cyber security experts to discuss how we can
            help protect your business, systems, and sensitive data.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left Side - Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  custom={index + 1}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(0,255,136,0.25)",
                    boxShadow: "0px 0px 20px rgba(0,255,136,0.05)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-white/10 bg-[#111111]/80 p-6 backdrop-blur-xl"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00FF88]/10">
                    <Icon className="h-6 w-6 text-[#00FF88]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Value */}
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
          >
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#00FF88]/40 focus:ring-2 focus:ring-[#00FF88]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#00FF88]/40 focus:ring-2 focus:ring-[#00FF88]/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#00FF88]/40 focus:ring-2 focus:ring-[#00FF88]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#00FF88]/40 focus:ring-2 focus:ring-[#00FF88]/10"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 20px rgba(0,255,136,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00FF88] to-[#10B981] px-6 py-3 font-medium text-black transition-all duration-300"
              >
                Send Message

                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;