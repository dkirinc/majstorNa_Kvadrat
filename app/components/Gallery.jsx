"use client"
import { useRef, useState } from 'react'
import React from 'react'
import GalleryItem from './GalleryItem'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Gallery = ({ galleryData, ref, admin, deleteGalleryItem }) => {



    if (!galleryData || galleryData.length === 0) {
        return <div>Galerija u izradi</div>
    }

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
        console.log(galleryData)
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 200
    }





    function onClick() {

    }


    return (
        <div id='gallery' className='lg:w-[1200px] py-32 self-center flex flex-col items-center gap-16'>
            <h2 className='mb-20 font-raleway '>Galerija</h2>
            <div onClick={onClick} ref={ref} className=' w-[290px] md:w-[620px] lg:w-[900px] xl:w-[1200px]  flex items-center'>
                <div className='relative'>
                    <MdChevronLeft size={80} onClick={slideLeft} className='invisible md:visible absolute -left-[80px] -top-[40px] text-orange-main hover:opacity-50 ease-in-out duration-300' />

                </div>
                <div id='slider' className="relative flex items-center w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {galleryData.galleryData.map((item) => (
                        <GalleryItem key={item.id} item={item} className='' open={galleryData.open} photoId={galleryData.photoId} admin={admin} deleteGalleryItem={deleteGalleryItem} />
                    ))}

                </div>
                <div className='relative '>
                    <MdChevronRight size={80} onClick={slideRight} className='invisible md:visible absolute -top-[40px] text-orange-main hover:opacity-50 ease-in-out duration-300' />

                </div>
            </div>
        </div>
    )
}

export default Gallery