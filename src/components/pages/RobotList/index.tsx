import React from "react";
import { Box } from "@mui/material";
import RobotCard from "../RobotCard";
import { type Robot } from "../../../types/robotFleetData";
import ErrorBoundary from "../../ErrorBoundary";
import EmptyList from "../../EmptyList";

interface RobotListProps {
  robots: Robot[];
}

const RobotList: React.FC<RobotListProps> = ({ robots }) => {
  if (!robots || robots.length === 0) {
    return <EmptyList message="No robots are currently available." />;
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      role="list"
      aria-label="List of robots"
    >
      {robots.map((robot) => (
        <ErrorBoundary key={robot.robotId}>
          <RobotCard key={robot.robotId} robot={robot} />
        </ErrorBoundary>
      ))}
    </Box>
  );
};

export default RobotList;
