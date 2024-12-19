"use client"
import React, { forwardRef } from 'react'
import Gallery from './Gallery'
import Contact from './Contact'

const Bottom = forwardRef((props, ref) => {

    const refGallery = ref[0].refGallery
    const refContact = ref[0].refContact
    /* props.props[0].galleryData */



    return (
        <div className='bg-gray-main w-full flex flex-col px-20 py-16 gap-20'>
            <Gallery ref={refGallery} />
            <Contact ref={refContact} />
        </div>
    )
})

export default Bottom

