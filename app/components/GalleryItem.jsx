
import React from 'react'

const GalleryItem = ({ item }) => {

    return (
        <div className=''>
            <div className='w-[221px]  xl:w-[420px] m-1  flex hover:scale-95 ease-in-out duration-300'>
                <div className='flex  my-1  rounded-lg '>
                    <img src={item.pic_1} alt="" className='w-[110px] xl:w-[210px] h-[190px] xl:h-[380px] object-fill  rounded-l-md' />
                    <div className='w-[1px] bg-orange-main opacity-80'></div>
                    <img src={item.pic_2} alt="" className='w-[110px] xl:w-[210px] h-full object-fill rounded-r-md' />
                </div>
            </div>

        </div>
    )
}

export default GalleryItem