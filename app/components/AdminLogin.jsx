import React from 'react'
import { login } from '../admin/actions';

const AdminLogin = () => {

    return (
        <main className='p-8 h-screen flex flex-col items-center content-center justify-center '>
            <div className=' w-100'>
                <h1 className=' text-orange-main text-lg lg:text-xl mb-8'>Pozdrav Robi!</h1>
                <div className='self-start'>
                    <form className='w-full flex flex-col gap-4'>
                        <p></p>
                        <div className='bg-gray-secondary p-4 text-orange-main '>
                            <input id="email" name='email' type="email" placeholder='Login_Name' className='w-full bg-inherit text-inherit placeholder-inherit focus:outline-none cursor-pointer'

                                required />
                        </div>
                        <div className='bg-gray-secondary p-4 text-orange-main mb-8'>
                            <input id="password" name="password" type="password" placeholder='Login_Password' className='w-full bg-inherit text-inherit placeholder-inherit focus:outline-none cursor-pointer'

                                required />
                        </div>
                        <button formAction={login} className='bg-orange-main text-white px-5 py-2 self-start hover:bg-orange-secondary mt-6 xl:mt-0'>Spoji se</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AdminLogin