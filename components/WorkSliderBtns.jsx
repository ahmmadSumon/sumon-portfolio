"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"
const WorkSliderBtns = ({continerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
  return (
    <div className={continerStyles}>
      <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles}/>
      </button>
      <button className={btnStyles}  onClick={()=> swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  )
}

export default WorkSliderBtns
