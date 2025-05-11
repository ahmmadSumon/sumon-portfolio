"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "E-commerce Website",
    description: "A dynamic e-commerce website built with modern technologies, offering a seamless shopping experience with a responsive design and interactive features.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" }
    ],
    image: '/image/11.png',
    live: 'https://ecommercenextjs-weld.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/ecommercenextjs'
  },
    {
    num: "02",
    category: "frontend",
    title: "GYM Website",
    description: "A modern and responsive GYM website designed to promote fitness services, display class schedules, and highlight gym facilities. Built with interactive animations using GSAP and optimized for all devices to ensure a seamless user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "GSAP" }
    ],
    image: '/image/gym1.png',
    live: 'https://gym-full-stack-smn.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/gym-full-stack'
  },
  {
    num: "03",
    category: "frontend",
    title: "Travel Website",
    description: "A modern travel website showcasing the best of Bangladesh, featuring destination guides, travel itineraries, and booking options. Designed with a clean and engaging interface for a seamless user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      {name:'GSAP'},
      {name:"Lenis Smoot Scroll"}
    ],
    image: '/image/travel.png',
    live: 'https://smntravelx-m3wm.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/smntravelx'
  },
  {
    num: "04",
    category: "frontend",
    title: "Restaurant Website",
    description: "A visually appealing restaurant website designed to showcase menus, services, and ambiance. Features responsive design and interactive elements for an enhanced user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" }
    ],
    image: '/image/res.png',
    live: 'https://restaurent-nextjs.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/restaurent-nextjs'
  },
  {
    num: "05",
    category: "frontend",
    title: "Law Service",
    description: "A professional law service website designed to provide information about legal services, showcase case studies, and facilitate client interactions. Features a clean, responsive design for an optimal user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" }
    ],
    image: '/image/irs.png',
    live: 'https://irs-strat-2huj.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/irs-strat/tree/main'
  },
  {
    num: "06",
    category: "frontend",
    title: "Martyre Website",
    description: "A memorial website dedicated to the students who tragically lost their lives during the 2024 protests in Bangladesh. The site honors their memory, provides information about the events, and offers resources for support and remembrance.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" }
    ],
    image: '/image/sohid.png',
    live: 'https://shohid-nextjs.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/shohidNextjs/tree/main'
  },
  {
    num: "07",
    category: "frontend",
    title: "Agency Website(On Going)",
    description: "Learn with Trends is an Online Marketing Agency. The main goal of this site is to provide quality Digital Marketing Services. You can get tutorials, tips, courses, tools, and other resources that allow anyone to establish online and master digital marketing based on real case studies and deep research.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "Framer motion" },
      { name: "Acernity UI" },
      
    ],
    image: '/image/learn.png',
    live: 'https://learnwithtrends.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/learnwithtrends'
  },
  {
    num: "08",
    category: "frontend",
    title: "E-commerce Website",
    description: "A dynamic e-commerce website built with modern technologies, offering a seamless shopping experience with a responsive design and interactive features.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" }
    ],
    image: '/image/21.png',
    live: 'https://nextjs-ecom-kappa.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/nextjs-ecom/tree/main'
  },
  {
    num: "09",
    category: "frontend",
    title: "Social Worker",
    description: "A dynamic e-commerce website built with modern technologies, offering a seamless shopping experience with a responsive design and interactive features.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" }
    ],
    image: '/image/12.png',
    live: 'https://nur-web.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/nur-web'
  },{
    num: "10",
    category: "frontend",
    title: "Restaurant Website",
    description: "A visually appealing restaurant website designed to showcase menus, services, and ambiance. Features responsive design and interactive elements for an enhanced user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" }
    ],
    image: '/image/coffee.png',
    live: 'https://resturent-tau.vercel.app/', 
    github: 'https://github.com/ahmmadSumon/resturent/tree/main'
  },

]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (Swiper) => {
    const currentIndex = Swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto pt-40'>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
              <h3 className='text-[36px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize'>{project.title}</h3>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    <div className='relative w-full h-full'>
                    
                     
                      <Image src={project.image} fill className='object-cover top-0'/>
                   
                    </div>
                  </div>
                  </Link>
                </SwiperSlide>
              ))}
              <WorkSliderBtns continerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
