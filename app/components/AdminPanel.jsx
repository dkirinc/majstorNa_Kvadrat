'use client'

import React from 'react'
import FileUploader from './FileUploader'
import GalleryItem from './GalleryItem'
import Gallery from './Gallery'
import { useAppContext } from '../context'
import { logout } from '../admin/actions'


const AdminPanel = () => {

    const { fileBefore, setFileBefore,
        setFileBeforeDB,
        fileAfter, setFileAfter,
        setFileAfterDB, toggle, setToggle, uploading } = useAppContext()

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className='w-full h-full flex flex-col items-center mt-28 gap-8'>
            <div className='absolute right-0 top-0'>
                <form action={logout}>
                    <button className='bg-orange-main p-2 m-5 rounded-md w-36 text-white' type='submit'>Log Out</button>
                </form>
            </div>
            <div className='border border-orange-main rounded-md w-3/6 flex flex-col items-center gap-4 p-4'>
                <div className='flex items-center gap-4'>
                    <FileUploader handleFile={setFileBefore} handleFileDB={setFileBeforeDB} btnText={'Slika -  Prije'} />
                    {fileBefore ? <p>${fileBefore}</p> : null}
                </div>
                <div className='flex items-center gap-4'>
                    <FileUploader handleFile={setFileAfter} handleFileDB={setFileAfterDB} btnText={'Slika - Poslije'} />
                    {fileAfter ? <p>${fileAfter}</p> : null}
                </div>
                {!fileBefore || !fileAfter ? null : <GalleryItem photoId={null} item={fileAfter.length < 1 ? (GalleryData[1]) : ({ id: 1, pic_1: fileBefore, pic_2: fileAfter })} admin={false} />
                }
                <button onClick={handleToggle} className='bg-orange-main p-2 rounded-md w-36 text-white'>{!uploading ? "Dodaj sliku" : "Dodavanje u tijeku"}</button>
            </div>
            <Gallery admin={true} />
        </div>
    )
}

export default AdminPanel