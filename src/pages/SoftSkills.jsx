import React from 'react'
import Navbar from '../components/Navbar'
import { ReactComponent as Home } from "../assets/home_icon.svg";
import { IoIosInformationCircleOutline } from "react-icons/io";
const SoftSkills = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="heading py-8 px-12 flex items-center flex-wrap space-x-4">
  <Home size={40} />
  <div className="space-y-2">
    <p className="text-xl font-bold text-[#05004E]">
      Rating System – Team member
    </p>
    <p className="text-sm sm:text-base text-gray-500">
      Business result for the quarter Apr 2025 – Jun 2026
    </p>
  </div>

  
</div>
{/* progress bar */}
<div className="w-full px-12 py-6">
        <div className="flex items-center space-x-4">
          {['Step-1', 'Step-2', 'Step-3', 'Step-4', 'Step-5'].map((step, index) => (
            <div key={index} className={`flex items-center space-x-2 ${index < 4 ? 'text-green-600' : 'text-gray-500'}`}>
              <div className={`w-6 h-6 rounded-full ${index < 4 ? 'bg-green-600' : 'bg-gray-300'}`}></div>
              <span>{step}</span>
            </div>
          ))}
          <span className="ml-4 text-gray-600">Submit</span>
        </div>
      </div>


      {/* Table */}

      <div className="py-4 mx-10">
                    <div className="overflow-x-auto ">
                        <table className="w-full text-left">
                            <thead className=''>
                                <tr className=" text-left border-b border-[#E0E4E9] py-3 px-4 gradient text-white">
                                    <th className="border-[#D9D9D9] border border-collapse text-lg py-3 px-4">Event</th>
                                    <th colspan="5" className="border-[#D9D9D9] border border-collapse text-lg py-3 px-4 text-center col-span-4">Ratings</th>
                                </tr>
                                <tr className="text-left border border-[#E0E4E9] py-3 px-4 text-black bg-[#EBEFFF] ">
                                    <th className=" text-lg pt-6 pb-6 px-4  flex gap-10 justify-between items-center ">
                                        <div className="relative  w-28">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input type="search"
                                                // value={searchTerm}
                                                // onChange={e => setSearchTerm(e.target.value)}
                                                id="default-search" className=" focus:outline-none block w-full py-1 ps-9 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                        </div>
                                    </th>
                                    <th className=" text-lg py-3 px-4 bg-[#D2DCFF] border-[#D9D9D9] border border-collapse text-center">Strengths</th>
                                    <th className=" text-lg py-3 px-4 bg-[#BECDFD] border-[#D9D9D9] border border-collapse text-center">Needs Improvement</th>
                   
                                </tr>
                            </thead>
                            <tbody className="text-[#444A6D] text-lg">
                                <tr className="border border-[#E0E4E9] py-3 px-4">
                                    <td className=" py- px-4 flex justify-between items-center	w-full  ">Technical Tools <span><IoIosInformationCircleOutline /></span></td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4 w-96">
                                       
                                    </td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4 w-">
                                     
                                    </td>
                                  
                                </tr>

                                 <tr className="border border-[#E0E4E9] py-3 px-4">
                                    <td className=" py-3 px-4 flex justify-between items-center	w-full ">Technical Tools <span><IoIosInformationCircleOutline /></span></td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4 w-96">
                                       
                                    </td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4 w-">
                                        
                                    </td>
                                  
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
      
          

          
        </>
        
    )
}

export default SoftSkills