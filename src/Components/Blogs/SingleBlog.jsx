// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";

// /* ─────────────────────────────────────────────────────────────────
//    CONSTANTS
// ───────────────────────────────────────────────────────────────── */
// const FALLBACK_IMAGE =
//   "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop";

// const SOCIAL = [
//   {
//     label: "X",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//       </svg>
//     ),
//     getHref: (url, title) =>
//       `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
//   },
//   {
//     label: "LinkedIn",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//     getHref: (url) =>
//       `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
//   },
//   {
//     label: "Facebook",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
//         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//       </svg>
//     ),
//     getHref: (url) =>
//       `https://facebook.com/sharer/sharer.php?u=${url}`,
//   },
// ];

// /* ─────────────────────────────────────────────────────────────────
//    READING PROGRESS BAR
// ───────────────────────────────────────────────────────────────── */
// const ReadingProgressBar = () => {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

//   return (
//     <motion.div
//       style={{ scaleX, transformOrigin: "0%" }}
//       className="fixed top-0 left-0 right-0 z-[100] h-[3px]"
//       style={{
//         scaleX,
//         transformOrigin: "0%",
//         background: "linear-gradient(90deg, #00FF88 0%, #00cc6a 50%, #00FF88 100%)",
//         boxShadow: "0 0 12px rgba(0,255,136,0.6), 0 0 4px rgba(0,255,136,0.8)",
//       }}
//     />
//   );
// };

// /* ─────────────────────────────────────────────────────────────────
//    SKELETON LOADER
// ───────────────────────────────────────────────────────────────── */
// const SkeletonLoader = () => (
//   <section className="min-h-screen bg-[#050505] pt-20">
//     <style>{`
//       @keyframes shimmer {
//         0% { background-position: -1000px 0; }
//         100% { background-position: 1000px 0; }
//       }
//       .shimmer {
//         background: linear-gradient(
//           90deg,
//           rgba(255,255,255,0.03) 0px,
//           rgba(0,255,136,0.06) 40px,
//           rgba(255,255,255,0.03) 80px
//         );
//         background-size: 1000px 100%;
//         animation: shimmer 2s infinite linear;
//       }
//     `}</style>

//     <div className="mx-auto max-w-4xl px-5 md:px-10">
//       {/* Badge */}
//       <div className="shimmer mb-6 h-7 w-32 rounded-full bg-white/5" />
//       {/* Title lines */}
//       <div className="shimmer mb-4 h-10 w-full rounded-xl bg-white/5" />
//       <div className="shimmer mb-10 h-10 w-3/4 rounded-xl bg-white/5" />
//       {/* Meta */}
//       <div className="mb-10 flex gap-4">
//         <div className="shimmer h-5 w-28 rounded-lg bg-white/5" />
//         <div className="shimmer h-5 w-20 rounded-lg bg-white/5" />
//         <div className="shimmer h-5 w-24 rounded-lg bg-white/5" />
//       </div>
//       {/* Hero image */}
//       <div className="shimmer mb-12 aspect-[21/9] w-full rounded-3xl bg-white/5" />
//       {/* Content blocks */}
//       {[1, 0.9, 0.95, 0.7, 0.85, 0.6, 0.9, 0.75].map((w, i) => (
//         <div
//           key={i}
//           className="shimmer mb-4 h-5 rounded-lg bg-white/5"
//           style={{ width: `${w * 100}%` }}
//         />
//       ))}
//     </div>
//   </section>
// );

// /* ─────────────────────────────────────────────────────────────────
//    STICKY SOCIAL SHARE
// ───────────────────────────────────────────────────────────────── */
// const StickySocial = ({ title }) => {
//   const [copied, setCopied] = useState(false);
//   const [show, setShow] = useState(false);
//   const url = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
//   const encodedTitle = encodeURIComponent(title || "");

//   useEffect(() => {
//     const onScroll = () => setShow(window.scrollY > 400);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(window.location.href);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2500);
//     } catch {}
//   };

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: 30 }}
//           transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//           className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 xl:flex"
//         >
//           {/* Label */}
//           <p className="mb-1 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-gray-600">
//             Share
//           </p>

//           {SOCIAL.map(({ label, icon, getHref }) => (
//             <a
//               key={label}
//               href={getHref(url, encodedTitle)}
//               target="_blank"
//               rel="noopener noreferrer"
//               title={`Share on ${label}`}
//               className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-[#0d0d0d] text-gray-500 transition-all duration-200 hover:border-[#00FF88]/40 hover:bg-[#00FF88]/10 hover:text-[#00FF88] hover:shadow-[0_0_16px_rgba(0,255,136,0.12)]"
//             >
//               {icon}
//             </a>
//           ))}

