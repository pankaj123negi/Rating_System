import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import profile from '../assets/Avatar.svg'
import tick from '../assets/tick.svg'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import { ReactComponent as Home } from "../assets/home_icon.svg";

const userData = {
    GM: {
        eventData: [
            {
                event: "Technical Tools",
                expert: [
                    "C# .NET",
                    "MS SQL",
                    ".NET Core",
                    "Entity Framework 8"
                ],
                intermediate: [
                    "Python",
                    "Pandas",
                    "NumPy",
                    "Seaborn",
                    "AWS Glue",
                    "AWS Redshift",
                    "Supervised ML"
                ],
                beginner: [
                    "Snowflake",
                    "Unsupervised ML"
                ],
                improvementGoal: [
                    "Supervised ML",
                    "Unsupervised ML",
                    "Snowflake",
                    "Soft Skills & Technical Tools"
                ],
                comment: "We need expertise in this area for FY 24-25"
            },
            {
                event: "Functional",
                expert: [
                    "Coding / Scripting",
                    "Quality check | Bug fixing | Testing | Troubleshooting",
                    "Documentation",
                    "Database Design & SQL",
                    "Application / Solution Architecture"
                ],
                intermediate: [
                    "System & Cloud Administration & Maintenance",
                    "Security & Firewall"
                ],
                beginner: [],
                improvementGoal: [],
                comment: ""
            }
        ]
    },
    RS: {
        eventData: [
            {
                event: "Technical Tools",
                expert: [
                    "Java",
                    "Spring",
                    "AWS",
                    "Kubernetes"
                ],
                intermediate: [
                    "Python",
                    "Docker",
                    "Terraform"
                ],
                beginner: [
                    "Node.js",
                    "React"
                ],
                improvementGoal: [
                    "Kubernetes",
                    "Cloud Architecture"
                ],
                comment: "Focusing on Cloud Technologies"
            },
            {
                event: "Functional",
                expert: [
                    "Coding / Scripting",
                    "Database Design & SQL"
                ],
                intermediate: [
                    "Cloud Infrastructure Management",
                    "Security Auditing"
                ],
                beginner: ["Docker", "React"],
                improvementGoal: ["AWS", "Kubernetes", "CI/CD"]
            }
        ]
    },
    VS: {
        eventData: [
            {
                event: "Technical Tools",
                expert: [
                    "Java",
                    "Spring",
                    "AWS",
                    "Kubernetes"
                ],
                intermediate: [
                    "Python",
                    "Docker",
                    "Terraform"
                ],
                beginner: [
                    "Node.js",
                    "React"
                ],
                improvementGoal: [
                    "Kubernetes",
                    "Cloud Architecture"
                ],
                comment: "Focusing on Cloud Technologies"
            },
            {
                event: "Functional",
                expert: [
                    "Coding / Scripting",
                    "Quality Assurance"
                ],
                intermediate: [
                    "UI/UX Design",
                    "Database Optimization"
                ],
                beginner: ["SQL", "Python"],
                improvementGoal: ["Project Management"]
            }
        ]
    },
    SK: {
        eventData: [
            {
                event: "Technical Tools",
                expert: [
                    "Java",
                    "Spring",
                    "AWS",
                    "Kubernetes"
                ],
                intermediate: [
                    "Python",
                    "Docker",
                    "Terraform"
                ],
                beginner: [
                    "Node.js",
                    "React"
                ],
                improvementGoal: [
                    "Kubernetes",
                    "Cloud Architecture"
                ],
                comment: "Focusing on Cloud Technologies"
            },
            {
                event: "Functional",
                expert: [
                    "Software Development",
                    "API Design"
                ],
                intermediate: [
                    "Cloud Migration",
                    "Microservices"
                ],
                beginner: ["JavaScript", "CSS"],
                improvementGoal: ["DevOps", "Cloud Security"]
            }
        ]
    },
    KS: {
        eventData: [
            {
                event: "Technical Tools",
                expert: [
                    "Java",
                    "Spring",
                    "AWS",
                    "Kubernetes"
                ],
                intermediate: [
                    "Python",
                    "Docker",
                    "Terraform"
                ],
                beginner: [
                    "Node.js",
                    "React"
                ],
                improvementGoal: [
                    "Kubernetes",
                    "Cloud Architecture"
                ],
                comment: "Focusing on Cloud Technologies"
            },
            {
                event: "Functional",
                expert: [
                    "Automation Testing",
                    "Data Analysis"
                ],
                intermediate: [
                    "Project Management",
                    "Business Analysis"
                ],
                beginner: ["SQL", "Tableau"],
                improvementGoal: ["Advanced Data Science", "Leadership Skills"]
            }
        ]
    },
};


