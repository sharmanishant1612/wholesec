// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   KeyRound,
//   GraduationCap,
//   ArrowRight,
// } from "lucide-react";

// const services = [
//   {
//     id: 1,
//     title: "VAPT",
//     price: "$199",
//     description:
//       "Protect your web and Android applications with expert Vulnerability Assessment and Penetration Testing services.",
//     image:
//       "/service1.avif",
//     icon: ShieldCheck,
//     buttonText: "Learn More",
//   },
//   {
//     id: 2,
//     title: "Privileged Access Management",
//     price: "$499",
//     description:
//       "Optimize privileged access with strategic planning and implementation services for secure access management.",
//     image:
//       "/service2.avif",
//     icon: KeyRound,
//     buttonText: "Learn More",
//   },
//   {
//     id: 3,
//     title: "Security Training",
//     price: "$99",
//     description:
//       "Empower your team with comprehensive cyber security training programs and awareness solutions.",
//     image:
//       "/service3.avif",
//     icon: GraduationCap,
//     buttonText: "Learn More",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.12,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const ServicesSection = () => {
//   return (
//     <section
//       aria-labelledby="services-heading"
//       className="relative overflow-hidden bg-[#050505] py-24"
//       id="services"
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.05),transparent_35%)]" />

//       {/* Soft Blur */}
//       <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#00FF88]/5 blur-[120px]" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
//         {/* Top Content */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           {/* Label */}
//           <motion.span
//             custom={1}
//             variants={fadeUp}
//             className="inline-flex rounded-full border border-[#00FF88]/15 bg-[#00FF88]/5 px-4 py-2 text-sm font-medium text-[#00FF88]"
//           >
//             Services
//           </motion.span>

//           {/* Heading */}
//           <motion.h2
//             id="services-heading"
//             custom={2}
//             variants={fadeUp}
//             className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
//           >
//             Modern Cyber Security Services
//           </motion.h2>

//           {/* Paragraph */}
//           <motion.p
//             custom={3}
//             variants={fadeUp}
//             className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
//           >
//             Reliable cyber security services designed to protect businesses,
//             applications, and digital infrastructure with simplicity and trust.
//           </motion.p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.article
//                 key={service.id}
//                 custom={index + 1}
//                 variants={fadeUp}
//                 whileHover={{
//                   y: -6,
//                   borderColor: "rgba(0,255,136,0.25)",
//                   boxShadow: "0px 0px 24px rgba(0,255,136,0.06)",
//                 }}
//                 transition={{ duration: 0.25 }}
//                 className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl"
//               >
//                 {/* Image */}
//                 <div className="relative h-56 overflow-hidden">
//                   {/* Overlay */}
//                   <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505]/80 to-transparent" />

//                   <motion.img
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.5 }}
//                     src={service.image}
//                     alt={service.title}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-7">
//                   {/* Icon */}
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00FF88]/10">
//                     <Icon className="h-7 w-7 text-[#00FF88]" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="mt-6 text-2xl font-semibold text-white">
//                     {service.title}
//                   </h3>

//                   {/* Price */}
//                   <div className="mt-5">
//                     <p className="text-sm text-gray-500">Starting From</p>

//                     <h4 className="mt-1 text-3xl font-bold text-[#00FF88]">
//                       {service.price}
//                     </h4>
//                   </div>

//                   {/* Description */}
//                   <p className="mt-5 text-sm leading-relaxed text-gray-400">
//                     {service.description}
//                   </p>

//                   {/* CTA */}
//                   <motion.button
//                     whileHover={{ x: 4 }}
//                     transition={{ duration: 0.2 }}
//                     className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#00FF88]"
//                   >
//                     {service.buttonText}

//                     <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </motion.button>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;










import React from "react";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";
import {
  ShieldCheck,
  KeyRound,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "VAPT",
    price: "$199",
    description:
      "Protect your web and Android applications with expert Vulnerability Assessment and Penetration Testing services.",
    image: "/service1.avif",
    icon: ShieldCheck,
    buttonText: "Learn More",
  },
  {
    id: 2,
    title: "Privileged Access Management",
    price: "$499",
    description:
      "Optimize privileged access with strategic planning and implementation services for secure access management.",
    image: "/service2.avif",
    icon: KeyRound,
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Security Training",
    price: "$99",
    description:
      "Empower your team with comprehensive cyber security training programs and awareness solutions.",
    image: "/service3.avif",
    icon: GraduationCap,
    buttonText: "Learn More",
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

const ServicesSection = () => {

  const navigate = useNavigate();

   const handleLearnMore = () => {
  const section = document.getElementById("contact");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#050505] py-24"
      id="services"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.05),transparent_35%)]" />

      {/* Soft Blur */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#00FF88]/5 blur-[120px]" />

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
            Services
          </motion.span>

          <motion.h2
            id="services-heading"
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Modern Cyber Security Services
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            Reliable cyber security services designed to protect businesses,
            applications, and digital infrastructure with simplicity and trust.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                custom={index + 1}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(0,255,136,0.25)",
                  boxShadow: "0px 0px 24px rgba(0,255,136,0.06)",
                }}
                transition={{ duration: 0.25 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505]/80 to-transparent" />

                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex h-full flex-col p-7">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00FF88]/10">
                    <Icon className="h-7 w-7 text-[#00FF88]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  {/* Price */}
                  <div className="mt-5">
                    <p className="text-sm text-gray-500">Starting From</p>

                    <h4 className="mt-1 text-3xl font-bold text-[#00FF88]">
                      {service.price}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <motion.button
                    onClick={()=> handleLearnMore()}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-[#00FF88]"
                  >
                    {service.buttonText}

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;