//           {/* Copy */}
//           <button
//             onClick={handleCopy}
//             title="Copy link"
//             className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-[#0d0d0d] text-gray-500 transition-all duration-200 hover:border-[#00FF88]/40 hover:bg-[#00FF88]/10 hover:text-[#00FF88]"
//           >
//             <AnimatePresence mode="wait">
//               {copied ? (
//                 <motion.svg
//                   key="check"
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.5, opacity: 0 }}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                   className="h-4 w-4 text-[#00FF88]"
//                 >
//                   <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
//                 </motion.svg>
//               ) : (
//                 <motion.svg
//                   key="copy"
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.5, opacity: 0 }}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   className="h-4 w-4"
//                 >
//                   <rect x="9" y="9" width="13" height="13" rx="2" />
//                   <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
//                 </motion.svg>
//               )}
//             </AnimatePresence>
//           </button>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────
//    BACK TO TOP
// ───────────────────────────────────────────────────────────────── */
// const BackToTop = () => {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     const fn = () => setShow(window.scrollY > 600);
//     window.addEventListener("scroll", fn, { passive: true });
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.button
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 16 }}
//           transition={{ duration: 0.25 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-8 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-[#00FF88]/25 bg-[#0d0d0d] text-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.08)] transition-all duration-200 hover:bg-[#00FF88] hover:text-[#050505] hover:shadow-[0_0_28px_rgba(0,255,136,0.25)] xl:bottom-8 xl:right-6"
//         >
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
//             <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// /* ─────────────────────────────────────────────────────────────────
//    HELPERS
// ───────────────────────────────────────────────────────────────── */
// const getImageFromContent = (html = "") => {
//   if (typeof document === "undefined") return FALLBACK_IMAGE;
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.querySelector("img")?.src || FALLBACK_IMAGE;
// };

// const readTime = (html = "") => {
//   const words = html.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
//   return `${Math.max(1, Math.ceil(words / 200))} min read`;
// };

// const formatDate = (iso) =>
//   new Date(iso).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

// /* ─────────────────────────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────────────────────────── */
// const SingleBlog = () => {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState(null);
//   const heroRef = useRef(null);

//   // Parallax
//   const { scrollY } = useScroll();
//   const imgY = useTransform(scrollY, [0, 600], [0, 90]);

//   // ── Original fetch logic — UNCHANGED ──
//   const fetchSingleBlog = async () => {
//     try {
//       const response = await axios.get(
//         `https://wholesec.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
//       );
//       console.log(response.data);
//       if (response.data.length > 0) {
//         setBlog(response.data[0]);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchSingleBlog();
//     window.scrollTo({ top: 0 });
//   }, [slug]);

//   // ── Loading skeleton ──
//   if (!blog) return <SkeletonLoader />;

//   // ── Derived data ──
//   const featuredImage =
//     blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//     getImageFromContent(blog.content.rendered);

//   const category =
//     blog._embedded?.["wp:term"]?.[0]?.[0]?.name || "Cyber Security";

//   const author   = blog._embedded?.author?.[0]?.name || "Admin";
//   const avatar   = blog._embedded?.author?.[0]?.avatar_urls?.["48"];
//   const excerpt  = blog.excerpt?.rendered || "";
//   const rt       = readTime(blog.content.rendered);
//   const dateStr  = formatDate(blog.date);

//   // ── Stagger variants ──
//   const container = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.1 } },
//   };
//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
//   };

