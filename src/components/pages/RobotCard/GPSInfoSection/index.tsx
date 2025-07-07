import React from "react";
import {
  GPSContainer,
  GPSImg,
  GPSInfo,
  InfoRow,
  InfoLabel,
  GPSMap,
  MapButton,
} from "../RobotCard.styles.ts";
import gpsIcon from "../../../../assets/Icons/GPS-icon.svg";
import { Typography } from "@mui/material";

interface GPSInfoSectionProps {
  latitude: number;
  longitude: number;
  onMapClick?: () => void;
  currentStatus: string;
  role?: string;
  "aria-label"?: string;
}

const GPSInfoSection: React.FC<GPSInfoSectionProps> = ({
  latitude,
  longitude,
  onMapClick,
  currentStatus,
}) => (
  <GPSContainer>
    <GPSImg>
      <img src={gpsIcon} alt="robot's location" loading="lazy" />
    </GPSImg>

    <GPSInfo>
      <InfoRow>
        <InfoLabel variant="body2">Latitude:</InfoLabel>
        <Typography variant="body2" fontWeight="bold">
          {latitude}
        </Typography>
      </InfoRow>
      <InfoRow>
        <InfoLabel variant="body2">Longitude:</InfoLabel>
        <Typography variant="body2" fontWeight="bold">
          {longitude}
        </Typography>
      </InfoRow>
    </GPSInfo>

    {currentStatus === "On Delivery" && (
      <GPSMap>
        <MapButton
          variant="contained"
          aria-label="Show robot location on map"
          onClick={onMapClick}
        >
          Map
        </MapButton>
      </GPSMap>
    )}
  </GPSContainer>
);

export default GPSInfoSection;
