import React, { useEffect } from 'react'
import { useState } from 'react'
import FileUploader from './FileUploader'
import GalleryItem from './GalleryItem'
import Gallery from './Gallery'
import { useAppContext } from '../context'
import { logout } from '../logout/actions'
import PhotoUploader from '../components/PhotoUploader'

import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

const AdminPanel = () => {

    const { addGalleryItem, deleteGalleryItem, setOpen } = useAppContext()



    //const [picBf, setPicBf] = useState(true)
    const [fileBefore, setFileBefore] = useState("")
    const [fileBeforeDB, setFileBeforeDB] = useState(null)
    const [fileAfter, setFileAfter] = useState("")
    const [fileAfterDB, setFileAfterDB] = useState(null)

    const [toggle, setToggle] = useState(true);

    const [uploading, setUploading] = useState(false);
    const router = useRouter()
    const [fileLocationDB, setfileLocationDB] = useState({ pic_1: "", pic_2: "" });


    async function createDBObject() {
        try {
            console.log("Making a table + " + fileLocationDB.pic_1)
            const { data, error } = await supabase
                .from("Mnk_db")
                .insert({
                    pic_1: fileLocationDB.pic_1,
                    pic_2: fileLocationDB.pic_2
                })


            if (error) throw error
            if (data != null) {
                //Change gallery look
            }
        }
        catch (error) {
            alert(error.message)
        }
    }

    const handleToggle = () => {
        setToggle(!toggle);
    };

    async function handleFileUpload(file, picBF) {
        try {

            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                throw new Error("User not authenticated for photo upload")
            }

            const filePath = `user_uploads/${fileName}`

            console.log(filePath)
            const { error } = await supabase.storage.from('photos')
                .upload(filePath, file)

            if (picBF == false) {
                setfileLocationDB(fileLocationDB => {
                    return {
                        ...fileLocationDB,
                        pic_2: filePath
                    }
                })
            } else {
                setfileLocationDB(fileLocationDB => {
                    return {
                        ...fileLocationDB,
                        pic_1: filePath
                    }

                })
            }

            console.log(fileLocationDB)

            if (error) {
                throw error
            }

            router.refresh();

        } catch (err) {
            console.log(err)
        } finally {
            setUploading(false)
        }
    }


    useEffect(() => {
        if (fileBefore.trim().length > 2 && fileAfter.trim().length > 2) {
            console.log({ fileLocationDB })
            createDBObject()
            setUploading(false)
        }

    }, [fileLocationDB.pic_2])

    useEffect(() => {
        if (fileBefore.trim().length > 2 && fileAfter.trim().length > 2) {
            async function uploader() {
                setUploading(true)
                await handleFileUpload(fileBeforeDB, true)
                console.log("Ubacujem drugi fajl")
                await handleFileUpload(fileAfterDB, false)
                console.log("Ubacujem DB")
            }
            uploader()
        } else {

        }
    }, [toggle])



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
                {!fileBefore || !fileAfter ? null : <GalleryItem photoId={null} item={fileAfter.length < 1 ? (GalleryData[1]) : ({ id: 1, pic_1: fileBefore, pic_2: fileAfter })} admin={false} open={setOpen} />
                }
                <button onClick={handleToggle} className='bg-orange-main p-2 rounded-md w-36 text-white'>{!uploading ? "Dodaj sliku" : "Dodavanje u tijeku"}</button>
            </div>
            <Gallery admin={true} deleteGalleryItem={deleteGalleryItem} />
        </div>
    )
}

export default AdminPanel