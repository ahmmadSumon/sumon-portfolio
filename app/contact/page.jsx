"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue  } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "+8801751260010",
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "arifahmmadsumon@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: "PArbatipur, Dinajpur, Bangladesh",
  },
  
]

const Contact = () => {
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
    className='py-4 '
    >
      <div className="container mx-auto pt-40 md:pt-28">
        <div className='flex flex-col xl:flex-row gap-[30px] '>
          <div className='xl:w-[54%] order-2 xl:order-none'>
          <form className='flex flex-col gap-6 p-10 bg-[#27272c]/30 rounded-xl' >
            <h3 className='text-4xl text-accent'>Let's work together</h3>
            <p className='text-white/60'> I'm passionate about creating impactful and innovative solutions. Let's collaborate to bring your ideas to life and achieve exceptional results..</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service"/>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> Select a service </SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Web Design</SelectItem>
                    <SelectItem value="mst">Figma to HTML/ PSD to HTML</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectTrigger>
            </Select>

            <Textarea 
            className="h-[200px]"
            placeholder="Type your message here"
            />
            <Button size="md" className="max-w-40">Send message</Button>
          </form>
          </div>
       
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
          {info.map((item,index) => {
            return <li key={index}>
              <div className='w-[52px] h-[52px] xl:h-[72px] bg-[#27272c]/60 text-accent rounded-md flex items-center justify-center'>
                <div className='text-[28px]'>{item.icon}</div>
              </div>
              <div className='flex-1'>
                <p className='text-white/60'>{item.title}</p>
                <h3 className='text-xl'>{item.description}</h3>
              </div>
            </li>
          })}
          </ul>
        </div>
      </div>
      </div>
    </motion.section>
  )
}

export default Contact
