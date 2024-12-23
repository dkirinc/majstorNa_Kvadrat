import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminData from '../data/AdminData'
import { supabase } from '../utils/supabaseClient'

const AdminLogin = () => {

    const router = useRouter()
    const [adminData, setAdminData] = useState(AdminData)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(adminData)
        router.push('/admin/panel')
        /* const { data, error } = await supabase.auth.signUp({
            email,
            password
        })
        console.log({ data, error }) */

        /* if (email == adminData.admin_email && password == adminData.admin_pass) {
            console.log("Sve je točno")
            router.push('/admin/panel')
        } else {
            console.log("Šifra je kriva, upiši drugu")
            alert("Unijeli ste pogrešnu lozinku, pokušajte ponovno.")
        } */
    };

    return (
        <main className='p-8 h-screen flex flex-col items-center content-center justify-center '>
            <div className=' w-100'>
                <h1 className=' text-orange-main text-lg lg:text-xl mb-8'>Pozdrav Robi!</h1>
                <div className='self-start'>
                    <form onSubmit={onSubmit} className='w-full flex flex-col gap-4'>
                        <p></p>
                        <div className='bg-gray-secondary p-4 text-orange-main '>
                            <input type="email" placeholder='Login_Name' className='w-full bg-inherit text-inherit placeholder-inherit focus:outline-none cursor-pointer' name='name'
                                value={email}
                                onChange={handleUsernameChange}
                                required />
                        </div>
                        <div className='bg-gray-secondary p-4 text-orange-main mb-8'>
                            <input type="password" placeholder='Login_Password' className='w-full bg-inherit text-inherit placeholder-inherit focus:outline-none cursor-pointer' name='email'
                                value={password}
                                onChange={handlePasswordChange}
                                required />
                        </div>
                        <button type='submit' className='bg-orange-main text-white px-5 py-2 self-start hover:bg-orange-secondary mt-6 xl:mt-0'>Spoji se</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AdminLogin