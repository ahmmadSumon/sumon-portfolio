"use client"
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci";
import { Button } from './ui/button'

const links = [
  { name:"home", path: "/" },
  { name:"services", path: "/services" },
  { name:"resume", path: "/resume" },
  { name:"work", path: "/work" },
  { name:"contact", path: "/contact" },
]

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // control sheet state

  const handleLinkClick = () => setOpen(false); // close sheet

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent'/>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className='mt-20 mb-20 text-center text-2xl'>
          <Link href="/" onClick={handleLinkClick}>
            <h1 className='text-4xl font-semibold'>
              Sumon <span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>

        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => (
            <Link 
              href={link.path}
              key={index}
              onClick={handleLinkClick}
              className={`${link.path===pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <div>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center"
              onClick={handleLinkClick}
            >
              Hire me
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
