







import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    id: 1,
    title: "Email",
    value: "hello@wholesec.com",
    icon: Mail,
  },
  {
    id: 2,
    title: "Phone",
    value: "+1 (000) 123-4567",
    icon: Phone,
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

    const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const [status, setStatus] = useState({
  type: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim()
  ) {
    setStatus({
      type: "error",
      message: "Please fill all fields.",
    });
    return;
  }

  try {
    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    const response = await fetch(
      "https://wholesec.com/wp-json/custom/v1/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      setStatus({
        type: "success",
        message:
          "Message sent successfully. We will contact you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        type: "error",
        message: data.message || "Failed to send message.",
      });
    }
  } catch (error) {
    setStatus({
      type: "error",
      message:
        "Something went wrong. Please try again later.",
    });
  } finally {
    setLoading(false);
  }
};




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
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            custom={1}
            variants={fadeUp}
            className="inline-flex rounded-full border border-[#00FF88]/15 bg-[#00FF88]/5 px-4 py-2 text-sm font-medium text-[#00FF88]"
          >
            Contact Us
          </motion.span>

          <motion.h2
            id="contact-heading"
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Let’s Secure Your Digital Future
          </motion.h2>

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
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center rounded-3xl border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
          >
            <motion.h3
              custom={1}
              variants={fadeUp}
              className="text-3xl font-bold text-white"
            >
              Contact Information
            </motion.h3>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-4 leading-relaxed text-gray-400"
            >
              Reach out to our cyber security experts for consultations,
              vulnerability assessments, security training, or any questions
              regarding your organization's digital protection.
            </motion.p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    custom={index + 3}
                    variants={fadeUp}
                    whileHover={{
                      y: -3,
                      borderColor: "rgba(0,255,136,0.25)",
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00FF88]/10">
                      <Icon className="h-6 w-6 text-[#00FF88]" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-gray-400">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              custom={5}
              variants={fadeUp}
              className="mt-10 rounded-2xl border border-[#00FF88]/10 bg-[#00FF88]/5 p-5"
            >
              <p className="text-sm leading-relaxed text-gray-300">
                We typically respond within 24 hours and are committed to
                helping businesses strengthen their cyber security posture.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#00FF88]/40 focus:ring-2 focus:ring-[#00FF88]/10"
              />
              </div>

              {/* Button */}

                {status.message && (
                      <div
                        className={`rounded-xl p-4 text-sm ${
                          status.type === "success"
                            ? "border border-green-500/20 bg-green-500/10 text-green-400"
                            : "border border-red-500/20 bg-red-500/10 text-red-400"
                        }`}
                      >
                        {status.message}
                      </div>
                    )}



              <motion.button
                  whileHover={!loading ? {
                    scale: 1.02,
                    boxShadow: "0px 0px 20px rgba(0,255,136,0.15)",
                  } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                    loading
                      ? "cursor-not-allowed bg-gray-700 text-white"
                      : "bg-gradient-to-r from-[#00FF88] to-[#10B981] text-black"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}

                  {!loading && <ArrowRight className="h-4 w-4" />}
                </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;