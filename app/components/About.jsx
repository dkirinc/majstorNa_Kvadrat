import React, { forwardRef } from 'react'
import { useRef } from 'react';

const About = forwardRef((props, ref) => {



    return (
        <div ref={ref} id='about' className='w-full  bg-white flex flex-col '>
            <div className='xl:w-[1200px] py-32 self-center flex flex-col gap-10 justify-between items-center '>
                <h2 className='font-raleway mb-20'>O nama</h2>
                <div className=' flex flex-col xl:flex-row gap-10 flex-wrap  content-center items-center'>
                    <div className='flex flex-col gap-5 w-[320px] sm:w-[420px] md:w-[520px]'>
                        <p className='text-black text-justify'>
                            Obrt Majstor na kvadrat uspješno posluje na našem tržištu od 2016. godine, specijalizirajući se za brze i učinkovite popravke u kućanstvima. Naša primarna djelatnost obuhvaća manje vodoinstalaterske i električarske radove, poput zamjene utičnica, slavina, ventila i slično. Također nudimo montažu sanitarne opreme te zamjenu brava, uz visoku razinu preciznosti i pouzdanosti.
                        </p>
                        <p className='text-black text-justify'>
                            Svaki povjereni posao izvodimo brzo, točno i unutar dogovorenih rokova. Naš je cilj kontinuirano unapređivati učinkovitost i osigurati zadovoljstvo svih naših klijenata, partnera i zaposlenika. Usmjereni smo na ispunjavanje želja i očekivanja korisnika, uvijek otvoreni za savjet, dogovor i suradnju.
                            Naše sjedište je u Rijeci, a svoje usluge pružamo i u okolici. Ako trebate pouzdane majstorske usluge, obratite nam se s povjerenjem i uvjerite se u našu kvalitetu.
                        </p>
                    </div>

                    <div className='w-[320px] sm:w-[420px] md:w-[520px] h-full border rounded-lg'>
                        <img src="/pgz.png" className='w-full h-full  object-cover border rounded-lg' alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
});

export default About