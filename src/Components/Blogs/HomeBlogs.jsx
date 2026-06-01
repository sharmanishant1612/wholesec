import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

      setBlogs(response.data.slice(0, 6));
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
      className="relative overflow-hidden bg-[#050505] py-24"
      id="blogs"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.05),transparent_35%)]" />

      {/* Blur */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#00FF88]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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

        {loading ? (
          <div className="mt-20 flex justify-center">
            <h2 className="text-lg text-gray-400">
              Loading blogs...
            </h2>
          </div>
        ) : (
          <>
            {/* Blogs Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {blogs.map((blog, index) => {
                const featuredImage =
                  blog._embedded?.["wp:featuredmedia"]?.[0]
                    ?.source_url ||
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
                      boxShadow:
                        "0px 0px 24px rgba(0,255,136,0.06)",
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
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
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex h-full flex-col p-6">
                      <p className="text-sm text-gray-500">
                        {new Date(blog.date).toDateString()}
                      </p>

                      <h3
                        className="mt-3 line-clamp-2 text-2xl font-semibold text-white"
                        dangerouslySetInnerHTML={{
                          __html: blog.title.rendered,
                        }}
                      />

                      <div
                        className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-400"
                        dangerouslySetInnerHTML={{
                          __html: blog.excerpt.rendered,
                        }}
                      />

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-[#00FF88]"
                      >
                        Read More

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            {/* See More Button */}
            <div className="mt-12 flex justify-end">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 rounded-xl border border-[#00FF88]/20 bg-[#00FF88]/10 px-6 py-3 text-sm font-medium text-[#00FF88] transition-all duration-300 hover:bg-[#00FF88]/15"
              >
                See More

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HomeBlogs;