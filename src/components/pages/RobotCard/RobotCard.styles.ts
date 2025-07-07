import styled from "styled-components";
import { Box, Button, CardContent, Typography } from "@mui/material";

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 10px 12px 8px 12px;
  width: 289px;
  height: 64px;
`;

export const Content = styled(CardContent)`
  background: #ffffff;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 5px 12px 5px 12px;
  width: 289px;
  height: 334px;
`;
export const StatusIndicator = styled(Box)<{ status: string }>`
  display: flex;
  align-items: center;
  color: ${({ status }) => {
    switch (status) {
      case "On Delivery":
        return "#2DAA49";
      case "Idle":
        return "#717A82";
      case "Charging":
        return "#FF9B07";
      case "Error":
        return "#DE3A4A";
      default:
        return "#202020";
    }
  }};
  font-weight: 900;
  &::before {
    display: inline-block;
    margin-right: 6px;
  }
`;

export const LocationIndicator = styled(Box)``;

export const InfoRow = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export const InfoLabel = styled(Typography)`
  flex: 0 0 80px;
  font-weight: 900;
  width: 40px;
  margin-right: 1px;
  color: #878484;
`;

export const GPSContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  max-width: 600px;
  margin: 10px 0 10px 0;
`;

export const GPSImg = styled(Box)`
  flex: 0 0 auto;
  margin-right: 12px;
`;

export const GPSInfo = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const GPSMap = styled(Box)`
  flex: 0 0 auto;
  margin-left: 16px;
`;

export const CurrentOrderBox = styled(Box)`
  padding: 5px;
  background-color: #d8d6d666;
  border-radius: 8px;
  width: 260px;
  margin-right: 10px;
  left: 3px;
  margin: 10px 10px 12px 5px;
`;

export const RoboCard = styled(Box)`
  width: 312px;
  height: 425px;
  margin: 1rem;
  border-radius: 15px;
  background: #c6c7cc;
`;

export const HeaderTypography = styled(Typography)`
fontWeight: 700`

export const StatusIconImg = styled.img`
  margin-right: 10px;
`;

export const MapButton = styled(Button)`
  background: #87a4ae !important;
  border-color: #919393 !important;
  color: white !important;

  &:hover {
    background: #7a99a2 !important;
  }
`;

export const InfoIcon = styled.img`
  margin-right: 5px;
`;

export const OrderInfoRow = styled(InfoRow)`
  margin-bottom: 5px;
`;

export const CurrentInfoIcon = styled.img`
  margin-right: 16px;
`;

export const SmallBoldText = styled(Typography)`
  font-weight: bold !important;
  font-size: 13px;
`;

export const MapWrapper = styled.div`
  width: 100%;
  margin-bottom: 7px;
`;

export const ReturnButton = styled(Button)`
  margin-top: 8px;
`;
