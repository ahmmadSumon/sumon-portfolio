"use client"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs,TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'
import React from 'react'
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"


const about ={
  title: "About Me",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates officia omnis pariatur quasi ullam dolorem adipisci placeat libero animi beatae?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ahmmad Sumon"
    },
    {
      fieldName: "Phone",
      fieldValue: "+8801751260010"
    },
    {
      fieldName: "Experience",
      fieldValue: "3 years+"
    },
    {
      fieldName: "Skype",
      fieldValue: "AhmmadSumon"
    },
    {
      fieldName: "Nationally",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Email",
      fieldValue: "arifahmmadsumon@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Bengali, Hindi, Urdu"
    },
    
  ]
}

const experience ={
  icon:"",
  title: "My Experience",
  description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, consequatur? Magni itaque unde iusto fugiat debitis blanditiis temporibus quaerat architecto.",
  items: [
    {
      company: "Wtech solutions",
      position:"Front-End developer ",
      duration:"2023-present"
    },
    {
      company: "Freeance",
      position:"Front-End developer ",
      duration:"2023"
    },
    {
      company: "Metal Prvt Ltd",
      position:"Business Developement Officer",
      duration:"2022"
    }
    ,
    {
      company: "Freeance",
      position:"Front-End developer ",
      duration:"2023"
    },
    {
      company: "Metal Prvt Ltd",
      position:"Business Developement Officer",
      duration:"2022"
    }

  ]
}

const education = {
  icon:"",
  title: "My Education",
  description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, consequatur? Magni itaque unde iusto fugiat debitis blanditiis temporibus quaerat architecto.",
  items: [
    {
      institution: "Wtech solutions",
      degree:"Front-End developer ",
      duration:"2023-present"
    },
    {
      institution: "Freeance",
      degree:"Front-End developer ",
      duration:"2023"
    },
    {
      
      institution: "Metal Prvt Ltd",
      degree:"Business Developement Officer",
      duration:"2022"
    }
    ,
    {
      institution: "Freeance",
      degree:"Front-End developer ",
      duration:"2023"
    },
    {
      institution: "Metal Prvt Ltd",
      degree:"Business Developement Officer",
      duration:"2022"
    }

  ]
}
const skills = {
  title:"My skills",
  description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, consequatur? Magni itaque unde iusto fugiat debitis blanditiis temporibus quaerat architecto.",
  skillList: [
    {
      icon:<FaHtml5/>,
      name: "HTML 5"
    },
    {
      icon:<FaCss3/>,
      name: "CSS 3"
    },
    {
      icon:<FaJs/>,
      name: "JavaScript"
    },
    {
      icon:<FaReact/>,
      name: "React.js"
    },
    {
      icon:<FaNodeJs/>,
      name: "Node.js"
    },
    {
      icon:<SiNextdotjs/>,
      name: "Next.js"
    },
    {
      icon:<SiTailwindcss/>,
      name: "Taildwind css"
    },
    {
      icon:<FaFigma/>,
      name: "Figma"
    }
  ]
}
const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"}}}
    className='min-h-[80vh]  flex justify-center items-center py-12 xl:py-0 '
    >             
     <div className='container mx-auto mt-40 '>
      <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
        <TabsList className="flex flex-col  w-full max-w-[380px] mx-auto xl:mx-0 gap-6  ">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        <div className='min-h-[70vh] w-full'>
          <TabsContent  value="experience" className="w-full">
            <div className='flex flex-col gap-3 text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
              <ScrollArea className="h-[400px] flex flex-col">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item,index)=>{
                    return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className=' max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex  items-center justify-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                        <p className='text-white/60 '>{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent  value="education" className="w-full"> <div className='flex flex-col gap-3 text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
              <ScrollArea className="h-[400px] flex flex-col">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item,index)=>{
                    return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className=' max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                      <div className='flex  items-center justify-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                        <p className='text-white/60 '>{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div></TabsContent>
          <TabsContent  value="skills" className="w-full h-full">
          <div className='flex flex-col gap-[30px] '>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
            <h3 className='text-4xl font-bold'>{skills.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
            </div>
          
                <ul className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill,index)=>{
                    return <li key={index} className=''>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                   
                     </li>
                  })}
                </ul>
             
            </div>
          </TabsContent>
          <TabsContent  value="about" className="w-full text-center xl:text-left">
          <div className='flex flex-col gap-[30px] '>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
            
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item,index)=>{
                    return <li key={index} className=' flex  justify-center items-center xl:justify-start gap-4 '>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                     
                    </li>
                  })}
                </ul>
            
            </div>
          </TabsContent>
        </div>
      </Tabs>
     </div>
    </motion.div>
  )
}

export default Resume
