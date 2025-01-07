import React from 'react'
import { forwardRef } from 'react'

const Services = forwardRef((props, ref) => {

    return (
        <div id='services' className=' bg-gray-main flex flex-col items-center '>
            <div className='xl:w-[1200px] flex flex-col  xl:flex-row  justify-between py-36 self-center gap-36 items-center'>
                <h2 className='w-[164px] font-raleway '>Naše usluge</h2>
                <div ref={ref} className='flex flex-col md:col-span-2 lg:flex-row gap-[120px] lg:gap-[35px]'>
                    <div className='relative w-[200px] h-[184px] bg-white p-5 text-black transition duration-150 ease-in-out hover:scale-110 cursor-default z-1'>
                        <p className='text-black'>Kućanski
                            popravci (zamjena
                            brava, postavljanje
                            laminata, bušenje...)
                        </p>
                        <img src="/pen.svg" alt="" className='absolute -bottom-[75px] left-10' />
                    </div>
                    <div className='relative w-[200px] h-[184px] bg-white p-4 transition duration-150 ease-in-out hover:scale-110 cursor-default'>
                        <p className='text-black'>Montaža namještaja
                            i sanitarne opreme
                        </p>
                        <img src="/ruler.svg" alt="" className='absolute -bottom-[64px] left-20' />
                    </div>
                    <div className='relative w-[200px] h-[184px] bg-white p-4 transition duration-150 ease-in-out hover:scale-110 cursor-default'>
                        <p className='text-black'>Soboslikarski
                            radovi
                        </p>
                        <img src="/brush.svg" alt="" className='absolute -bottom-[72px] left-10' />
                    </div>
                    <div className='relative z-1 w-[200px] h-[184px] bg-white p-4 transition duration-150 ease-in-out hover:scale-110 cursor-default mb-20 xl:mb-0'>
                        <p className='text-black'>Manji električarski
                            radovi
                        </p>
                        <img src="/wrench.svg" alt="" className='absolute -bottom-[64px] left-20' />
                    </div>
                </div>

            </div>
        </div>
    )
})

Services.displayName = "Services"

export default Services