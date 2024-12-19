
import React, { useState } from 'react'
import { useAppContext } from '../context'

const Modal = () => {

    const { open, setOpen, galleryData, pic_1, pic_2 } = useAppContext()

    const onClick = () => {
        setOpen(false)
    }

    if (!open) {
        return null
    }

    if (!galleryData) {
        return <div>Modal u izradi</div>
    }

    return (
        <>
            {!galleryData ?
                null :
                <div className='visible'>
                    <div className={"bg-black  shadow p-6 transition-all scale-100 opacity-50 fixed top-0  w-full h-full "}>
                    </div>
                    <div className='fixed top-0 w-full h-full flex flex-col justify-center items-center content-center gap-10' >
                        <div className=' w-5/6 h-5/6 flex gap-10 justify-center items-center'>
                            <div className='h-full w-2/5 rounded-md'>
                                <img src={(pic_1)} alt="" className='h-full w-full object-center rounded-md' />
                            </div>
                            <div className='h-full w-2/5 rounded-md'>
                                <img src={pic_2} alt="" className='h-full w-full object-center rounded-md' />
                            </div>
                        </div>
                        <button onClick={onClick} className='p-2 rounded-md bg-orange-main text-white'>Zatvori</button>
                    </div>
                </div>}
        </>
    )

}

export default Modal