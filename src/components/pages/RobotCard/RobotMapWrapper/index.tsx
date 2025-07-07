import React, { Suspense } from "react";
import { MapWrapper } from "../RobotCard.styles";
const RobotMap = React.lazy(() => import("../../../robotMap"));
interface RobotMapWrapperProps {
  latitude: number;
  longitude: number;
  height?: string;
  role?: string;
  "aria-label"?: string;
}

const RobotMapWrapper: React.FC<RobotMapWrapperProps> = ({
  latitude,
  longitude,
  height = "150px",
}) => (
  <MapWrapper>
    <Suspense fallback={<div>Loading map…</div>}>
      <RobotMap latitude={latitude} longitude={longitude} height={height} />
    </Suspense>
  </MapWrapper>
);

export default RobotMapWrapper;
