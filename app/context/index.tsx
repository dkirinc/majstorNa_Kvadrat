"use client"
import { v4 as uuidv4 } from 'uuid'
import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';


const AppContext = createContext<any>(undefined)

export function AppWrapper({ children }: {
    children: React.ReactNode
}) {

    const [galleryData, setGalleryData] = useState(null)
    const [open, setOpen] = useState(false)
    const [pictureId, setPictureId] = useState(2)
    const [pic_1, setPic1] = useState("")
    const [pic_2, setPic2] = useState("")

    async function getStaticProps() {
        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
        )

        const { data } = await supabaseAdmin
            .from('majstornakvadrat_gallery')
            .select('*')
            .order('id');

        return {
            props: {
                images: data
            },
        }

    }

    type Image = {
        id: number,
        href: string,
        imageSrc: string
    }

    const fetchGallery = async () => {
        const response = await fetch(`http://localhost:5000/gallery?_sort=id&_order=desc`)
        const data = await response.json()
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
        fetchGallery()
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