'use client'
import React from 'react'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [textColor, setTextColor] = useState("text-white")
    const [border, setBorder] = useState("border-white")

    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setTextColor(("text-black"), setBorder("border-none"))
            : (setTextColor("text-white"), setBorder("border-white"))
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    return (
        <div className={`invisible xl:visible flex fixed top-0 w-full h-28  border-solid border-0 border-b ${border}  pr-10 justify-end  `} >
            <div className='relative w-[1200px] justify-end flex items-center gap-10 z-20 '>
                <button className={`btn border border-gray-third font-raleway bg-gray-third  rounded-sm`}>Početak</button>
                <button className={`btn border border-gray-third border-solid  font-raleway bg-gray-third  rounded-sm`}>Usluge</button>
                <button className={`btn border border-gray-third font-raleway   bg-gray-third  rounded-sm`}>O nama</button>
                <button className={`btn  border border-gray-third font-raleway  bg-gray-third  rounded-sm`}>Galerija</button>
                <button className={`btn  border border-gray-third font-raleway  bg-gray-third  rounded-sm`}>Kontakt</button>
            </div>
        </div>
    )
}

export default Navbar