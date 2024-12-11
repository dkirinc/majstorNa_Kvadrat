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
import Modal from "./components/Modal";
import { MainProvider } from "./context/MainContext";

export default function Home() {

  const [galleryData, setGalleryData] = useState(GalleryData)

  const [open, setOpen] = useState(false)
  const [pictureId, setPictureId] = useState(2)

  const propsModal = [
    {
      id: 1,
      galleryData: galleryData,
      setGalleryData: setGalleryData,
      open: setOpen,
      photoId: setPictureId,
    }
  ]

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
    <MainProvider >
      <main>
        <Hero ref={heroRef} />
        <Services ref={servicesRef} />
        <About ref={aboutRef} />
        <Bottom ref={refData} props={propsModal} />
      </main>
      <Hamburger ref={refData} />
      <Modal open={open} setOpen={setOpen} pic_1={GalleryData[pictureId - 1].pic_1} pic_2={GalleryData[pictureId - 1].pic_2} />
    </MainProvider>
  );
}

