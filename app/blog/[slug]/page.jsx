"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((data) => {
        if (data.posts) {
          const found = data.posts.find((p) => p.slug === slug);
          setPost(found || null);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center pt-40">
        <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  if (!post) {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center pt-40">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-accent hover:underline">Back to blog</Link>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
      className="min-h-[80vh] py-12"
    >
      <div className="container mx-auto pt-40 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
          <ArrowLeft size={18} /> Back to blog
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag) => (
            <span key={tag} className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="text-white/80 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </motion.section>
  );
}