//   return (
//     <>
//       {/* Global styles injected once */}
//       <style>{`
//         /* Prose overrides injected here so Tailwind JIT sees them */
//         .blog-prose h2 {
//           font-size: 1.65rem; font-weight: 800; color: #fff;
//           margin-top: 3.5rem; margin-bottom: 1rem;
//           padding-bottom: 0.75rem;
//           border-bottom: 1px solid rgba(255,255,255,0.06);
//           line-height: 1.25; letter-spacing: -0.02em;
//         }
//         .blog-prose h3 {
//           font-size: 1.3rem; font-weight: 700; color: #fff;
//           margin-top: 2.5rem; margin-bottom: 0.75rem;
//           line-height: 1.3;
//         }
//         .blog-prose h4 {
//           font-size: 1rem; font-weight: 700;
//           color: #00FF88; text-transform: uppercase;
//           letter-spacing: 0.1em; margin-top: 2rem; margin-bottom: 0.5rem;
//         }
//         .blog-prose p {
//           color: #8f9db5; line-height: 1.9; margin-bottom: 1.4rem;
//           font-size: 1.05rem;
//         }
//         .blog-prose a {
//           color: #00FF88; text-decoration: none;
//           border-bottom: 1px solid rgba(0,255,136,0.3);
//           transition: border-color 0.15s, color 0.15s;
//         }
//         .blog-prose a:hover { color: #10B981; border-color: #10B981; }
//         .blog-prose strong { color: #e8edf5; font-weight: 600; }
//         .blog-prose em { color: #b0bac9; }
//         .blog-prose ul, .blog-prose ol {
//           color: #8f9db5; padding-left: 1.5rem;
//           margin-bottom: 1.4rem; display: flex; flex-direction: column; gap: 0.5rem;
//         }
//         .blog-prose ul li { list-style-type: none; position: relative; padding-left: 1.25rem; }
//         .blog-prose ul li::before {
//           content: ""; position: absolute; left: 0; top: 0.65em;
//           width: 5px; height: 5px; border-radius: 50%;
//           background: #00FF88;
//         }
//         .blog-prose ol { list-style-type: decimal; }
//         .blog-prose ol li { padding-left: 0.5rem; }
//         .blog-prose ol li::marker { color: #00FF88; font-weight: 600; }
//         .blog-prose blockquote {
//           border-left: 3px solid #00FF88;
//           background: rgba(0,255,136,0.04);
//           border-radius: 0 1rem 1rem 0;
//           padding: 1.25rem 1.5rem;
//           margin: 2rem 0; color: #8f9db5;
//         }
//         .blog-prose blockquote p { margin: 0; font-style: italic; }
//         .blog-prose code:not(pre code) {
//           color: #00FF88; background: rgba(0,255,136,0.08);
//           border: 1px solid rgba(0,255,136,0.15);
//           border-radius: 5px; padding: 0.15em 0.45em;
//           font-size: 0.85em; font-family: "JetBrains Mono", "Fira Code", monospace;
//         }
//         .blog-prose pre {
//           background: #080808; border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 1rem; padding: 1.5rem;
//           overflow-x: auto; margin: 2rem 0;
//           box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
//         }
//         .blog-prose pre code {
//           color: #a8b4c8; font-size: 0.875rem;
//           font-family: "JetBrains Mono", "Fira Code", monospace;
//         }
//         .blog-prose img {
//           width: 100%; border-radius: 1rem;
//           border: 1px solid rgba(255,255,255,0.06);
//           margin: 2.5rem 0;
//           box-shadow: 0 8px 40px rgba(0,0,0,0.5);
//         }
//         .blog-prose hr {
//           border: none; border-top: 1px solid rgba(255,255,255,0.06);
//           margin: 3rem 0;
//         }
//         .blog-prose table {
//           width: 100%; border-collapse: collapse; margin: 2rem 0;
//           color: #8f9db5; font-size: 0.95rem;
//         }
//         .blog-prose th {
//           background: rgba(0,255,136,0.06); color: #fff;
//           padding: 0.75rem 1rem; text-align: left;
//           border-bottom: 1px solid rgba(0,255,136,0.2);
//         }
//         .blog-prose td {
//           padding: 0.7rem 1rem;
//           border-bottom: 1px solid rgba(255,255,255,0.04);
//         }
//         .blog-prose tr:hover td { background: rgba(255,255,255,0.02); }
//       `}</style>

//       <ReadingProgressBar />
//       <StickySocial title={blog.title.rendered} />
//       <BackToTop />

//       <main className="relative min-h-screen overflow-x-hidden bg-[#050505]">

//         {/* ── Ambient background ── */}
//         <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
//           <div className="absolute inset-x-0 top-0 h-[80vh] bg-[radial-gradient(ellipse_70%_60%_at_50%_-5%,rgba(0,255,136,0.07),transparent)]" />
//           <div className="absolute -right-32 top-24 h-[480px] w-[480px] rounded-full bg-[#00FF88]/[0.03] blur-[130px]" />
//           <div className="absolute -left-20 bottom-1/3 h-[380px] w-[380px] rounded-full bg-[#00FF88]/[0.025] blur-[110px]" />
          
