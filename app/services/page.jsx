"use client";

import { easeIn, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I specialize in creating responsive and dynamic front-end solutions that bring websites to life. From crafting intuitive user interfaces to optimizing performance, I handle all aspects of front-end development to ensure your website is fast, modern, and engaging.",
    href: ""
  },
  {
    num: "02",
    title: "Web Design",
    description: "I create visually appealing and user-friendly designs that captivate audiences and enhance the user experience. My approach to web design combines creativity with functionality, ensuring that every website is not only aesthetically pleasing but also intuitive and easy to navigate.",
    href: ""
  },
  
  {
    num: "03",
    title: "Figma to Code Design",
    description: "I transform Figma designs into pixel-perfect, responsive code, ensuring seamless translation from design to a functional website.",
    href: ""
  }
  ,
  {
    num: "04",
    title: "PSD to HTML",
    description: "I convert PSD designs into clean, responsive HTML code, ensuring accurate representation of your designs across all devices.",
    href: ""
  }
  ,
];

const Services = () => {
  return (
    <section className='min-h-[80vh]  flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto mt-40 '>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeIn },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => (
            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex items-center justify-between '>
                <div className='text-5xl font-extrabold text-outline text-transparent  group-hover: transition-all duration-500'>{service.num}</div >
                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45'>
                  <BsArrowDownRight className='text-3xl text-primary' />
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
              <p className=' text-white/80'>{service.description}</p>
              <div className='border-b border-white/28 w-full mt-4'></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
