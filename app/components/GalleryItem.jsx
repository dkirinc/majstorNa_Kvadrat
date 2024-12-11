
import React from 'react'
import { FaCircleXmark } from 'react-icons/fa6'

const GalleryItem = ({ item, open, photoId, admin, deleteGalleryItem }) => {


    const onClick = () => {
        console.log("This is " + open)
        console.log(item.id)

        photoId(item.id)
        console.log(photoId)

        open(true)
        console.log(item)


    }


    const deleteItem = (id) => {
        if (confirm('Dali ste sigurni da želite pobrisati ovu sliku iz galerije?')) {
            deleteGalleryItem(id)
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }


    return (
        <div className=''>
            <div onClick={!admin ? (() => onClick()) : null} className={'relative w-[221px]  xl:w-[420px] m-1  flex ease-in-out duration-300 ' + (!admin ? ' hover:scale-95' : '')}>
                <div className='flex  my-1  rounded-lg '>
                    <img src={item.pic_1} alt="" className='w-[110px] xl:w-[210px] h-[190px] xl:h-[380px] object-fill  rounded-l-md' />
                    <div className='w-[1px] bg-orange-main opacity-80'></div>
                    <img src={item.pic_2} alt="" className='w-[110px] xl:w-[210px] h-full object-fill rounded-r-md' />
                    {admin ? (<FaCircleXmark onClick={() => deleteItem(item.id)} className={"absolute top-0 -left-1  w-10 h-10 text-red-400 bg-white rounded-full scale-105 hover:scale-110"} />) : null}
                </div>
            </div>

        </div>
    )
}

export default GalleryItem