// BussinessResults.jsx
import React, { useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ReactComponent as Home } from "../assets/home_icon.svg";
import { Tooltip } from "react-tooltip";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TeamMemberCard from "../components/TeamMemberCard";

const DropCell = ({ row, col, onDrop, assignedUsers }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "TEAM_MEMBER",
      drop: (item) => onDrop(item, row, col),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    return (
      <td
        ref={drop}
        className={`border p-2 h-20 ${
          isOver ? "bg-blue-50 border-blue-300" : "bg-white"
        }`}
      >
        <div className="flex justify-center items-center h-full w-full">
          {assignedUsers && assignedUsers.length > 0 ? (
            <div className="flex flex-col items-center gap-2 w-full">
              {assignedUsers.map((user, index) => (
                <div key={index} className="w-full flex justify-center">
                  <TeamMemberCard
                    name={user.name}
                    comment={user.comment}
                    project={user.project}
                    isDropped={true}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400"></div>
          )}
        </div>
      </td>
    );
  };

const BussinessResults = () => {
  const ratings = [
    { stars: "5★", description: "Regular Daily/Weekly" },
    { stars: "4★", description: "Missed 1 time a Quarter" },
    { stars: "3★", description: "Missed 2 times a Quarter" },
    { stars: "2★", description: "Missed 3 times a Quarter" },
    { stars: "1★", description: "Missed 3+ times a Quarter" },
  ];

  const eventCategories = [
    "Reports & Schedules",
    "Calls",
    "Emails",
    "Beyond the Call of Duty",
  ];

  const [grid, setGrid] = useState(
    Array(eventCategories.length)
      .fill(null)
      .map(() => Array(ratings.length).fill([]))
  );

  const [searchQuery, setSearchQuery] = useState("");

  const teamMembers = [
    { name: "Sandeep Kumar", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Alpha" },
    { name: "Pankaj Mudgil", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Beta" },
    { name: "Rajmohan Singh", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Gamma" },
    { name: "Gaurav Maheshwari", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Delta" },
    { name: "Mohd. Salman", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Epsilon" },
    { name: "Kirti Sharma", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Zeta" },
    { name: "Manish Kumar", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Eta" },
    { name: "Vishvajit Rao", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Theta" },
    { name: "Sazeed Khan", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", project: "Project Iota" },
  ];

  const handleDrop = (item, row, col) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => row.map((cell) => [...cell]));
      // Remove the user from all cells in the current row
      newGrid[row] = newGrid[row].map((cell) =>
        cell.filter((user) => user.name !== item.name)
      );
      // Add user with all properties to the target cell
      if (!newGrid[row][col].some((user) => user.name === item.name)) {
        newGrid[row][col].push({
          name: item.name,
          comment: item.comment,
          project: item.project
        });
      }
      return newGrid;
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRows = eventCategories.filter((row) =>
    row.toLowerCase().includes(searchQuery)
  );

  const gradientStyle = {
    background: "linear-gradient(109.14deg, #5B4DEE 0%, #2603A4 95.95%)",
  };

  return (
    <>
      <Navbar />
      <DndProvider backend={HTML5Backend}>
   
        <div className="heading py-8 px-12 flex items-center flex-wrap space-x-4">
  <Link to='/dashboard'>
  <Home size={40} /></Link>
  {/* Add a vertical line separator */}
  <div className="w-0.5 h-10 bg-gray-300"></div>
  <div className="space-y-2">
    <p className="text-xl font-bold text-[#05004E]">
      Rating System – Team member
    </p>
    <p className="text-sm sm:text-base text-gray-500">
      Business result for the quarter Apr 2025 – Jun 2026
    </p>
  </div>
</div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="flex-grow pl-8 mr-8 overflow-x-auto ">
              <table className="table-auto w-full border-collapse border ">
                <thead>
                  <tr>
                    <th className="border p-4 text-white" style={gradientStyle}>
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-lg font-semibold">Event</span>
                        <div className="flex items-center justify-center space-x-2">
                          <input
                            type="text"
                            placeholder="Search"
                            className="border text-black rounded-md px-4 py-2 w-32 focus:outline-none text-center"
                            value={searchQuery}
                            onChange={handleSearch}
                          />
                        </div>
                      </div>
                    </th>
                    <th colSpan={5} className="border p-4 text-white text-lg" style={gradientStyle}>
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((rowTitle, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      <tr>
                        <td
                          className="border p-4 bg-white text-gray-700 text-center font-bold"
                          rowSpan="2"
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <span>{rowTitle}</span>
                            <div className="relative inline-flex items-center">
                              <IoIosInformationCircleOutline
                                className="text-gray-500 cursor-pointer hover:text-gray-700"
                                data-tooltip-id={`tooltip-${rowTitle}`}
                                size={20} 
                              />
                              <Tooltip
                                id={`tooltip-${rowTitle}`}
                                place="left"
                                effect="solid"
                                className="bg-green-100 rounded-md text-black shadow-lg p-4 border border-green-300"
                                style={{
                                  backgroundColor: "#D1FAE5", 
                                  color: "#065F46",           
                                  borderRadius: "0.375rem",  
                                }}
                              >
                                <table className="text-left w-64 h-32">
                                  <thead>
                                    <tr>
                                      <th className="py-2 px-4 text-sm font-bold bg-green-200">Event</th>
                                      <th className="py-2 px-4 text-sm font-bold bg-green-200">Score Options</th>
                                      <th className="py-2 px-4 text-sm font-bold bg-green-200">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-2 px-4 text-sm bg-green-100">Software Utilization Time</td>
                                      <td className="py-2 px-4 text-sm bg-green-100">
                                        5★: Beats SW hrs <br />
                                        4★: Meets PC hrs <br />
                                        3★: Short by 15% <br />
                                        2★: Under Achieved <br />
                                        1★: Very Low (&lt;25%)
                                      </td>
                                      <td className="py-2 px-4 text-sm bg-green-100">
                                        PC Software utilization time is logged automatically. The goal is set
                                        based on project requirements.
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </Tooltip>
                            </div>
                          </div>
                        </td>
                        {ratings.map((rating, index) => (
                          <th
                            key={`header-rating-${index}`}
                            className="border p-4 bg-blue-50 text-gray-700"
                          >
                            <div className="flex flex-col items-center">
                              <span className="text-lg font-medium">{rating.stars}</span>
                              <span className="text-sm font-semibold">{rating.description}</span>
                            </div>
                          </th>
                        ))}
                      </tr>
                      <tr>
                        {Array(5)
                          .fill(null)
                          .map((_, colIndex) => (
                            <DropCell
                              key={`drop-${rowIndex}-${colIndex}`}
                              row={rowIndex}
                              col={colIndex}
                              assignedUsers={grid[rowIndex][colIndex]}
                              onDrop={handleDrop}
                            />
                          ))}
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>

              <div className="m-4 flex flex-row-reverse gap-4">
          <button
            className="min-w-[120px] border text-lg rounded-full"
          
            
          >
           Cancel
          </button>
          <button
            className="min-w-[120px] border text-lg  rounded-full border-gradient text-white font-medium hover:bg-indigo-700 transition-colors"
            
          >
            Save
          </button>
          <button
            className="min-w-[120px] border text-lg  rounded-full"
          
            
          >
           Submit
          </button>
        </div>
            </div>

            <div className="mx-6 team_card w-full lg:w-64 max-w-full bg-gray-100 p-4 rounded-md overflow-y-auto max-h-[500px]">
              <h3 className="text-lg font-semibold mb-4 text-center">Team Members</h3>
              <div className="flex pl-2 flex-wrap gap-2">
                {teamMembers.map(({ name, comment, project }) => (
                  <TeamMemberCard 
                    key={name} 
                    name={name} 
                    comment={comment} 
                    project={project}
                  />
                ))}
              </div>
            </div>
          </div>
        
      </DndProvider>
    </>
  );
};

export default BussinessResults;