//           <div
//             className="absolute inset-0 opacity-[0.016]"
//             style={{
//               backgroundImage: "radial-gradient(circle, #00FF88 1px, transparent 1px)",
//               backgroundSize: "28px 28px",
//             }}
//           />
//         </div>

//         {/* ═══════════════════════════════════════════
//             HERO
//         ═══════════════════════════════════════════ */}
//         <section className="relative z-10 pt-24 md:pt-32">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="mx-auto max-w-4xl px-5 md:px-10"
//           >

//             {/* Category chip */}
//             <motion.div variants={item}>
//               <span className="inline-flex items-center gap-2 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/[0.07] px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00FF88]">
//                 <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00FF88]" />
//                 {category}
//               </span>
//             </motion.div>

//             {/* Title */}
//             <motion.h1
//               variants={item}
//               className="mt-6 text-[clamp(1.85rem,4.5vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-white"
//               dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
//             />

//             {/* Excerpt */}
//             {excerpt && (
//               <motion.div
//                 variants={item}
//                 className="mt-5 text-lg leading-relaxed text-gray-400 line-clamp-3"
//                 dangerouslySetInnerHTML={{ __html: excerpt }}
//               />
//             )}

//             {/* Meta row */}
//             <motion.div
//               variants={item}
//               className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
//             >
//               {/* Author */}
//               {/* <div className="flex items-center gap-2.5">
//                 {avatar ? (
//                   <img src={avatar} alt={author} className="h-8 w-8 rounded-full ring-1 ring-white/10" />
//                 ) : (
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00FF88]/10 ring-1 ring-[#00FF88]/20">
//                     <span className="text-xs font-bold text-[#00FF88]">
//                       {author.charAt(0).toUpperCase()}
//                     </span>
//                   </div>
//                 )}
//                 <span className="text-sm font-medium text-gray-300">{author}</span>
//               </div> */}

//               <span className="h-3.5 w-px rounded-full bg-white/10" />

//               {/* Date */}
//               <span className="flex items-center gap-1.5 text-sm text-gray-500">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4 text-[#00FF88]/50">
//                   <rect x="3" y="4" width="18" height="18" rx="2" />
//                   <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
//                 </svg>
//                 {dateStr}
//               </span>

//               <span className="h-3.5 w-px rounded-full bg-white/10" />

//               {/* Read time */}
//               <span className="flex items-center gap-1.5 text-sm text-gray-500">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4 text-[#00FF88]/50">
//                   <circle cx="12" cy="12" r="9" />
//                   <path d="M12 7v5l3 3" strokeLinecap="round" />
//                 </svg>
//                 {rt}
//               </span>
//             </motion.div>

//             {/* Mobile share */}
//             {/* <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-2.5 xl:hidden">
//               <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600">Share</span>
//               {SOCIAL.map(({ label, icon, getHref }) => {
//                 const url = encodeURIComponent(window.location.href);
//                 const t   = encodeURIComponent(blog.title.rendered);
//                 return (
//                   <a
//                     key={label}
//                     href={getHref(url, t)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-[#0e0e0e] text-gray-500 transition-all duration-200 hover:border-[#00FF88]/35 hover:text-[#00FF88]"
//                   >
//                     {icon}
//                   </a>
//                 );
//               })}
//             </motion.div> */}
//           </motion.div>

//           {/* ── Featured image ── */}
//           <motion.div
//             ref={heroRef}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className="relative mx-auto mt-12 max-w-5xl overflow-hidden px-5 md:px-8 lg:px-10"
//           >
//             {/* Glow ring */}
//             <div className="absolute -inset-px rounded-3xl opacity-50"
//               style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.15), transparent 60%)" }} />

//             <div className="relative overflow-hidden rounded-3xl border border-white/[0.07]">
//               <motion.div style={{ y: imgY }}>
//                 <img
//                   src={featuredImage}
//                   alt={blog.title.rendered}
//                   onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
//                   className="aspect-[21/9] w-full object-cover"
//                 />
//               </motion.div>
//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/65 via-[#050505]/10 to-transparent" />

//               {/* Bottom overlay badge */}
//               <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full border border-white/10 bg-[#050505]/70 px-4 py-2 backdrop-blur-md">
//                 <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00FF88]" />
//                 <span className="font-mono text-[11px] uppercase tracking-widest text-gray-300">
//                   {category}
//                 </span>
//                 <span className="h-3 w-px bg-white/20" />
//                 <span className="font-mono text-[11px] text-gray-400">{rt}</span>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* ═══════════════════════════════════════════
//             ARTICLE BODY
//         ═══════════════════════════════════════════ */}
//         <section className="relative z-10 mx-auto mt-16 max-w-3xl px-5 pb-32 md:px-8 lg:px-4 xl:px-0">

//           {/* Left decorative rule (desktop) */}
//           <div
//             className="pointer-events-none absolute -left-10 top-0 hidden h-full w-px xl:block"
//             style={{ background: "linear-gradient(to bottom, rgba(0,255,136,0.25), rgba(0,255,136,0.04) 60%, transparent)" }}
//           />

//           {/* Article */}
//           <motion.article
//             initial={{ opacity: 0, y: 28 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             className="blog-prose"
//             dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//           />

//           {/* ── Article footer ── */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.6 }}
//             className="mt-16 border-t border-white/[0.06] pt-10"
//           >
//             <div className="flex flex-wrap items-center justify-between gap-6">

             
             

//             </div>
//           </motion.div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default SingleBlog;














import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

/* ─── Fallback image ─────────────────────────────────────────── */
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop";

/* ─── Skeleton ───────────────────────────────────────────────── */
const Skeleton = ({ className }) => (
  <div
    className={`relative overflow-hidden rounded-lg bg-white/[0.04] ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
  </div>
);

const SkeletonLoader = () => (
  <div className="min-h-screen bg-[#050505]">
    <style>{`@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`}</style>
    {/* hero */}
    <Skeleton className="h-[62vh] w-full rounded-none" />
    <div className="mx-auto max-w-3xl px-5 pt-10 md:px-8">
      <Skeleton className="mb-4 h-6 w-28" />
      <Skeleton className="mb-3 h-10 w-full" />
      <Skeleton className="mb-2 h-10 w-4/5" />
      <div className="mb-8 flex gap-3 pt-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="mb-3 h-4 w-full" />
      <Skeleton className="mb-3 h-4 w-11/12" />
      <Skeleton className="mb-3 h-4 w-4/5" />
      <Skeleton className="mb-3 h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);

/* ─── Main Component ─────────────────────────────────────────── */
const SingleBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  /* Original axios logic — UNCHANGED */
  const fetchSingleBlog = async () => {
    try {
      const response = await axios.get(
        `https://wholesec.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      console.log(response.data);
      if (response.data.length > 0) {
        setBlog(response.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) return <SkeletonLoader />;

  /* Derived values */
  const featuredImage =
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMAGE;
  const category =
    blog._embedded?.["wp:term"]?.[0]?.[0]?.name || "Cyber Security";
  const author = blog._embedded?.author?.[0]?.name || "Admin";
  const avatar = blog._embedded?.author?.[0]?.avatar_urls?.["48"];
  const excerpt = blog.excerpt?.rendered || "";
  const dateStr = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
  const readTime = `${Math.max(1, Math.ceil(
    blog.content.rendered.replace(/<[^>]+>/g, "").split(/\s+/).length / 200
  ))} min read`;

  return (
    <div className="min-h-screen bg-[#050505]">

      {/* ══════════════════════════════════════
          HERO — full-bleed image + overlay text
      ══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="relative h-[65vh] min-h-[440px] w-full overflow-hidden md:h-[72vh]"
      >
        {/* Featured image */}
        <img
          src={featuredImage}
          alt={blog.title.rendered}
          onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
          className="h-full w-full object-cover scale-[1.02]"
        />

        {/* Layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-[#050505]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_105%,rgba(0,255,136,0.07),transparent)]" />

        {/* Text sitting on gradient */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 px-5 pb-14 md:px-12 lg:px-20"
        >
          <div className="mx-auto max-w-3xl">

            {/* Category chip */}
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00FF88]/25 bg-[#00FF88]/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF88]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00FF88]" />
                {category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                {readTime}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-[clamp(1.7rem,4.2vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]"
              dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════
          INFO STRIP — author / date / excerpt
      ══════════════════════════════════════ */}
      <div className="mx-auto max-w-3xl px-5 md:px-8 lg:px-4 xl:px-0">

        {/* Author + date card */}
        {/* <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-5 flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-[#0d0d0d]/90 px-6 py-4 backdrop-blur-sm"
        >
          
          <div className="flex items-center gap-3">
            {avatar ? (
              <img src={avatar} alt={author} className="h-9 w-9 rounded-full ring-1 ring-white/10" />
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00FF88]/10 ring-1 ring-[#00FF88]/20">
                <span className="text-sm font-bold text-[#00FF88]">{author[0].toUpperCase()}</span>
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-white">{author}</p>
              <p className="text-xs text-gray-500">{dateStr}</p>
            </div>
          </div>

          
          <div className="hidden items-center gap-2 sm:flex">
            <span className="font-mono text-[11px] text-gray-600">{readTime}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FF88]/50" />
          </div>
        </motion.div> */}

        {/* Excerpt */}
        {/* {excerpt && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a] px-7 py-6"
          >
           
            <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-gradient-to-b from-[#00FF88] via-[#00FF88]/60 to-transparent" />

            <div
              className="text-[1.0625rem] leading-[1.8] text-[#8a96ab] line-clamp-4
                [&_p]:m-0 [&_a]:text-[#00FF88] [&_strong]:text-gray-200"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </motion.div>
        )} */}

        {/* ══════════════════════════════════════
            BLOG CONTENT
        ══════════════════════════════════════ */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="blog-content mt-12 pb-28"
          dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
        />
      </div>

      {/* ── Prose styles ── */}
      <style>{`
        .blog-content h2 {
          font-size: clamp(1.3rem, 2.5vw, 1.65rem);
          font-weight: 800;
          color: #fff;
          margin: 3rem 0 1rem;
          padding-bottom: 0.7rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          letter-spacing: -0.02em;
          line-height: 1.25;
        }
        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #e8edf5;
          margin: 2.25rem 0 0.75rem;
          line-height: 1.3;
        }
        .blog-content h4 {
          font-size: 0.8rem;
          font-weight: 700;
          color: #00FF88;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 1.75rem 0 0.5rem;
        }
        .blog-content p {
          color: #8a96ab;
          line-height: 1.9;
          font-size: 1.0625rem;
          margin-bottom: 1.35rem;
        }
        .blog-content a {
          color: #00FF88;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,255,136,0.3);
          transition: color 0.15s, border-color 0.15s;
        }
        .blog-content a:hover { color: #10B981; border-color: #10B981; }
        .blog-content strong { color: #e0e6f0; font-weight: 600; }
        .blog-content em { color: #9aa5b8; font-style: italic; }
        .blog-content ul {
          margin: 0 0 1.4rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .blog-content ul li {
          list-style: none;
          padding-left: 1.4rem;
          position: relative;
          color: #8a96ab;
          line-height: 1.75;
        }
        .blog-content ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.62em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00FF88;
        }
        .blog-content ol {
          margin: 0 0 1.4rem;
          padding-left: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .blog-content ol li {
          color: #8a96ab;
          line-height: 1.75;
        }
        .blog-content ol li::marker { color: #00FF88; font-weight: 700; }
        .blog-content blockquote {
          margin: 2rem 0;
          padding: 1.25rem 1.5rem;
          border-left: 3px solid #00FF88;
          background: rgba(0,255,136,0.04);
          border-radius: 0 1rem 1rem 0;
        }
        .blog-content blockquote p {
          margin: 0;
          color: #8a96ab;
          font-style: italic;
        }
        .blog-content code:not(pre code) {
          color: #00FF88;
          background: rgba(0,255,136,0.08);
          border: 1px solid rgba(0,255,136,0.15);
          border-radius: 4px;
          padding: 0.15em 0.45em;
          font-size: 0.84em;
          font-family: "JetBrains Mono", "Fira Code", monospace;
        }
        .blog-content pre {
          background: #080808;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 1rem;
          padding: 1.4rem 1.5rem;
          overflow-x: auto;
          margin: 1.75rem 0;
        }
        .blog-content pre code {
          color: #9aa8be;
          font-size: 0.875rem;
          font-family: "JetBrains Mono", "Fira Code", monospace;
        }
        .blog-content img {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.06);
          margin: 2.25rem 0;
          box-shadow: 0 8px 36px rgba(0,0,0,0.45);
        }
        .blog-content hr {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 2.75rem 0;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.75rem 0;
          font-size: 0.95rem;
          color: #8a96ab;
        }
        .blog-content th {
          background: rgba(0,255,136,0.06);
          color: #fff;
          padding: 0.7rem 1rem;
          text-align: left;
          border-bottom: 1px solid rgba(0,255,136,0.2);
        }
        .blog-content td {
          padding: 0.65rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
      `}</style>
    </div>
  );
};

export default SingleBlog;