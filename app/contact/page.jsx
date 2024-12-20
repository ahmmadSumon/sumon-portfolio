"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+8801751260010",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "arifahmmadsumon@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Parbatipur, Dinajpur, Bangladesh",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleCopyMessage = () => {
    const { firstname, lastname, email, phone, service, message } = formData;

    // Validation
    if (!firstname || !lastname || !email || !phone || !service || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // Create the message
    const fullMessage = `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
    navigator.clipboard.writeText(fullMessage)
      .then(() => {
        setSuccess('Message copied to clipboard! You can paste it into your email client.');
      })
      .catch(() => {
        setError('Failed to copy the message. Please try again.');
      });
  };

  const handleSendMail = () => {
    const { firstname, lastname, email, phone, service, message } = formData;

    // Validation
    if (!firstname || !lastname || !email || !phone || !service || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // Create the mailto link
    const mailtoLink = `mailto:arifahmmadsumon@gmail.com?subject=Inquiry about ${service}&body=Name: ${firstname} ${lastname}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='py-4'
    >
      <div className="container mx-auto pt-40 md:pt-28">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form
              className='flex flex-col gap-6 p-10 bg-[#27272c]/30 rounded-xl'
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>I'm passionate about creating impactful and innovative solutions. Let's collaborate to bring your ideas to life and achieve exceptional results.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input name="firstname" value={formData.firstname} onChange={handleChange} type="text" placeholder="Firstname" />
                <Input name="lastname" value={formData.lastname} onChange={handleChange} type="text" placeholder="Lastname" />
                <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" />
                <Input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone" />
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel> Select a service </SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="Web Design">Web Design</SelectItem>
                      <SelectItem value="Figma to HTML/ PSD to HTML">Figma to HTML/ PSD to HTML</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here"
              />
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <div className="flex items-center gap-4">
  <Button size="md" className="max-w-40" onClick={handleCopyMessage}>Copy Message</Button>
  <FaArrowRight className="text-white text-xl" /> {/* Arrow icon */}
  <Button size="md" className="max-w-40" onClick={handleSendMail}>Send Mail</Button>
</div>
            </form>
          </div>

          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className='w-[52px] h-[52px] xl:h-[72px] bg-[#27272c]/60 text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
