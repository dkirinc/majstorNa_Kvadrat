"use client"
import { v4 as uuidv4 } from 'uuid'
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";



const AppContext = createContext<any>(undefined)

export function AppWrapper({ children }: {
    children: React.ReactNode
}) {

    const [workingData, setWorkingData] = useState(null)
    const [galleryData, setGalleryData] = useState(null)
    const [open, setOpen] = useState(false)
    const [pictureId, setPictureId] = useState(2)
    const [pic_1, setPic1] = useState("")
    const [pic_2, setPic2] = useState("")

    async function getGalleryInfo(user) {
        try {
            const { data, error } = await supabase
                .from("Mnk_db")
                .select("*")
            if (error) throw error;
            if (data != null) {
                // setProducts(data); // [product1,product2,product3]
                console.log("Ide sa servera")
                console.log(data)
                setWorkingData(await getPhotoUrls(data))
            }
        } catch (error) {
            alert(error.message);
        }
    }

    /* const addDataElement = (newDataElement) => {
        setWorkingData(workingDataArray => [...workingDataArray, newDataElement])
    } */

    async function getPhotoUrls(dataFull) {
        let myArray = []
        await Promise.all(dataFull.map(async (photo) => {
            console.log(photo)
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


    const fetchGallery = async () => {
        const response = await fetch(`http://localhost:5000/gallery?_sort=id&_order=desc`)
        const data = await response.json()
        console.log(data)
        setGalleryData(data)
    }

    const addGalleryItem = (newGalleryItem) => {
        newGalleryItem.id = uuidv4()
        setGalleryData([newGalleryItem, ...galleryData])
    }

    const deleteGalleryItem = (id) => {
        setGalleryData(galleryData.filter((item) => item.id !== id))
    }

    useEffect(() => {
        console.log(workingData)
        setGalleryData(workingData)
    }, [workingData])

    useEffect(() => {
        async function loader() {
            const { data: { user } } = await supabase.auth.getUser();
            await getGalleryInfo(user)
        }
        loader()
        //fetchGallery()
        console.log(galleryData)
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
                addGalleryItem,
                deleteGalleryItem,
                pic_1,
                pic_2,
                setPic1,
                setPic2
            }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}