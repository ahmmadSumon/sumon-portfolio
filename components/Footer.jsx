import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-8 xl:py-12 text-white bg-gray-900'>
      <div className="container mx-auto flex flex-col xl:flex-row justify-between items-center gap-8">
        <Link href="/">
          <h1 className='text-4xl font-semibold'>Sumon <span className='text-accent'>.</span></h1>
        </Link>
        <nav className='flex flex-col xl:flex-row items-center gap-8'>
          <Link href="/" className="text-xl capitalize hover:text-accent transition-all">Home</Link>
          <Link href="/services" className="text-xl capitalize hover:text-accent transition-all">Services</Link>
          <Link href="/resume" className="text-xl capitalize hover:text-accent transition-all">Resume</Link>
          <Link href="/work" className="text-xl capitalize hover:text-accent transition-all">Work</Link>
          <Link href="/contact" className="text-xl capitalize hover:text-accent transition-all">Contact</Link>
        </nav>
        <div className='flex items-center gap-4'>
          <a href="https://github.com/ahmmadSumon" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/arif-ahmmad-sumon-4177bb27b/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/arifahmed.sumon" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Sumon. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
