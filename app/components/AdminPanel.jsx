import React from 'react'
import { useState } from 'react'
import FileUploader from './FileUploader'
import GalleryItem from './GalleryItem'
import Gallery from './Gallery'
import { useAppContext } from '../context'
import { logout } from '../logout/actions'
import PhotoUploader from '../components/PhotoUploader'

const AdminPanel = () => {

    const { addGalleryItem, deleteGalleryItem, setOpen } = useAppContext()

    const [fileBefore, setFileBefore] = useState("")
    const [fileAfter, setFileAfter] = useState("")




    function addItem() {
        if (fileBefore.trim().length > 2 && fileAfter.trim().length > 2) {
            const newGalleryItem = {
                pic_1: fileBefore,
                pic_2: fileAfter
            }
            console.log("Before: " + fileBefore.trim().length)
            console.log("After: " + fileAfter.trim().length)
            addGalleryItem(newGalleryItem)
            //handleFileUpload(fileBefore)
        } else {
            alert("Niste unijeli fotografije!")
        }
    }


    return (
        <div className='w-full h-full flex flex-col items-center mt-28 gap-8'>
            <form action={logout}>
                <button type='submit'>Log Out</button>
            </form>
            <div className='border border-orange-main rounded-md w-3/6 flex flex-col items-center gap-4 p-4'>
                <div className='flex items-center gap-4'>
                    <FileUploader handleFile={setFileBefore} btnText={'Slika -  Prije'} />
                    {fileBefore ? <p>${fileBefore}</p> : null}
                </div>
                <div className='flex items-center gap-4'>
                    <FileUploader handleFile={setFileAfter} btnText={'Slika - Poslije'} />
                    {fileAfter ? <p>${fileAfter}</p> : null}
                </div>
                {!fileBefore || !fileAfter ? null : <GalleryItem photoId={null} item={fileAfter.length < 1 ? (GalleryData[1]) : ({ id: 1, pic_1: fileBefore, pic_2: fileAfter })} admin={false} open={setOpen} />
                }
                <button onClick={addItem} className='bg-orange-main p-2 rounded-md w-36 text-white'>Dodaj sliku</button>
            </div>
            <PhotoUploader />
            <Gallery admin={true} deleteGalleryItem={deleteGalleryItem} />
        </div>
    )
}

export default AdminPanel