// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Activity,
//   Lock,
//   Radar,
//   Globe,
//   BarChart3,
//   CheckCircle2,
// } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.12,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   }),
// };

// const floatingAnimation = {
//   y: [0, -12, 0],
//   transition: {
//     duration: 5,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

// const Hero = () => {
//   return (
//     <section
//       aria-label="Cyber Security Hero Section"
//       className="relative overflow-hidden bg-[#050505] text-white mt-[80px]"
//     >
//       {/* ================= BACKGROUND EFFECTS ================= */}

//       {/* Base Gradient */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,136,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,212,255,0.10),transparent_30%)]" />

//       {/* Cyber Grid */}
//       <div className="absolute inset-0 opacity-[0.07]">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
//       </div>

//       {/* Floating Glow Orbs */}
//       <motion.div
//         animate={{
//           x: [0, 40, 0],
//           y: [0, -30, 0],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute -top-40 left-[-100px] h-[400px] w-[400px] rounded-full bg-[#00FF88]/20 blur-[120px]"
//       />

//       <motion.div
//         animate={{
//           x: [0, -40, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute bottom-[-120px] right-[-80px] h-[350px] w-[350px] rounded-full bg-[#00D4FF]/20 blur-[120px]"
//       />

//       {/* Tiny Moving Particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(30)].map((_, i) => (
//           <motion.span
//             key={i}
//             animate={{
//               y: ["0%", "-100%"],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 10 + i,
//               repeat: Infinity,
//               delay: i * 0.4,
//               ease: "linear",
//             }}
//             className="absolute h-1 w-1 rounded-full bg-[#00FF88]"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.3,
//             }}
//           />
//         ))}
//       </div>

//       {/* Scanning Line */}
//       <motion.div
//         animate={{
//           y: ["-10%", "110%"],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="pointer-events-none absolute left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#00FF88]/10 to-transparent blur-xl"
//       />

//       {/* ================= CONTENT ================= */}

//       <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:px-16">
//         {/* ================= LEFT CONTENT ================= */}

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           className="max-w-2xl"
//         >
//           {/* Badge */}
//           <motion.div
//             custom={1}
//             variants={fadeUp}
//             className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00FF88]/20 bg-white/5 px-4 py-2 backdrop-blur-xl"
//           >
//             <ShieldCheck className="h-4 w-4 text-[#00FF88]" />
//             <span className="text-sm font-medium text-[#00FF88]">
//               Advanced Cyber Protection
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             custom={2}
//             variants={fadeUp}
//             className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
//           >
//             Protect Your Digital World With{" "}
//             <span className="bg-gradient-to-r from-[#00FF88] to-[#00D4FF] bg-clip-text text-transparent">
//               Next-Generation Cyber Security
//             </span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             custom={3}
//             variants={fadeUp}
//             className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400"
//           >
//             We help businesses secure their systems, networks, and sensitive
//             data using advanced cyber security solutions and intelligent threat
//             monitoring.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             custom={4}
//             variants={fadeUp}
//             className="mt-10 flex flex-col gap-4 sm:flex-row"
//           >
//             <motion.button
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0px 0px 35px rgba(0,255,136,0.45)",
//               }}
//               whileTap={{ scale: 0.97 }}
//               className="rounded-xl bg-gradient-to-r from-[#00FF88] to-[#10B981] px-8 py-4 font-semibold text-black transition-all duration-300"
//             >
//               Get Protected
//             </motion.button>

//             <motion.button
//               whileHover={{
//                 scale: 1.03,
//                 borderColor: "#00D4FF",
//                 boxShadow: "0px 0px 20px rgba(0,212,255,0.2)",
//               }}
//               whileTap={{ scale: 0.97 }}
//               className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300"
//             >
//               Explore Services
//             </motion.button>
//           </motion.div>

//           {/* Trust Points */}
//           <motion.div
//             custom={5}
//             variants={fadeUp}
//             className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300"
//           >
//             {[
//               "24/7 Monitoring",
//               "AI Threat Detection",
//               "Enterprise Security",
//             ].map((item, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <CheckCircle2 className="h-5 w-5 text-[#00FF88]" />
//                 <span>{item}</span>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* ================= RIGHT SIDE DASHBOARD ================= */}

//         <motion.div
//           initial={{ opacity: 0, scale: 0.92 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative flex items-center justify-center"
//         >
//           {/* Rotating Rings */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute h-[500px] w-[500px] rounded-full border border-[#00FF88]/20"
//           />

//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute h-[380px] w-[380px] rounded-full border border-[#00D4FF]/20"
//           />

//           {/* Main Dashboard */}
//           <motion.div
//             animate={floatingAnimation}
//             className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(0,255,136,0.08)] backdrop-blur-2xl"
//           >
//             {/* Top Bar */}
//             <div className="mb-6 flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-400">System Protection</p>
//                 <h3 className="mt-1 text-2xl font-bold">Active Security</h3>
//               </div>

//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00FF88]/10">
//                 <ShieldCheck className="h-8 w-8 text-[#00FF88]" />
//               </div>
//             </div>

//             {/* Analytics Cards */}
//             <div className="grid grid-cols-2 gap-4">
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 className="rounded-2xl border border-white/10 bg-[#0B0B0B]/70 p-5 backdrop-blur-xl"
//               >
//                 <div className="flex items-center gap-3">
//                   <Activity className="text-[#00FF88]" />
//                   <p className="text-sm text-gray-400">Threats Blocked</p>
//                 </div>

//                 <h4 className="mt-4 text-3xl font-bold">24.8K</h4>

