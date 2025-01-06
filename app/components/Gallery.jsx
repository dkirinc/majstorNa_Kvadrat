"use client"
import React from 'react'
import GalleryItem from './GalleryItem'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useAppContext } from '../context'

const Gallery = ({ ref, admin }) => {

    const { galleryData } = useAppContext()


    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 200
    }


    if (!galleryData) {
        return <div>Galerija u izradi</div>
    }

    return (
        <div id='gallery' className='xl:w-[1200px] py-32 self-center flex flex-col items-center gap-16'>
            <h2 className='mb-20 font-raleway '>Galerija</h2>
            <div ref={ref} className=' w-[290px] md:w-[620px] lg:w-[900px] xl:w-[1200px]  flex items-center overflow-hidden'>
                <div className='relative'>
                    <MdChevronLeft size={80} onClick={slideLeft} className='invisible md:visible absolute -left-[60px] -top-[40px] text-orange-main hover:opacity-50 ease-in-out duration-300' />

                </div>
                <div id='slider' className="relative flex items-center w-full h-full overflow-hidden overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">

                    {
                        galleryData.map((item) => (
                            <GalleryItem key={item.id} item={item} className='' open={galleryData.open} photoId={galleryData.photoId} admin={admin} />
                        ))
                    }

                </div>
                <div className='relative '>
                    <MdChevronRight size={80} onClick={slideRight} className='invisible md:visible absolute -left-[20px] -top-[40px] text-orange-main hover:opacity-50 ease-in-out duration-300' />

                </div>
            </div>
        </div>
    )
}

export default Gallery