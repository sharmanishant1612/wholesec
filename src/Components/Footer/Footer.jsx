import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Blogs", path: "#blogs" },
  { name: "Contact", path: "#contact" },
];

const services = [
  "VAPT",
  "Privileged Access Management",
  "Security Training",
];

const socialLinks = [
  {
    id: 1,
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    id: 4,
    icon: FaTwitter,
    href: "#",
    label: "Twitter",
  },
];

const contactInfo = [
  {
    id: 1,
    icon: Mail,
    text: "hello@wholesec.com",
  },
  {
    id: 2,
    icon: Phone,
    text: "+1 (000) 123-4567",
  },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,136,0.05),transparent_35%)]" />

      {/* Soft Blur */}
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#00FF88]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        {/* Top Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Info */}
          <motion.div custom={1} variants={fadeUp}>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00FF88]/20 bg-[#00FF88]/10 shadow-[0_0_20px_rgba(0,255,136,0.08)]">
                <ShieldCheck className="h-6 w-6 text-[#00FF88]" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  WholeSec 
                </h2>
                <h2 className="text-xl font-semibold text-green-400">
                  Holistic Security
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              Protecting businesses with modern cyber security solutions
              designed for today’s digital world.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                      borderColor: "rgba(0,255,136,0.3)",
                      boxShadow: "0px 0px 18px rgba(0,255,136,0.08)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111111] text-gray-300 transition-all duration-300 hover:text-[#00FF88]"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div custom={2} variants={fadeUp}>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

                  <ul className="mt-6 space-y-4">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.path}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#00FF88]"
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
          </motion.div>

          {/* Services */}
          <motion.div custom={3} variants={fadeUp}>
            <h3 className="text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#00FF88]"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div custom={4} variants={fadeUp}>
            <h3 className="text-lg font-semibold text-white">
              Contact Info
            </h3>

            <div className="mt-6 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00FF88]/10">
                      <Icon className="h-5 w-5 text-[#00FF88]" />
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-center justify-center gap-5 border-t border-white/10 pt-8 text-center md:flex-row"
        >
          {/* Copyright */}
          <p className="text-sm text-gray-500 ">
            © 2026 WholeSec Security. All rights reserved.
          </p>

          {/* Bottom Links */}
          {/* <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#00FF88]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#00FF88]"
            >
              Terms & Conditions
            </a>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;