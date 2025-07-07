import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const BatteryContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const BatteryBody = styled(Box)`
  position: relative;
  width: 100px;
  height: 50px;
  border: 3px solid black;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
`;

export const BatteryFill = styled(Box)<{ fillColor: string; level: number }>`
  position: absolute;
  width: ${({ level }) => `${level}%`};
  height: 100%;
  background-color: ${({ fillColor }) => fillColor};
  top: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
  z-index: 1;
`;

export const BatteryText = styled(Typography)<{
  $color: string;
  $clipInset: string;
}>`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ $color }) => $color};
  clip-path: ${({ $clipInset }) => `inset(${$clipInset})`};
  font-weight: bold;
  z-index: 2;
  pointer-events: none;
`;

export const BatteryTip = styled(Box)`
  width: 8px;
  height: 20px;
  background-color: black;
  border-radius: 2px;
`;
