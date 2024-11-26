"use client"
import React, { forwardRef } from 'react'
import Gallery from './Gallery'
import Contact from './Contact'

const Bottom = forwardRef((galleryData, ref) => {

    function onClick() {
        console.log(ref)
    }

    const refGallery = ref[0].refGallery
    const refContact = ref[0].refContact


    return (
        <div onClick={onClick} className='bg-gray-main w-full flex flex-col px-20 py-16 gap-20'>
            <Gallery ref={refGallery} galleryData={galleryData} />
            <Contact ref={refContact} />
        </div>
    )
})

export default Bottom

/* function Bottom(galleryData, refGallery, refContact) {


    return (
        <div className='bg-gray-main w-full flex flex-col px-20 py-16 gap-20'>
            <Gallery galleryData={galleryData} ref={refGallery} />
            <Contact ref={refContact} />
        </div>
    )
}

export default Bottom */