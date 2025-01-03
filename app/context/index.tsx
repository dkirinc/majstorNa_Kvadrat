"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";



const AppContext = createContext<any>(undefined)

export function AppWrapper({ children }: {
    children: React.ReactNode
}) {

    const [workingData, setWorkingData] = useState(null)
    const [galleryData, setGalleryData] = useState(null)
    const [galleryRefresh, setGalleryRefresh] = useState(false)
    const [open, setOpen] = useState(false)
    const [pictureId, setPictureId] = useState(2)
    const [pic_1, setPic1] = useState("")
    const [pic_2, setPic2] = useState("")
    const [deleteItemId, setDeleteItemId] = useState(null)

    //Admin panel values
    const [fileBefore, setFileBefore] = useState("")
    const [fileBeforeDB, setFileBeforeDB] = useState(null)
    const [fileAfter, setFileAfter] = useState("")
    const [fileAfterDB, setFileAfterDB] = useState(null)
    const [toggle, setToggle] = useState(true);
    const [fileLocationDB, setfileLocationDB] = useState({ pic_1: "", pic_2: "" });
    const [uploading, setUploading] = useState(false);


    async function getGalleryInfo(user) {
        try {
            const { data, error } = await supabase
                .from("Mnk_db")
                .select("*")
            if (error) throw error;
            if (data != null) {
                setWorkingData(await getPhotoUrls(data))
            }
        } catch (error) {
            alert(error.message);
        }
    }


    async function getPhotoUrls(dataFull) {
        let myArray = []
        await Promise.all(dataFull.map(async (photo) => {
            const { data, error } = await supabase
                .storage
                .from('photos')
                .createSignedUrls([`${photo.pic_1}`, `${photo.pic_2}`], 120 * 120)

            if (error) {
                console.log("Error getting URLS")
            }
            let myObject = { id: photo.id, pic_1: data[0].signedUrl, pic_2: data[1].signedUrl }
            myArray.push(myObject)
        }))
        myArray.sort((a, b) => b.id - a.id)
        return myArray
    }


    async function getIdDBValue(id) {
        try {
            const { data, error } = await supabase
                .from("Mnk_db")
                .select("*")
                .eq("id", id);
            if (error) throw error;
            if (data != null) {
                return data
            }
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteIdDBValue(id) {
        try {
            const { data, error } = await supabase
                .from("Mnk_db")
                .delete()
                .eq("id", id);
            if (error) throw error;
            if (data != null) {
                return data
            }
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteIdGalleryPhotos(items) {
        try {
            const { error, data } = await supabase
                .storage
                .from('photos')
                .remove([items[0].pic_1, items[0].pic_2])
            if (error) throw error
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteGalleryItem(id) {
        deleteIdGalleryPhotos(await getIdDBValue(id))
        await deleteIdDBValue(id)

    }

    //Upload
    async function createDBObject() {
        try {
            const { data, error } = await supabase
                .from("Mnk_db")
                .insert({
                    pic_1: fileLocationDB.pic_1,
                    pic_2: fileLocationDB.pic_2
                })


            if (error) throw error

        }
        catch (error) {
            alert(error.message)
        }
    }



    async function handleFileUpload(file, picBF) {
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                throw new Error("User not authenticated for photo upload")
            }

            const filePath = `user_uploads/${fileName}`
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

            if (error) {
                throw error
            }

        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        if (fileBefore.trim().length > 2 && fileAfter.trim().length > 2) {
            async function tableUploader() {
                await createDBObject()
                setUploading(false)
                setGalleryRefresh(!galleryRefresh)

            }
            tableUploader()
        }
    }, [fileLocationDB.pic_2])

    useEffect(() => {
        if (fileBefore.trim().length > 2 && fileAfter.trim().length > 2) {
            async function uploader() {
                setUploading(true)
                await handleFileUpload(fileBeforeDB, true)
                await handleFileUpload(fileAfterDB, false)
            }
            uploader()
        }
    }, [toggle])


    useEffect(() => {
        setGalleryData(workingData)
    }, [workingData])

    useEffect(() => {
        async function loader() {
            const { data: { user } } = await supabase.auth.getUser();
            await getGalleryInfo(user)
        }
        loader()
    }, [])



    return (
        <AppContext.Provider value=
            {{
                open,
                setOpen,
                pictureId,
                setPictureId,
                galleryData,
                setGalleryData,
                galleryRefresh,
                setGalleryRefresh,
                pic_1,
                pic_2,
                setPic1,
                setPic2,
                deleteGalleryItem,
                setDeleteItemId,
                fileBefore, setFileBefore,
                fileBeforeDB, setFileBeforeDB,
                fileAfter, setFileAfter,
                fileAfterDB, setFileAfterDB,
                toggle, setToggle,
                fileLocationDB, setfileLocationDB,
                uploading, setUploading
            }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}