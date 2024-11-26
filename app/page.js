"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Bottom from "./components/Bottom";
import { useState, useRef, useEffect, forwardRef } from 'react'
import GalleryData from "./data/GalleryData";
import Hamburger from "./components/Hamburger";

export default function Home() {

  const [galleryData, setGalleryData] = useState(GalleryData)



  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const heroRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)

  const refData = [
    {
      refHero: heroRef
      ,
      refServices: servicesRef
      ,
      refAbout: aboutRef
      ,
      refGallery: galleryRef
      ,
      refContact: contactRef
    },

  ]


  return (
    <div >
      <main>
        <Hero ref={heroRef} />
        <Services ref={servicesRef} />
        <About ref={aboutRef} />
        <Bottom ref={refData} galleryData={galleryData} />
      </main>
      {/* <Navbar /> */}
      <Hamburger ref={refData} />

    </div>
  );
}

