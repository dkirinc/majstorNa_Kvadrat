"use client"
import { useRef } from 'react'
import React from 'react'
import GalleryItem from './GalleryItem'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Gallery = ({ galleryData, ref }) => {


    if (!galleryData || galleryData.length === 0) {
        return <div>Galerija u izradi</div>
    }

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 200
    }


    return (
        <div id='gallery' className='lg:w-[1200px] py-32 self-center flex flex-col items-center gap-16'>
            <h2 ref={ref} className='mb-20 font-raleway '>Galerija</h2>
            <div className=' w-[290px] md:w-[620px] lg:w-[900px] xl:w-[1200px]  flex items-center'>
                <div className='relative'>
                    <MdChevronLeft size={80} onClick={slideLeft} className='invisible md:visible absolute -left-[80px] -top-[40px] text-orange-main hover:opacity-50 ease-in-out duration-300' />

                </div>
                <div id='slider' className="relative flex items-center w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {galleryData.galleryData.map((item) => (
                        <GalleryItem key={item.id} item={item} className='' />
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

/*  < div className = 'flex flex-col gap-5' >
                 <div className='gallery-holder w-[367px] h-[261px] transition duration-150 ease-in-out hover:scale-105 cursor-pointer border rounded-md'>
                     <img src="/mnk_1_before.jpg" className='w-full h-full  object-cover border rounded-md' alt="" />
                 </div>
                 <div className='gallery-holder w-[367px] h-[261px] transition duration-150 ease-in-out hover:scale-105 cursor-pointer'>
                     <img src="/mnk_1_after.jpg" className='w-full h-full object-cover border rounded-md' alt="" />
                 </div>
             </div >
             <div className='relative h-[640px] w-[2px] -top-[50px] bg-orange-main'></div>
             <div className='flex flex-col gap-5'>
                 <div className='gallery-holder w-[367px] h-[261px] transition duration-150 ease-in-out hover:scale-105 cursor-pointer'>
                     <img src="/mnk_4_before.jpg" className='w-full h-full object-cover border rounded-md' alt="" />
                 </div>
                 <div className='gallery-holder w-[367px] h-[261px] transition duration-150 ease-in-out hover:scale-105 cursor-pointer'>
                     <img src="/mnk_4_after.jpg" className='w-full h-full object-cover border rounded-md' alt="" />
                 </div>
             </div>
             <div className='relative h-[640px] w-[2px] -top-[50px] bg-orange-main'></div>
             <div className='flex flex-col gap-5'>
                 <div className='gallery-holder w-[367px] h-[261px] transition duration-150 ease-in-out hover:scale-105 cursor-pointer'>
                     <img src="/mnk_3_before.jpg" className='w-full h-full object-cover border rounded-md' alt="" />
                 </div>
                 <div className='gallery-holderw-[367px] h-[261px] transition duration-150 ease-in-out hover:scale-105 cursor-pointer'>
                     <img src="/mnk_3_after.jpg" className='w-full h-full object-cover border rounded-md' alt="" />
                 </div>
                 </div> */