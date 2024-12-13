import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { ModeToggle } from './ModeToggle'

const Header = () => {
  return (
    <header className='fixed top-0 w-full py-8 xl:py-12 text-white bg-black z-50'>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className='text-4xl font-semibold'>Sumon <span className='text-accent'>.</span></h1>
        </Link>
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <ModeToggle/>
          <Link href='/contact'>
            <Button variant="outline" size="lg" className="flex items-center ">Hire me</Button>
          </Link>
        </div>
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
