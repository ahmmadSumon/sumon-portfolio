"use client";

import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowDownLeft } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "I build complete web applications from frontend to backend using React.js, Next.js, Node.js, Express.js, and MongoDB. From crafting beautiful interfaces to developing robust APIs and databases, I deliver high-performance, scalable solutions tailored to your business needs.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "I specialize in modern frontend technologies like React.js and Next.js to create fast, interactive, and responsive user interfaces that offer an exceptional user experience on all devices.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Backend Development & APIs",
    description:
      "I develop secure and efficient backend systems using Node.js and Express.js. I design RESTful APIs, integrate databases, and ensure seamless communication between client and server.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Database & Deployment",
    description:
      "I manage databases using MongoDB and handle deployment on modern platforms like Vercel and Render. My focus is on delivering scalable, maintainable, and production-ready web applications.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto mt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeIn },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex items-center justify-between">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover: transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-180"
                >
                  <BsArrowDownLeft className="text-3xl text-primary" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/80">{service.description}</p>
              <div className="border-b border-white/28 w-full mt-4"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
