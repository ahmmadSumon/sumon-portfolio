"use client"
import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";
const socials = [
    {icon:<FaGithub/>, path:""},
    {icon:<FaLinkedinIn />, path:""},
    {icon:<FaYoutube/>, path:""},
    {icon:<FaTwitter/>, path:""},
]
const Social = ({containerstyles, iconStyles}) => {
  return (
    <div className={containerstyles}>
      {socials.map((item, index) => {
        return (
            <Link href={item.path} key={index} className={iconStyles}>
                {item.icon}
            </Link>
        )
      })}
    </div>
  )
}

export default Social
