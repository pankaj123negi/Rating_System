// TeamMemberCard.jsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { Tooltip } from 'react-tooltip';

const TeamMemberCard = ({ name, comment, project, isDropped = false }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TEAM_MEMBER",
    item: { name, comment, project },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      data-tooltip-id={isDropped ? `tooltip-${name}` : undefined}
      className={`
        px-2 py-2
        bg-green-100 
        rounded-md 
        cursor-pointer 
        text-sm 
        font-medium
        flex
        items-center
        justify-center
        w-full
        ${isDragging ? "opacity-50" : "opacity-100"}
      `}
      style={{ 
        minWidth: "140px",      
        maxWidth: "200px",      
        wordBreak: "break-word", 
        whiteSpace: "normal",    
        overflow: "hidden",      
        textOverflow: "ellipsis",
      }}
    >
      {name}
      {isDropped && (
        <Tooltip
          id={`tooltip-${name}`}
          place="bottom"
          effect="solid"
          style={{
            backgroundColor: "#D1FAE5",
            color: "#065F46",
            borderRadius: "0.25rem",
            padding: "0.5rem",
            minWidth: "140px",
            maxWidth: "200px",
            textAlign: "center",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
            {project}
          </div>
          <hr style={{ borderColor: "#065F46", margin: "0.5rem 0" }} />
          <div>{comment}</div>
        </Tooltip>
      )}
    </div>
  );
};

export default TeamMemberCard;