const TeamTarget = () => {
    const [selectedUser, setSelectedUser] = useState("GM");

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const user = userData[selectedUser];

    return (
        <div>
            <Navbar />
            <div className="heading py-8 px-12 flex items-center flex-wrap space-x-4">
            <Link to='/dashboard'>
            <Home size={40} /></Link>
  {/* Add a vertical line separator */}
  <div className="w-0.5 h-10 bg-gray-300"></div>
  <div className="space-y-2">
    <p className="text-xl font-bold text-[#05004E]">
      Rating System – Team member Capability assessment
    </p>
    <p className="text-sm sm:text-base text-gray-500">
    Tools & Functional-Define goal chart- FY 2025 – 2026
    </p>
  </div>
</div>
            <div className="bg-white drop-shadow my-4 rounded-xl mx-10">
                <div className="sm:flex-none md:flex justify-between py-2 px-4">
                    <div className="flex xl:gap-10 mt-4">
                        {["GM", "RS", "VS", "SK", "KS"].map((user) => (
                            <button key={user} className="justify-items-center" onClick={() => handleUserClick(user)}>
                                <img src={profile} className={`${selectedUser === user ? 'green-gradient' : 'border-gradient'} relative w-14 h-14 rounded-full p-0.5`} alt="User Avatar" />
                                <img src={tick} alt="" className={`${selectedUser === user ? 'block' : 'hidden'} absolute top-5 ms-10`} />
                                < p > {user}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-4 mx-10">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className=''>
                            <tr className=" text-left border-b border-[#E0E4E9] py-3 px-4 green-gradient text-white">
                                <th className="border-[#D9D9D9] border border-collapse text-lg py-3 px-4">Event</th>
                                <th colspan="5" className="border-[#D9D9D9] border border-collapse text-lg py-3 px-4 text-center col-span-4">Ratings</th>
                            </tr>
                            <tr className="text-left border border-[#E0E4E9] py-3 px-4 text-black bg-[#EBEFFF] ">
                                <th className=" text-lg pt-6 px-4  flex gap-10 justify-between items-center ">Criteria
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
                                <th className=" text-lg py-3 px-4 bg-[#D2DCFF] border-[#D9D9D9] border border-collapse">Expert</th>
                                <th className=" text-lg py-3 px-4 bg-[#BECDFD] border-[#D9D9D9] border border-collapse">Intermediate</th>
                                <th className=" text-lg py-3 px-4 text-center bg-[#D2DCFF] border-[#D9D9D9] border border-collapse">Beginner</th>
                                <th className=" text-lg py-3 px-4 text-center bg-[#BECDFD] border-[#D9D9D9] border border-collapse">Improvement Goal
                                    (2025-2026)</th>
                                <th className=" text-lg py-3 px-4 text-center bg-[#D2DCFF] border-[#D9D9D9] border border-collapse">Comment</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#444A6D] text-lg">
                            {user?.eventData?.map((event, index) => (
                                <tr key={index} className="border border-[#E0E4E9] py-3 px-4">
                                    <td className="py-3 px-4 flex justify-between items-center">{event.event} <IoIosInformationCircleOutline /></td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4">
                                        {event.expert?.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4">
                                        {event.intermediate?.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4">
                                        {event.beginner?.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4">
                                        {event.improvementGoal?.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </td>
                                    <td className="border-[#D9D9D9] border border-collapse py-3 px-4">{event.comment}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="m-4 flex flex-row-reverse gap-6 pr-10">
          <button
            className=" border text-base py-1 px-2 rounded-full"
          
            
          >
         Submit & Create Goal
          </button>
          <button
            className="min-w-[120px] border text-base py-1 px-2 rounded-full border-gradient text-white font-medium hover:bg-indigo-700 transition-colors"
            
          >
           Save
          </button>
         
        </div>
        </div >
    );
};

export default TeamTarget;
