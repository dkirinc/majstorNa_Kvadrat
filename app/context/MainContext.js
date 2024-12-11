import { createContext, useState } from "react";

const MainContext = createContext()

export const MainProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState({
        photoId: "Ovo je isss konteksta"
    })

    function modalChange(text) {
        setOpenModal(text)
    }

    return <MainContext.Provider
        value={{
            openModal,
            modalChange
        }}>

        {children}
    </MainContext.Provider>
}

export default MainContext