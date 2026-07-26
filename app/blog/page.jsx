"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((data) => {
        if (data.posts) setPosts(data.posts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4 } }}
      className="min-h-[80vh] py-12 xl:py-0"
    >
      <div className="container mx-auto pt-40">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-white/60 mb-10">
          Thoughts, tutorials, and insights on web development.
        </p>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-white/5 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="text-white/60">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group bg-[#27272c]/40 p-6 rounded-xl hover:bg-[#27272c]/60 transition-all"
              >
                <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/60 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="text-accent group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
