"use client"
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Bottom from "./components/Bottom";
import { useState, useRef, useEffect } from 'react'
import Hamburger from "./components/Hamburger";
import Modal from "./components/Modal";
import { AppWrapper } from "./context";

export default function Home() {

  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const heroRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)

  const refData = [
    {
      refHero: heroRef,
      refServices: servicesRef,
      refAbout: aboutRef,
      refGallery: galleryRef,
      refContact: contactRef
    },
  ]



  return (
    <AppWrapper>
      <main>
        <Hero ref={heroRef} />
        <Services ref={servicesRef} />
        <About ref={aboutRef} />
        <Bottom ref={refData} />
      </main>
      <Hamburger ref={refData} />
      {/* <Modal /> */}
    </AppWrapper>
  );
}

