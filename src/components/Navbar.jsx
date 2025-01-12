import React from 'react'
import logo from '../assets/BluEnt_logo.svg'
import profile from '../assets/Avatar.svg'

const Navbar = () => {
    return (
        <>
            <div className=' flex justify-between ps-10 pt-2 pb-4 md:pt-4 md:pb-6 '>
                <div className='content-center	'>
                    <img src={logo} alt="" className='w-20 md:w-full' />
                </div>
                <div className='flex justify-around gap-4 md:gap-0 pe-5 md:w-1/2'>
                    {/* Search Bar */}
                    <div className="relative  w-20 md:w-auto">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search"
                            // value={searchTerm}
                            // onChange={e => setSearchTerm(e.target.value)}
                            id="default-search" className=" focus:outline-none block w-full md:p-3 ps-10 md:ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    </div>
                    <div className='flex items-center gap-2 '>
                        <button class="inline-block relative">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <p className="hidden sm:block md:block text-sm">Sandeep kumar</p>

                        <img src={profile} class="w-8 h-8 rounded-full border-gray-400 ring-2 ring-gray-300 dark:ring-gray-500" alt="Rounded avatar" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='font-poppins px-10 py-4'>
                <p className='text-black font-semibold text-lg'>
                    Hi, Sandeep Kumar
                </p>
            </div>
        </>
    )
}

export default Navbar