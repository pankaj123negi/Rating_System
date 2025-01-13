import { useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "../components/Navbar";
import { ReactComponent as Home } from "../assets/home_icon.svg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import TeamMemberCard from "../components/TeamMemberCard";

const DropCell = ({ col, section, onDrop, assignedUsers }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TEAM_MEMBER",
    drop: (item) => onDrop(item, col, section),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <td
      ref={drop}
      className={`border-[#D9D9D9] border border-collapse py-3 px-4 w-96 h-24 ${
        isOver ? "bg-blue-50 border-blue-300" : "bg-white"
      }`}
    >
      <div className="flex justify-center items-center h-full w-full">
        {assignedUsers && assignedUsers.length > 0 ? (
          <div className="flex flex-col items-center gap-2 w-full">
            {assignedUsers.map((user, index) => (
              <div key={`${user.name}-${index}`} className="w-full flex justify-center">
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

const ProgressBar = ({ steps, currentStep, complete }) => {
  return (
    <div className="flex items-center w-full max-w-4xl p-4">
      <div className="flex justify-between w-full">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 ? "active" : ""} ${
              i + 1 < currentStep || complete ? "complete" : ""
            }`}
          >
            <div
              className={`step ${
                i + 1 < currentStep || complete
                  ? "bg-green-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SoftSkills = () => {
  const steps = ["Step-1", "Step-2", "Step-3", "Step-4", "Step-5", "Submit"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Team members data
  const teamMembers = [
    {
      name: "Sandeep Kumar",
      comment: "Lorem ipsum dolor sit amet",
      project: "Project Alpha",
    },
    {
      name: "Pankaj Mudgil",
      comment: "Lorem ipsum dolor sit amet",
      project: "Project Beta",
    },
    {
      name: "Rajmohan Singh",
      comment: "Lorem ipsum dolor sit amet",
      project: "Project Gamma",
    },
    {
      name: "Gaurav Maheshwari",
      comment: "Lorem ipsum dolor sit amet",
      project: "Project Delta",
    },
    {
      name: "Mohd. Salman",
      comment: "Lorem ipsum dolor sit amet",
      project: "Project Epsilon",
    },
  ];

  // Updated assignments state
  const [assignments, setAssignments] = useState({
    technicalTools: {
      strengths: [],
      improvements: [],
    },
    communicationSkills: {
      strengths: [],
      improvements: [],
    },
    problemSolving: {
      strengths: [],
      improvements: [],
    },
    teamwork: {
      strengths: [],
      improvements: [],
    },
  });

  const handleDrop = (item, category, section) => {
    setAssignments((prev) => {
      const newAssignments = { ...prev };
      
      // Remove user from the same category's other section
      const otherSection = section === 'strengths' ? 'improvements' : 'strengths';
      newAssignments[category][otherSection] = newAssignments[category][otherSection]
        .filter((user) => user.name !== item.name);

      // Add to new section if not already there
      if (!newAssignments[category][section].some((user) => user.name === item.name)) {
        newAssignments[category][section].push({
          name: item.name,
          comment: item.comment,
          project: item.project,
        });
      }

      return newAssignments;
    });
  };

  const handleNext = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setComplete(false);
    }
  };

  // Define the rows for the table
  const tableRows = [
    { id: 'technicalTools', label: 'Technical Tools' },
    { id: 'communicationSkills', label: 'Communication Skills' },
    { id: 'problemSolving', label: 'Problem Solving' },
    { id: 'teamwork', label: 'Teamwork' },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <Navbar />
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

      <ProgressBar
        steps={steps}
        currentStep={currentStep}
        complete={complete}
      />

      {/* Rating Table */}
      <div className="flex flex-wrap lg:flex-nowrap px-10">
        <div className="flex-grow overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-left border-b border-[#E0E4E9] py-3 px-4 gradient text-white">
                <th className="border-[#D9D9D9] border border-collapse text-lg py-3 px-4">
                  Event
                </th>
                <th
                  colSpan="2"
                  className="border-[#D9D9D9] border border-collapse text-lg py-3 px-4 text-center"
                >
                  Ratings
                </th>
              </tr>
              <tr className="text-left border border-[#E0E4E9] text-black bg-[#EBEFFF]">
                <th className="text-lg pt-0 pb-0 px-0">
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full h-12 px-4 text-sm border-0 focus:ring-0 focus:outline-none bg-[#EBEFFF]"
                    placeholder="Search"
                  />
                </th>
                <th className="text-lg py-3 px-4 bg-[#D2DCFF] border-[#D9D9D9] border text-center">
                  Strengths
                </th>
                <th className="text-lg py-3 px-4 bg-[#BECDFD] border-[#D9D9D9] border text-center">
                  Needs Improvement
                </th>
              </tr>
            </thead>
            <tbody className="text-[#444A6D] text-lg">
              {tableRows.map((row) => (
                <tr key={row.id} className="border border-[#E0E4E9] py-3 px-4">
                  <td className="py-3 px-4 flex justify-between items-center w-full">
                    {row.label}
                    <span>
                      <IoIosInformationCircleOutline />
                    </span>
                  </td>
                  <DropCell
                    col={row.id}
                    section="strengths"
                    assignedUsers={assignments[row.id].strengths}
                    onDrop={handleDrop}
                  />
                  <DropCell
                    col={row.id}
                    section="improvements"
                    assignedUsers={assignments[row.id].improvements}
                    onDrop={handleDrop}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Team Members - Drag & Drop */}
        <div className="team_card w-full lg:w-64 max-w-full bg-gray-100 p-4 rounded-md overflow-y-auto max-h-[500px] ml-4">
          <h3 className="text-lg font-semibold mb-4">Team Members</h3>
          <div className="flex flex-wrap gap-2">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                comment={member.comment}
                project={member.project}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="m-4 flex flex-row-reverse gap-4">
        <button
          className="min-w-[120px] text-sm rounded-full bg-white text-gray-800 font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
          onClick={handleNext}
        >
          Save & Next
        </button>
        <button
          className="min-w-[120px] text-sm rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </DndProvider>
  );
};

export default SoftSkills;