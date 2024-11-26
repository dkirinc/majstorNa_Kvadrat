import Navbar from './Navbar'
import { useRef, forwardRef } from 'react'

const Hero = forwardRef((props, ref) => {

    return (
        <div ref={ref} id='hero'>
            <div className='w-full h-full relative flex flex-col justify-center items-center'>
                <div className='w-full h-[450px] lg:[620px] xl:h-[920px]'>
                    <img src="/hero.png" className='w-full h-full object-cover' />
                </div>
                <div className='absolute top-0 w-full h-full bg-black opacity-40 '></div>
                <div className="absolute top-0 h-full w-full  flex flex-col justify-center items-center gap-[25px]">
                    <h1 className='font-raleway font-normal white text-lg text-center lg:text-xl'>Majstor Na Kvadrat</h1>
                    <div className="w-[320px] lg:w-[550px] xl:w-[782px] lg:px-10 text-center ">
                        <p className='leading-[33px]'>Brzi i manji popravci, manji vodovodni radovi, montaža namještaja, električarski radovi, izmjena utičnica, montaža sanitarne opreme, zamjena brava, zamjena slavina, zamjena ventila itd.</p>
                    </div>

                </div>
            </div>

            {/*  <Navbar /> */}


        </div >
    )
})

export default Hero