"use client"
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import GalleryData from '@/app/data/GalleryData'
import GalleryItem from '@/app/components/GalleryItem'
import Gallery from '@/app/components/Gallery'
import FileUploader from '@/app/components/FileUploader'
import Modal from '@/app/components/Modal'

export default function Panel() {

    const [galleryData, setGalleryData] = useState(GalleryData)
    const [open, setOpen] = useState(false)
    const [pictureId, setPictureId] = useState("null")
    const [fileBefore, setFileBefore] = useState("")
    const [fileAfter, setFileAfter] = useState("")

    const addGalleryItem = (newGalleryItem) => {
        newGalleryItem.id = uuidv4()
        setGalleryData([newGalleryItem, ...galleryData])
    }

    const deleteGalleryItem = (id) => {
        setGalleryData(galleryData.filter((item) => item.id !== id))
    }

    const propsModal = [
        {
            id: 1,
            galleryData: galleryData,
            setGalleryData: setGalleryData,
            open: setOpen,
            photoId: setPictureId,
        }
    ]

    function addItem() {
        if (fileBefore.trim().length > 2 || fileAfter.trim().length > 2) {
            const newGalleryItem = {
                pic_1: fileBefore,
                pic_2: fileAfter
            }

            addGalleryItem(newGalleryItem)
        } else {
            alert("Niste unijeli fotografije!")
        }
    }



    return (
        <div>
            <div className='w-full h-full flex flex-col items-center mt-28 gap-8'>
                <div className='border border-orange-main rounded-md w-3/6 flex flex-col items-center gap-4 p-4'>
                    <div className='flex items-center gap-4'>
                        <FileUploader handleFile={setFileBefore} btnText={'Slika -  Prije'} />
                        {fileBefore ? <p>${fileBefore}</p> : null}


                    </div>
                    <div className='flex items-center gap-4'>
                        <FileUploader handleFile={setFileAfter} btnText={'Slika - Poslije'} />
                        {fileAfter ? <p>${fileAfter}</p> : null}
                    </div>
                    <GalleryItem item={fileAfter.length < 1 ? (GalleryData[1]) : ({ id: 1, pic_1: fileBefore, pic_2: fileAfter })} admin={false} open={setOpen} />
                    <button onClick={addItem} className='bg-orange-main p-2 rounded-md w-36 text-white'>Dodaj sliku</button>
                </div>
                <Gallery galleryData={propsModal[0]} admin={true} deleteGalleryItem={deleteGalleryItem} />
            </div>
            <Modal open={open} setOpen={setOpen} pic_1={fileBefore} pic_2={fileAfter} />
        </div>
    )
}
