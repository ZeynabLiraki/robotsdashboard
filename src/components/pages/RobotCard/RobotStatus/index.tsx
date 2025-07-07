import React from "react";
import { StatusIndicator, StatusIconImg } from "../RobotCard.styles.ts";

interface RobotStatusProps {
  status: string;
  iconSrc: string;
  iconAlt: string;
}

const RobotStatus: React.FC<RobotStatusProps> = ({
  status,
  iconSrc,
  iconAlt,
}) => (
  <StatusIndicator
    status={status}
    role="region"
    aria-label={`Robot status: ${status}`}
    data-testid="robot-status"
  >
    <StatusIconImg src={iconSrc} alt={iconAlt} loading="lazy" />
    {status}
  </StatusIndicator>
);

export default RobotStatus;
