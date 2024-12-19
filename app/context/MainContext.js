"use client";
import { createContext, useState } from "react";


const MainContext = createContext()

export const MainProvider = ({ children }) => {

    const [open, setOpen] = useState(false)

    return (
        <MainContext.Provider
            value={{
                open,
                setOpen
            }}>
            {children}
        </MainContext.Provider>
    )
}

