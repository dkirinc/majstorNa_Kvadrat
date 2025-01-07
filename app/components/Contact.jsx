'use client';
import React from 'react'
import { useState, forwardRef } from 'react';
import Swal from 'sweetalert2'


const Contact = forwardRef((props, ref) => {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0b8517f0-1d80-421f-b387-b4c4276e95da");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: 'Zahtjev poslan!',
                text: 'Vaš upit proslijeđen je majstoru na kvadrat te će Vam se on prvom prilikom javiti.',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#EFBC5D'
            })
        } else {
            Swal.fire({
                title: 'Zahtjev nije poslan!',
                text: 'Vaš upit nismo uspjeli proslijediti majstoru na kvadrat. Ukoliko se ovaj problem nastavi, kontaktirajte nas putem telefona.',
                icon: 'error',
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButtonColor: '#EFBC5D'
                }
            })
            setResult(data.message);
        }
    };

    return (
        <div ref={ref} id='contact' className='w-[320px] md:w-[420px] lg:w-[900px] xl:w-[1200px]  self-center bg-white p-16 flex flex-col xl:flex-row gap-10  xl:gap-20 mb-60'>
            <div >
                <h2 className='font-raleway'>Kontakt</h2>
                <p className='text-black mt-5'>Robert Barbir</p>
                <p className='text-black'>+385 95 9074 164</p>
            </div>
            <div className='h-[1px] sm:w-[1px] sm:h-max  bg-orange-main h-50'></div>
            <div className='w-full xl:w-4/6 xl:pr-16 xl:pt-20'>
                <form onSubmit={onSubmit} className='w-full flex flex-col gap-4'>
                    <div className='bg-gray-secondary p-4 text-orange-main '>
                        <input type="text" placeholder='Upišite ime' className='w-full bg-inherit text-inherit placeholder-inherit focus:outline-none cursor-pointer' name='name' required />
                    </div>
                    <div className='bg-gray-secondary p-4 text-orange-main'>
                        <input type="text" placeholder='Upišite mail' className='w-full bg-inherit text-inherit placeholder-inherit focus:outline-none cursor-pointer' name='email' required />
                    </div>
                    <div className='bg-gray-secondary p-4 h-56 lg:h-36 text-orange-main'>
                        <textarea name='message' className='w-full h-full bg-inherit text-inherit placeholder-inherit focus:outline-none cursor-pointer' id="" placeholder='Tekst poruke (navedite gdje se nalazite i problem koji treba riješiti)' required></textarea>
                    </div>
                    <button type='submit' className='bg-orange-main text-white px-5 py-2 self-start hover:bg-orange-secondary mt-6 xl:mt-0'>Pošaljite upit</button>
                </form>
            </div>
        </div>
    )
})

Contact.displayName = "Contact"

export default Contact