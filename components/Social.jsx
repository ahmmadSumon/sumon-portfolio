"use client"
import React from 'react'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ahmmadSumon" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/arif-ahmmad-sumon-4177bb27b/" },
  { icon: <FaFacebookF />, path: "https://www.facebook.com/arifahmed.sumon" },
  { icon: <FaWhatsapp />, path: "https://wa.me/+8801751260010" },
]

const Social = ({ containerstyles, iconStyles }) => {
  return (
    <div className={containerstyles}>
      {socials.map((item, index) => (
        <a
          href={item.path}
          key={index}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Social
