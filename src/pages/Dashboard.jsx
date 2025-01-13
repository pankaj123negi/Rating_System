import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import meter from '../assets/meter.svg'
import expo from '../assets/export.svg'
import logo from '../assets/Avatar.svg'
import Chart from '../components/Chart'
import "react-datepicker/dist/react-datepicker.css";
import '../App.css'
import { Link } from 'react-router-dom'
import { Datepicker } from "flowbite-react";



const Dashboard = () => {

    return (
        <>
            <Navbar />
            <div className=" md:flex px-5 xl:px-10">
                <div className='md:w-2/3 rounded'>
                    {/* METER */}
                    <div className="bg-white drop-shadow my-4 rounded-xl">
                        <div className="sm:flex-none md:flex justify-between py-2 px-4">
                            <div className="flex xl:gap-10 mt-4">
                                <div>
                                    <p className='text-[#05004E] md:text-xl font-bold'>Last Quarter Team Performance</p>
                                    <p className='text-[#05004E] my-2 text-sm md:text-base'>Team Assessment</p>
                                </div>
                                <img src={meter} alt="" className='w-[4rem]' />
                            </div>
                            <div className='content-center'>
                                <button className="flex items-center p-2 border rounded-xl text-sm font-semibold text-[#0F3659]">
                                    <img src={expo} alt="export" className="mr-2" />Export
                                </button>
                            </div>
                        </div>
                        {/* SLIDERS */}
                        <div className='flex gap-4 px-4 py-9 overflow-x-hidden w-[90%]'>
                            <div className="gradient p-4 rounded-2xl w-48">
                                <img src={logo} alt="" className='w-10' />
                                <p className='text-lg md:text-2xl text-white'>Pankaj </p>
                                <p className='text-lg md:text-xl text-white'>mudgil </p>
                                <p className='text-[#A7CCFF] text-sm md:text-base mt-1'>Need Improvement</p>
                                <p className='text-white text-xs'>+4% increase from last week</p>
                            </div>
                            <div className="gradient p-4 rounded-2xl w-48">
                                <img src={logo} alt="" className='w-10' />
                                <p className='text-lg md:text-2xl text-white'>Gaurav </p>
                                <p className='text-lg md:text-xl text-white'>Maheshwari </p>
                                <p className='text-[#A7CCFF] text-sm md:text-base mt-1'>Need Improvement</p>
                                <p className='text-white text-xs'>+8% increase from last week</p>
                            </div>
                            <div className="gradient p-4 rounded-2xl w-48">
                                <img src={logo} alt="" className='w-10' />
                                <p className='text-lg md:text-2xl text-white'>Rajmohan </p>
                                <p className='text-lg md:text-xl text-white'>Singh </p>
                                <p className='text-[#A7CCFF] text-sm md:text-base mt-1'>Need Improvement</p>
                                <p className='text-white text-xs'>-7% decreased from last week</p>
                            </div>
                            <div className="gradient p-4 rounded-2xl w-48">
                                <img src={logo} alt="" className='w-10' />
                                <p className='text-lg md:text-2xl text-white'>Manish </p>
                                <p className='text-lg md:text-xl text-white'>kumar </p>
                                <p className='text-[#A7CCFF] text-sm md:text-base mt-1'>Need Improvement</p>
                                <p className='text-white text-xs'>+5% increase from last week</p>
                            </div>
                            {/* <div className="gradient p-4 rounded-2xl w-60">
                                <img src={logo} alt="" className='w-10' />
                                <p className='text-lg md:text-2xl text-white'>Manish </p>
                                <p className='text-xl text-white'>kumar </p>
                                <p className='text-[#A7CCFF] text-base mt-1'>Need Improvement</p>
                                <p className='text-white text-xs'>+5% increase from last week</p>
                            </div> */}
                        </div>
                    </div>
                    {/* tABLE */}
                    <div className="bg-white drop-shadow my-4 rounded-xl">
                        <div>
                            <p className='text-[#05004E] md:text-3xl p-4'>Technical Strength</p>
                        </div>
                        <div className="py-4">
                            <div className="overflow-x-auto">
                                <table className="w-full ">
                                    <thead>
                                        <tr className="text-left border-b border-[#E0E4E9] py-3 px-4">
                                            <th className="text-[#96A5B8] text-lg py-3 px-4">#</th>
                                            <th className="text-[#96A5B8] text-lg py-3 px-4">Name</th>
                                            <th className="text-[#96A5B8] text-lg py-3 px-4">Progress</th>
                                            <th className="text-[#96A5B8] text-lg py-3 px-4 text-center">Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#444A6D] text-lg">
                                        <tr className="border-b border-[#E0E4E9] py-3 px-4">
                                            <td className="py-3 px-4">01</td>
                                            <td className="py-3 px-4">Design</td>
                                            <td className="py-3 px-4">
                                                <div className="ms-3 my-4 w-auto bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-3">
                                                    <div
                                                        style={{ width: `45%` }}
                                                        className="green-gradient h-1.5 rounded-full w-2/5"
                                                    ></div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <span className="green-gradient rounded-3xl py-2 px-4 text-white text-center">45%</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-[#E0E4E9] py-3 px-4">
                                            <td className="py-3 px-4">02</td>
                                            <td className="py-3 px-4">Development</td>
                                            <td className="py-3 px-4">
                                                <div className="ms-3 my-4 w-auto bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-3">
                                                    <div
                                                        style={{ width: `60%` }}
                                                        className="green-gradient h-1.5 rounded-full w-2/5"
                                                    ></div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <span className="green-gradient rounded-3xl py-2 px-4 text-white text-center">60%</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-[#E0E4E9] py-3 px-4">
                                            <td className="py-3 px-4">03</td>
                                            <td className="py-3 px-4">Testing</td>
                                            <td className="py-3 px-4">
                                                <div className="ms-3 my-4 w-auto bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-3">
                                                    <div
                                                        style={{ width: `25%` }}
                                                        className="green-gradient h-1.5 rounded-full w-2/5"
                                                    ></div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <span className="green-gradient rounded-3xl py-2 px-4 text-white text-center">25%</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-[#E0E4E9] py-3 px-4">
                                            <td className="py-3 px-4">04</td>
                                            <td className="py-3 px-4">Javascript</td>
                                            <td className="py-3 px-4">
                                                <div className="ms-3 my-4 w-auto bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-3">
                                                    <div
                                                        style={{ width: `80%` }}
                                                        className="green-gradient h-1.5 rounded-full w-2/5"
                                                    ></div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <span className="green-gradient rounded-3xl py-2 px-4 text-white text-center">80%</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    {/* CHART */}
                    <div className="bg-[#E8FFE3] drop-shadow my-4 rounded-xl">
                        <div>
                            <p className='text-[#05004E] md:text-3xl p-4'>Skill set HeatMap</p>
                        </div>
                        <div className="p-2 md:p-4">

                            <Chart />
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 md:mx-5  rounded'>
                    {/* EVALUATION PERIOD */}
                    <div className="bg-[#F6F6F6] my-4 rounded-lg shadow-xl p-2 md:p-4">
                        <div>
                            <p className='text-[#494949] text-lg font-semibold xl:mx-8'>Evaluation Period</p>
                        </div>
                        <div className='xl:mx-8 my-3'>
                            <Datepicker />
                        </div>
                        <Link to='/bussiness'>
                            <div className='green-gradient rounded-xl xl:flex  py-6 xl:mx-8 my-4 cursor-pointer'>
                                {/* CIRCLE BARS */}
                                <div className="mx-8 justify-self-center">
                                    <div className="relative size-8 md:size-16 mx-0.5">
                                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                className="stroke-current text-white dark:text-blue-500"
                                                strokeWidth="2"
                                                strokeDasharray="100"
                                                // strokeDashoffset={100 - completionPercentage} // Adjust stroke dash offset
                                                strokeDashoffset="70"
                                                strokeLinecap="round"
                                            ></circle>
                                        </svg>

                                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            <span className="text-center text-[9px] md:text-base font-bold text-white dark:text-blue-500">
                                                {/* {Math.round(completionPercentage)}% */} 20%
                                            </span>
                                        </div>
                                        {/* <div className='mt-1 text-center'>
                                        <p className='text-[8px] md:text-xs'>{active.DepartmentName}</p>
                                        <p className='text-[8px] md:text-xs truncate md:max-w-[900px] sm:max-w-[100px]'>{active.TrainingTitle}</p>
                                    </div> */}
                                    </div>

                                </div>
                                <div className='mx-2 xl:text-left text-center'>
                                    <p className='text-white xl:text-2xl font-semibold'>Bussiness Result</p>
                                    <p className='text-neutral-50 text-xs '>Bussiness Result</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/soft_skills'>
                            <div className='green-gradient rounded-xl xl:flex py-6 xl:mx-8 my-4 cursor-pointer'>
                                {/* CIRCLE BARS */}
                                <div className="mx-8 justify-self-center">
                                    <div className="relative size-8 md:size-16 mx-0.5">
                                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                className="stroke-current text-white dark:text-blue-500"
                                                strokeWidth="2"
                                                strokeDasharray="100"
                                                // strokeDashoffset={100 - completionPercentage} // Adjust stroke dash offset
                                                strokeDashoffset="25"
                                                strokeLinecap="round"
                                            ></circle>
                                        </svg>

                                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            <span className="text-center text-[9px] md:text-base font-bold text-white dark:text-blue-500">
                                                {/* {Math.round(completionPercentage)}% */} 75%
                                            </span>
                                        </div>
                                        {/* <div className='mt-1 text-center'>
                                        <p className='text-[8px] md:text-xs'>{active.DepartmentName}</p>
                                        <p className='text-[8px] md:text-xs truncate md:max-w-[900px] sm:max-w-[100px]'>{active.TrainingTitle}</p>
                                    </div> */}
                                    </div>

                                </div>
                                <div className='mx-2 xl:text-left text-center'>
                                    <p className='text-white xl:text-2xl font-semibold'>Soft Skills</p>
                                    <p className='text-white text-xs '>Soft Skills</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/team_target'>
                            <div className='green-gradient rounded-xl xl:flex py-6 xl:mx-8 my-4 cursor-pointer'>
                                {/* CIRCLE BARS */}
                                <div className="mx-8 justify-self-center">
                                    <div className="relative size-8 md:size-16 mx-0.5">
                                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                className="stroke-current text-white dark:text-blue-500"
                                                strokeWidth="2"
                                                strokeDasharray="100"
                                                // strokeDashoffset={100 - completionPercentage} // Adjust stroke dash offset
                                                strokeDashoffset="50"
                                                strokeLinecap="round"
                                            ></circle>
                                        </svg>

                                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            <span className="text-center text-[9px] md:text-base font-bold text-white dark:text-blue-500">
                                                {/* {Math.round(completionPercentage)}% */} 50%
                                            </span>
                                        </div>
                                        {/* <div className='mt-1 text-center'>
                                        <p className='text-[8px] md:text-xs'>{active.DepartmentName}</p>
                                        <p className='text-[8px] md:text-xs truncate md:max-w-[900px] sm:max-w-[100px]'>{active.TrainingTitle}</p>
                                    </div> */}
                                    </div>

                                </div>
                                <div className='mx-2 xl:text-left text-center'>
                                    <p className='text-white xl:text-2xl font-semibold'>Team Target</p>
                                    <p className='text-white text-xs '>Next Quarter</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    {/* GOALS & TARGET */}
                    <div className="bg-[#FAFAFA] shadow-lg my-4 rounded-xl p-4 h-auto">
                        <div className='my-3'>
                            <p className='text-[#494949] text-xl font-semibold xl:mx-8'>Goals & Target</p>
                            <p className='text-[#494949] text-sm xl:mx-8'>Achieved</p>
                        </div>
                        <div className='xl:mx-8'>

                            {/* <div class="relative max-w-sm">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                            </div> */}

                            <Datepicker />

                        </div>
                        <div className="pt-6">
                            <div className=''>
                                <div className="justify-center m-3 xl:m-5 xl:ms-10 border-s-2 ps-4 border-[#4BAE4F] text-xs">
                                    <p className='font-semibold'>Avinash Sharma</p>
                                    <p>Submitted on 23-Nov-2024</p>
                                </div>
                                <div className="justify-center m-3 xl:m-5 xl:ms-10 border-s-2 ps-4 border-[#4BAE4F] text-xs">
                                    <p className='font-semibold'>Vivek Gupta</p>
                                    <p>Submitted on 23-Nov-2024</p>
                                </div>
                                <div className="justify-center m-3 xl:m-5 xl:ms-10 border-s-2 ps-4 border-[#4BAE4F] text-xs">
                                    <p className='font-semibold'>Priyanka Raj</p>
                                    <p>Submitted on 23-Nov-2024</p>
                                </div>
                                <div className="justify-center m-3 xl:m-5 xl:ms-10 border-s-2 ps-4 border-[#4BAE4F] text-xs">
                                    <p className='font-semibold'>Sebastian</p>
                                    <p>Submitted on 23-Nov-2024</p>
                                </div>
                            </div>
                            <p className="justify-center xl:m-5 xl:ms-5 ps-4 text-lg">+
                                {/* <img alt="more" className="justify-center m-5 ms-9 ps-4 text-xs" /> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Dashboard