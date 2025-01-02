'use client'
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function PhotoUploader() {
    const [uploading, setUploading] = useState(false);
    const router = useRouter()
    const [fileLocationDB, setfileLocationDB] = useState({ pic_1: "", pic_2: "" });

    async function createDBObject() {
        try {
            const { data, error } = await supabase
                .from("Mnk_db")
                .insert({
                    pic_1: fileLocationDB.pic_1,
                    pic_2: filefileLocationDB.pic_2
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

    async function handleFileUpload(file, picBF) {
        try {
            setUploading(true);

            /* const fileDB = event.target.files[0]
            console.log(file) */
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`
            console.log(fileName + ' ' + fileExt)
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                throw new Error("User not authenticated for photo upload")
            }

            const filePath = `user_uploads/${fileName}`
            console.log(filePath)
            const { error } = await supabase.storage.from('photos')
                .upload(filePath, file)

            if (!picBF) {
                setfileLocationDB.pic_2(filePath)
            } else {
                setfileLocationDB.pic_1(filePath)
            }

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

    /* async function handleFileUpload(event) {
        try {
            setUploading(true);

            const fileDB = event.target.files[0]
            console.log(file)
            const fileExt = fileDB.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`
            console.log(fileName + ' ' + fileExt)
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                throw new Error("User not authenticated for photo upload")
            }

            const filePath = `user_uploads/${fileName}`
            console.log(filePath)
            const { error } = await supabase.storage.from('photos')
                .upload(filePath, fileDB)

            createDBObject(filePath)

            if (error) {
                throw error
            }

            router.refresh();

        } catch (err) {
            console.log(err)
        } finally {
            setUploading(false)
        }
    } */


    return (
        <label
            htmlFor="photo-upload"
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg m-4"
        >
            {uploading ? 'Uploading...' : 'Upload Photo'}
            <input
                type="file"
                id="photo-upload"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
            />
        </label>
    )
}