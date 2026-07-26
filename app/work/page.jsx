"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import ProjectsSkeleton from '@/components/ProjectsSkeleton';


const Work = () => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [project, setProject] = useState(null);
  const [activeCat, setActiveCat] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.projects) {
          setProjects(data.projects);
          setFiltered(data.projects);
          setProject(data.projects[0] || null);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const filterProjects = (cat) => {
    setActiveCat(cat);
    const result = cat === "all" ? projects : projects.filter((p) => p.category === cat);
    setFiltered(result);
    setProject(result[0] || null);
  };

  const handleSlideChange = (Swiper) => {
    const currentIndex = Swiper.activeIndex;
    setProject(filtered[currentIndex]);
  };

  if (loading) {
    return <ProjectsSkeleton />;
  }

  if (!project) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center pt-40">
        <div className="text-white/60 text-xl">No projects yet.</div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto pt-40">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center xl:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => filterProjects(cat)}
              className={`capitalize px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCat === cat
                  ? "bg-accent text-primary"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* left */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category} project
              </h2>
              <h3 className="text-[36px] font-bold leading-none text-accent capitalize">
                {project.title}
              </h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-2 sm:gap-3">
                {project.stack?.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-base md:text-lg text-accent whitespace-nowrap"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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

          {/* right */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {filtered.map((proj, index) => (
                <SwiperSlide key={proj._id || index} className="w-full">
                  <Link href={proj.live} target="_blank" rel="noopener noreferrer">
                    <div className="h-[460px] relative group flex justify-center items-center ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        {/* Desktop Image */}
                        <Image
                          src={proj.image}
                          fill
                          alt={proj.title}
                          className="object-cover hidden md:block"
                        />
                        {/* Mobile Image */}
                        <Image
                          src={proj.imageMobile || proj.image}
                          fill
                          alt={proj.title}
                          className="object-cover md:hidden"
                        />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                continerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;