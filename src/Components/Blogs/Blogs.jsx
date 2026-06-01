// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.08,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Extract image from blog content if featured image not available
//   const getImageFromContent = (content) => {
//     const div = document.createElement("div");

//     div.innerHTML = content;

//     const img = div.querySelector("img");

//     return (
//       img?.src ||
//       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
//     );
//   };

//   // Fetch Blogs
//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get(
//         "https://wholesec.com/wp-json/wp/v2/posts?_embed"
//       );

//       setBlogs(response.data);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <section
//       aria-labelledby="blog-heading"
//       className="relative overflow-hidden bg-[#050505] py-24 mt-16"
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.05),transparent_35%)]" />

//       {/* Soft Green Blur */}
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
//             Latest Articles
//           </motion.span>

//           {/* Heading */}
//           <motion.h2
//             id="blog-heading"
//             custom={2}
//             variants={fadeUp}
//             className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
//           >
//             Cyber Security Insights & Updates
//           </motion.h2>

//           {/* Paragraph */}
//           <motion.p
//             custom={3}
//             variants={fadeUp}
//             className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
//           >
//             Stay updated with the latest cyber security trends, threats,
//             and protection strategies.
//           </motion.p>
//         </motion.div>

//         {/* Loading */}
//         {loading ? (
//           <div className="mt-20 flex items-center justify-center">
//             <h2 className="text-lg font-medium text-gray-400">
//               Loading blogs...
//             </h2>
//           </div>
//         ) : (
//           /* Blog Grid */
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//           >
//             {blogs.map((blog, index) => {
//               const featuredImage =
//                 blog._embedded?.["wp:featuredmedia"]?.[0]
//                   ?.source_url ||
//                 getImageFromContent(blog.content.rendered);

//               const category =
//                 blog._embedded?.["wp:term"]?.[0]?.[0]?.name ||
//                 "Cyber Security";

//               return (
//                 <motion.article
//                   key={blog.id}
//                   custom={index + 1}
//                   variants={fadeUp}
//                   whileHover={{
//                     y: -6,
//                     borderColor: "rgba(0,255,136,0.25)",
//                     boxShadow:
//                       "0px 0px 24px rgba(0,255,136,0.06)",
//                   }}
//                   transition={{ duration: 0.25 }}
//                   className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl"
//                 >
//                   {/* Image */}
//                   <div className="relative overflow-hidden">
//                     {/* Overlay */}
//                     <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//                     {/* Category Badge */}
//                     <div className="absolute left-4 top-4 z-20">
//                       <span className="rounded-full border border-[#00FF88]/20 bg-[#00FF88]/10 px-3 py-1 text-xs font-medium text-[#00FF88] backdrop-blur-md">
//                         {category}
//                       </span>
//                     </div>

//                     {/* Featured Image */}
//                     <motion.img
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.5 }}
//                       src={featuredImage}
//                       alt={blog.title.rendered}
//                       className="aspect-[16/10] w-full object-cover"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     {/* Date */}
//                     <p className="text-sm text-gray-500">
//                       {new Date(blog.date).toDateString()}
//                     </p>

//                     {/* Title */}
//                     <h3
//                       className="mt-3 line-clamp-2 text-2xl font-semibold leading-snug text-white"
//                       dangerouslySetInnerHTML={{
//                         __html: blog.title.rendered,
//                       }}
//                     />

//                     {/* Excerpt */}
//                     <div
//                       className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-400"
//                       dangerouslySetInnerHTML={{
//                         __html: blog.excerpt.rendered,
//                       }}
//                     />

//                     {/* Read More */}
//                     <Link
//                       to={`/blog/${blog.slug}`}
//                       className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#00FF88]"
//                     >
//                       <motion.span
//                         whileHover={{ x: 4 }}
//                         transition={{ duration: 0.2 }}
//                         className="inline-flex items-center gap-2"
//                       >
//                         Read More

//                         <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                       </motion.span>
//                     </Link>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default  Blogs;









import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Extract image from content if featured image is not available
  const getImageFromContent = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;

    const img = div.querySelector("img");

    return (
      img?.src ||
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
    );
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://wholesec.com/wp-json/wp/v2/posts?_embed"
      );

      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section
      aria-labelledby="blog-heading"
      className="relative mt-16 overflow-hidden bg-[#050505] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.05),transparent_35%)]" />

      {/* Green Blur */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#00FF88]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl border border-[#00FF88]/20 bg-[#00FF88]/10 px-4 py-2 text-sm font-medium text-[#00FF88] transition-all duration-300 hover:bg-[#00FF88]/20"
          >
            ← Back
          </button>
        </div>

        {/* Heading Section */}
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
            Latest Articles
          </motion.span>

          <motion.h2
            id="blog-heading"
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Cyber Security Insights & Updates
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            Stay updated with the latest cyber security trends, threats,
            and protection strategies.
          </motion.p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="mt-20 flex items-center justify-center">
            <h2 className="text-lg font-medium text-gray-400">
              Loading blogs...
            </h2>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {blogs.map((blog, index) => {
              const featuredImage =
                blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                getImageFromContent(blog.content.rendered);

              const category =
                blog._embedded?.["wp:term"]?.[0]?.[0]?.name ||
                "Cyber Security";

              return (
                <motion.article
                  key={blog.id}
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
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute left-4 top-4 z-20">
                      <span className="rounded-full border border-[#00FF88]/20 bg-[#00FF88]/10 px-3 py-1 text-xs font-medium text-[#00FF88] backdrop-blur-md">
                        {category}
                      </span>
                    </div>

                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={featuredImage}
                      alt={blog.title.rendered}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Date */}
                    <p className="text-sm text-gray-500">
                      {new Date(blog.date).toDateString()}
                    </p>

                    {/* Title */}
                    <h3
                      className="mt-3 line-clamp-2 text-2xl font-semibold leading-snug text-white"
                      dangerouslySetInnerHTML={{
                        __html: blog.title.rendered,
                      }}
                    />

                    {/* Excerpt */}
                    <div
                      className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-400"
                      dangerouslySetInnerHTML={{
                        __html: blog.excerpt.rendered,
                      }}
                    />

                    {/* Read More */}
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-[#00FF88]"
                    >
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-2"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blogs;