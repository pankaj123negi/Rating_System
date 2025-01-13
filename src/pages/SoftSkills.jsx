import { useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Tooltip } from "react-tooltip";
import Navbar from "../components/Navbar";
import { ReactComponent as Home } from "../assets/home_icon.svg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom'
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
                  : ""
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
  const ITEMS_PER_PAGE = 4;
 

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

  const tableRows = [
    { 
      id: 'decisionMaking', 
      label: 'Decision Making',
      tooltipContent: {
        event: "Decision Making Skills",
        scoreOptions: {
          strengths: "Strong decision making",
          improvements: "Decision making areas to develop"
        },
        description: "Assessment of decision making capabilities"
      }
    },
    { 
      id: 'stressManagement', 
      label: 'Stress Management',
      tooltipContent: {
        event: "Stress Management",
        scoreOptions: {
          strengths: "Strong stress management",
          improvements: "Stress handling areas to improve"
        },
        description: "Evaluation of ability to handle pressure"
      }
    },
    { 
      id: 'conflictResolution', 
      label: 'Conflict Resolution',
      tooltipContent: {
        event: "Conflict Resolution Skills",
        scoreOptions: {
          strengths: "Strong conflict resolution",
          improvements: "Conflict handling areas to develop"
        },
        description: "Assessment of conflict management abilities"
      }
    },
    { 
      id: 'accountability', 
      label: 'Accountability',
      tooltipContent: {
        event: "Accountability",
        scoreOptions: {
          strengths: "Strong accountability",
          improvements: "Accountability areas to enhance"
        },
        description: "Evaluation of responsibility and ownership"
      }
    },
    { 
      id: 'technicalTools', 
      label: 'Technical Tools',
      tooltipContent: {
        event: "Technical Tools Proficiency",
        scoreOptions: {
          strengths: "Demonstrated expertise in using technical tools",
          improvements: "Areas where technical skills can be enhanced"
        },
        description: "Assessment of team member's proficiency with technical tools and software"
      }
    },
    { 
      id: 'communicationSkills', 
      label: 'Communication Skills',
      tooltipContent: {
        event: "Communication Effectiveness",
        scoreOptions: {
          strengths: "Strong communication abilities",
          improvements: "Communication areas to develop"
        },
        description: "Evaluation of verbal and written communication capabilities"
      }
    },
    { 
      id: 'problemSolving', 
      label: 'Problem Solving',
      tooltipContent: {
        event: "Problem-Solving Capability",
        scoreOptions: {
          strengths: "Demonstrated problem-solving excellence",
          improvements: "Problem-solving areas to strengthen"
        },
        description: "Assessment of analytical and problem-solving abilities"
      }
    },
    { 
      id: 'teamwork', 
      label: 'Teamwork',
      tooltipContent: {
        event: "Team Collaboration",
        scoreOptions: {
          strengths: "Strong teamwork qualities",
          improvements: "Teamwork aspects to develop"
        },
        description: "Evaluation of collaboration and team contribution"
      }
    },
    { 
      id: 'leadership', 
      label: 'Leadership',
      tooltipContent: {
        event: "Leadership Skills",
        scoreOptions: {
          strengths: "Strong leadership abilities",
          improvements: "Leadership areas to develop"
        },
        description: "Assessment of leadership and team guidance capabilities"
      }
    },
    { 
      id: 'timeManagement', 
      label: 'Time Management',
      tooltipContent: {
        event: "Time Management",
        scoreOptions: {
          strengths: "Excellent time management",
          improvements: "Time management areas to improve"
        },
        description: "Evaluation of time management and prioritization skills"
      }
    },
    { 
      id: 'innovation', 
      label: 'Innovation',
      tooltipContent: {
        event: "Innovation and Creativity",
        scoreOptions: {
          strengths: "Strong innovative thinking",
          improvements: "Areas to enhance creative thinking"
        },
        description: "Assessment of innovative approaches and creative solutions"
      }
    },
    { 
      id: 'adaptability', 
      label: 'Adaptability',
      tooltipContent: {
        event: "Adaptability",
        scoreOptions: {
          strengths: "Strong adaptability to change",
          improvements: "Adaptability areas to develop"
        },
        description: "Evaluation of ability to adapt to new situations"
      }
    },
    { 
      id: 'projectManagement', 
      label: 'Project Management',
      tooltipContent: {
        event: "Project Management Skills",
        scoreOptions: {
          strengths: "Strong project management",
          improvements: "Project management areas to improve"
        },
        description: "Assessment of project planning and execution abilities"
      }
    },
    { 
      id: 'customerService', 
      label: 'Customer Service',
      tooltipContent: {
        event: "Customer Service Skills",
        scoreOptions: {
          strengths: "Excellent customer service",
          improvements: "Customer service areas to enhance"
        },
        description: "Evaluation of customer interaction and service delivery"
      }
    },
    { 
      id: 'analyticalSkills', 
      label: 'Analytical Skills',
      tooltipContent: {
        event: "Analytical Thinking",
        scoreOptions: {
          strengths: "Strong analytical abilities",
          improvements: "Analytical areas to develop"
        },
        description: "Assessment of analytical and logical thinking"
      }
    },
    { 
      id: 'attention', 
      label: 'Attention to Detail',
      tooltipContent: {
        event: "Attention to Detail",
        scoreOptions: {
          strengths: "Strong attention to detail",
          improvements: "Detail orientation areas to improve"
        },
        description: "Evaluation of precision and accuracy in work"
      }
    },
    { 
      id: 'initiative', 
      label: 'Initiative',
      tooltipContent: {
        event: "Initiative Taking",
        scoreOptions: {
          strengths: "Strong initiative taking",
          improvements: "Initiative areas to develop"
        },
        description: "Assessment of self-starting and proactive behavior"
      }
    },
    { 
      id: 'learning', 
      label: 'Learning Ability',
      tooltipContent: {
        event: "Learning and Development",
        scoreOptions: {
          strengths: "Strong learning ability",
          improvements: "Learning areas to enhance"
        },
        description: "Evaluation of ability to learn and grow"
      }
    },
    { 
      id: 'presentation', 
      label: 'Presentation Skills',
      tooltipContent: {
        event: "Presentation Abilities",
        scoreOptions: {
          strengths: "Strong presentation skills",
          improvements: "Presentation areas to develop"
        },
        description: "Assessment of presentation and public speaking"
      }
    },
    { 
      id: 'negotiation', 
      label: 'Negotiation Skills',
      tooltipContent: {
        event: "Negotiation Abilities",
        scoreOptions: {
          strengths: "Strong negotiation skills",
          improvements: "Negotiation areas to improve"
        },
        description: "Evaluation of negotiation and persuasion abilities"
      }
    },
    { 
      id: 'decisionMaking', 
      label: 'Decision Making',
      tooltipContent: {
        event: "Decision Making Skills",
        scoreOptions: {
          strengths: "Strong decision making",
          improvements: "Decision making areas to develop"
        },
        description: "Assessment of decision making capabilities"
      }
    },
    { 
      id: 'stressManagement', 
      label: 'Stress Management',
      tooltipContent: {
        event: "Stress Management",
        scoreOptions: {
          strengths: "Strong stress management",
          improvements: "Stress handling areas to improve"
        },
        description: "Evaluation of ability to handle pressure"
      }
    },
    
    { 
      id: 'conflictResolution', 
      label: 'Conflict Resolution',
      tooltipContent: {
        event: "Conflict Resolution Skills",
        scoreOptions: {
          strengths: "Strong conflict resolution",
          improvements: "Conflict handling areas to develop"
        },
        description: "Assessment of conflict management abilities"
      }
    },
    { 
      id: 'accountability', 
      label: 'Accountability',
      tooltipContent: {
        event: "Accountability",
        scoreOptions: {
          strengths: "Strong accountability",
          improvements: "Accountability areas to enhance"
        },
        description: "Evaluation of responsibility and ownership"
      }
    }
  ];

  

  // Initialize assignments state with all 20 categories
  const initialAssignments = {};
  tableRows.forEach(row => {
    initialAssignments[row.id] = {
      strengths: [],
      improvements: []
    };
  });

  const [assignments, setAssignments] = useState(initialAssignments);

  const getCurrentPageRows = () => {
    const startIndex = (currentStep - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    const filteredRows = searchTerm
      ? tableRows.filter(row =>
          row.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : tableRows;
    
    return filteredRows.slice(startIndex, endIndex);
  };

  const handleDrop = (item, category, section) => {
    setAssignments((prev) => {
      const newAssignments = { ...prev };
      const otherSection = section === 'strengths' ? 'improvements' : 'strengths';
      
      newAssignments[category][otherSection] = newAssignments[category][otherSection]
        .filter((user) => user.name !== item.name);

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
    const totalPages = Math.ceil(tableRows.length / ITEMS_PER_PAGE);
    
    if (currentStep < totalPages) {
      // If we're not on the last page of content, go to next page
      setCurrentStep((prev) => prev + 1);
      setSearchTerm("");
    } else if (currentStep === totalPages) {
      // If we're on the last page of content, go to submit step
      setCurrentStep(steps.length);
      setComplete(true);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setComplete(false);
      setSearchTerm("");
    }
  };



  const gradientStyle = {
    background: "linear-gradient(109.14deg, #5B4DEE 0%, #2603A4 95.95%)",
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Navbar />
      <div className="heading py-8 px-12 flex items-center flex-wrap space-x-4">
      <Link to='/dashboard'>
      <Home size={40} /></Link>
  {/* Add a vertical line separator */}
  <div className="w-0.5 h-10 bg-gray-300"></div>
  <div className="space-y-2">
    <p className="text-xl font-bold text-[#05004E]">
      Rating System – Soft Skills Assessment
    </p>
    <p className="text-sm sm:text-base text-gray-500">
      Quaterly Apr 2025 – Jun 2026
    </p>
  </div>
</div>

      <ProgressBar
        steps={steps}
        currentStep={currentStep}
        complete={complete}
      />

      <div className="flex flex-wrap lg:flex-nowrap px-10">
        <div className="flex-grow overflow-x-auto">
          <table className="w-full my-4 text-left">
            <thead>
              <tr className="text-left border-b border-[#E0E4E9] py-3 px-4 text-white">
                <th className="border-[#D9D9D9] border border-collapse text-lg py-3 px-4" style={gradientStyle}>
                  Event
                </th>
                <th
                  colSpan="2"
                  className="border-[#D9D9D9] border border-collapse text-lg py-3 px-4 text-center"
                  style={gradientStyle}
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
              <tbody className="text-[#444A6D] text-lg font-semibold">
                {getCurrentPageRows().map((row) => (
                  <tr key={row.id} className="border border-[#E0E4E9] py-3 px-4">
                    <td className="py-3 px-4 border-[#D9D9D9] border border-collapse bg-white">
                      <div className="flex justify-between items-center space-x-2">
                        <span>{row.label}</span>
                        <div className="relative inline-flex items-center">
                          <IoIosInformationCircleOutline
                            className="text-gray-500 cursor-pointer hover:text-gray-700"
                            data-tooltip-id={`tooltip-${row.id}`}
                            size={20}
                          />
                          <Tooltip
                            id={`tooltip-${row.id}`}
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
                                  <td className="py-2 px-4 text-sm bg-green-100">{row.tooltipContent.event}</td>
                                  <td className="py-2 px-4 text-sm bg-green-100">
                                    Strengths: {row.tooltipContent.scoreOptions.strengths}<br />
                                    Improvements: {row.tooltipContent.scoreOptions.improvements}
                                  </td>
                                  <td className="py-2 px-4 text-sm bg-green-100">
                                    {row.tooltipContent.description}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Tooltip>
                        </div>
                      </div>
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
  
          <div className="mx-6 my-4  team_card w-full lg:w-64 max-w-full bg-gray-100 p-4 rounded-md overflow-y-auto max-h-[500px]">
              <h3 className="text-lg font-semibold mb-4 text-center">Team Members</h3>
              <div className="flex flex-wrap gap-2 justify-center">
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
  
        <div className="m-4 px-12 flex flex-row-reverse gap-4">
  <button
    className={`min-w-[120px] text-base rounded-full ${
      currentStep === steps.length
        ? 'bg-green-600 hover:bg-green-700 text-white'
        : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
    } font-medium transition-colors`}
    onClick={handleNext}
    disabled={complete}
  >
    {currentStep === steps.length ? 'Submit' : 'Save & Next'}
  </button>
  <button
    className="min-w-[120px] text-base rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
    onClick={handleBack}
    disabled={currentStep === 1}
  >
    Back
  </button>
</div>
      </DndProvider>
    );
  };
  
  export default SoftSkills;