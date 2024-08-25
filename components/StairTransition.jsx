"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stair from './Stair'

const StairTransition = () => {
    const pathname = usePathname()
    return (
        <AnimatePresence mode='wait'>
            <div key={pathname} className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                <Stair />
            </div>
        </AnimatePresence>
    )
}

export default StairTransition;