//                 <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: "86%" }}
//                     transition={{ duration: 2 }}
//                     className="h-full rounded-full bg-gradient-to-r from-[#00FF88] to-[#00D4FF]"
//                   />
//                 </div>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 className="rounded-2xl border border-white/10 bg-[#0B0B0B]/70 p-5 backdrop-blur-xl"
//               >
//                 <div className="flex items-center gap-3">
//                   <Radar className="text-[#00D4FF]" />
//                   <p className="text-sm text-gray-400">Live Monitoring</p>
//                 </div>

//                 <h4 className="mt-4 text-3xl font-bold">99.9%</h4>

//                 <div className="mt-4 flex gap-1">
//                   {[...Array(12)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       animate={{
//                         height: [10, 24, 10],
//                       }}
//                       transition={{
//                         duration: 1.5,
//                         repeat: Infinity,
//                         delay: i * 0.1,
//                       }}
//                       className="w-2 rounded-full bg-[#00FF88]"
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Network Security Panel */}
//             <motion.div
//               whileHover={{ scale: 1.01 }}
//               className="mt-5 rounded-2xl border border-white/10 bg-[#0B0B0B]/70 p-5 backdrop-blur-xl"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-400">
//                     Secure Network Status
//                   </p>
//                   <h4 className="mt-2 text-xl font-semibold">
//                     Enterprise Firewall Protected
//                   </h4>
//                 </div>

//                 <Lock className="h-10 w-10 text-[#00FF88]" />
//               </div>

//               <div className="mt-6 flex items-end gap-3">
//                 {[40, 70, 55, 90, 65, 95, 75].map((h, i) => (
//                   <motion.div
//                     key={i}
//                     animate={{
//                       height: [`${h}%`, `${h - 10}%`, `${h}%`],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       delay: i * 0.2,
//                     }}
//                     className="w-full rounded-t-xl bg-gradient-to-t from-[#00FF88] to-[#00D4FF]"
//                     style={{ height: `${h}px` }}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//             {/* Floating Mini Cards */}
//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//               }}
//               className="absolute -left-10 top-10 hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:block"
//             >
//               <div className="flex items-center gap-3">
//                 <Globe className="text-[#00D4FF]" />
//                 <div>
//                   <p className="text-xs text-gray-400">Global Security</p>
//                   <h5 className="font-semibold">128 Networks Safe</h5>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               animate={{
//                 y: [0, 12, 0],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//               }}
//               className="absolute -right-8 bottom-12 hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:block"
//             >
//               <div className="flex items-center gap-3">
//                 <BarChart3 className="text-[#00FF88]" />
//                 <div>
//                   <p className="text-xs text-gray-400">Threat Analytics</p>
//                   <h5 className="font-semibold">Real-Time Detection</h5>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const handlegetStarted = () => {
  // Implementation for handling the "Get Started" button click
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const handleLearnMore = () => {
  // Implementation for handling the "Learn More" button click
  const section = document.getElementById("about");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const CyberHeroMinimal = () => {
  return (
    <section
      aria-label="Cyber Security Hero Section"
      className="relative mt-[90px] flex items-center overflow-hidden bg-[#050505] text-white"
      id="home"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,136,0.10),transparent_30%)]" />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00FF88]/10 blur-[180px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-[#00FF88]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] w-full max-w-5xl items-center justify-center px-6 py-20 sm:px-8 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00FF88]/20 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <ShieldCheck className="h-4 w-4 text-[#00FF88]" />
            <span className="text-sm font-medium text-[#00FF88]">
              Holistic Cyber Security Partner
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={0.2}
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Secure Your Business In The{" "}
            <span className="bg-gradient-to-r from-[#00FF88] to-[#10B981] bg-clip-text text-transparent">
              Digital Era
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={0.3}
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl"
          >
            We provide reliable cyber security solutions to protect your
            business, systems, and sensitive data from modern digital threats.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 25px rgba(0,255,136,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-xl bg-gradient-to-r from-[#00FF88] to-[#10B981] px-8 py-4 font-semibold text-black transition-all duration-300 sm:w-auto"
              onClick={handlegetStarted}
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.02,
                borderColor: "#00FF88",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 sm:w-auto"
              onClick={handleLearnMore}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            custom={0.5}
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 sm:gap-8"
          >
            {[
              "24/7 Monitoring",
              "Data Protection",
              "Threat Prevention",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00FF88]" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberHeroMinimal;









{/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
        
          <div className="absolute h-[320px] w-[320px] rounded-full bg-[#00FF88]/10 blur-[100px]" />

         
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,255,136,0.08)] backdrop-blur-2xl"
          >
           
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Protection Status</p>
                <h3 className="mt-1 text-2xl font-semibold">
                  System Secured
                </h3>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00FF88]/10">
                <ShieldCheck className="h-8 w-8 text-[#00FF88]" />
              </div>
            </div>

          
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#111111]/70 p-4">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-[#00FF88]" />
                  <span className="text-sm text-gray-400">
                    Threat Detection
                  </span>
                </div>

                <h4 className="mt-4 text-2xl font-bold">99.9%</h4>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[#00FF88] to-[#10B981]" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#111111]/70 p-4">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-[#10B981]" />
                  <span className="text-sm text-gray-400">
                    Data Security
                  </span>
                </div>

                <h4 className="mt-4 text-2xl font-bold">256-bit</h4>

                <p className="mt-4 text-sm text-gray-500">
                  Encrypted protection enabled
                </p>
              </div>
            </div>

           
            <div className="mt-6 rounded-2xl border border-[#00FF88]/10 bg-[#00FF88]/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Live Monitoring Active
                  </p>
                  <h5 className="mt-1 font-medium">
                    All systems operating normally
                  </h5>
                </div>

                <div className="h-3 w-3 rounded-full bg-[#00FF88] shadow-[0_0_12px_#00FF88]" />
              </div>
            </div>
          </motion.div>
        </motion.div> */}