import  React, { useCallback, useMemo, useState } from "react";
import { type Robot } from "../../../types/robotFleetData.ts";
import deliveryStatus from "../../../assets/Icons/Delivery-status.svg";
import chargingStatus from "../../../assets/Icons/Charging-status.svg";
import idleStatus from "../../../assets/Icons/Idle-status.svg";
import errorStatus from "../../../assets/Icons/Error-status.svg";
import returningStatus from "../../../assets/Icons/Returning-status.svg";

import BatteryIndicator from "../../BatteryIndicator/index.tsx";
import {
  Header,
  Content,
  RoboCard,
  HeaderTypography,
  ReturnButton,
} from "./RobotCard.styles.ts";
import RobotStatus from "./RobotStatus/index.tsx";
import GPSInfoSection from "./GPSInfoSection/index.tsx";
import MapModal from "../../MapModal/index.tsx";
import CurrentOrderDetails from "./CurrentOrderDetails/index.tsx";
import RobotMapWrapper from "./RobotMapWrapper/index.tsx";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard: React.FC<RobotCardProps> = React.memo(({ robot }) => {
  const { robotId, model, status, location, batteryLevel, currentOrder } =
    robot;
  const [currentStatus, setCurrentStatus] = useState(status);

  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleMapClick = useCallback(() => setIsMapOpen(true), []);
  const closeMap = useCallback(() => setIsMapOpen(false), []);

  const handleReturn = useCallback(() => {
    if (status === "Idle" || status === "On Delivery") {
      setCurrentStatus("Returning ...");
    }
  }, [status]);

  const StatusIcon = useMemo(() => {
    switch (currentStatus) {
      case "On Delivery":
        return { src: deliveryStatus, alt: "robot is on delivery" };
      case "Idle":
        return { src: idleStatus, alt: "robot is idled" };
      case "Charging":
        return { src: chargingStatus, alt: "robot is charging" };
      case "Error":
        return { src: errorStatus, alt: "robot is errored" };
      default:
        return { src: returningStatus, alt: "robot is returning" };
    }
  }, [currentStatus]);

  return (
    <>
      <MapModal
        open={isMapOpen}
        onClose={closeMap}
        latitude={location.latitude}
        longitude={location.longitude}
      />
      <RoboCard
        as="section"
        role="region"
        aria-label={`Robot card for ${robotId}, model ${model}`}
      >
        <Header as="header">
          <HeaderTypography>
            {robotId} – {model}
          </HeaderTypography>
          <BatteryIndicator level={batteryLevel} />
        </Header>

        <Content>
          <RobotStatus
            iconAlt={StatusIcon.alt}
            iconSrc={StatusIcon.src}
            status={currentStatus}
            aria-live="polite"
            
          />

          <GPSInfoSection
            latitude={location.latitude}
            longitude={location.longitude}
            onMapClick={handleMapClick}
            currentStatus={currentStatus}
            aria-label="Robot location information"
            role="region"
          />

          {currentStatus === "On Delivery" && currentOrder ? (
            <CurrentOrderDetails
              customerName={currentOrder.customerName}
              deliveryAddress={currentOrder.deliveryAddress}
              estimatedDelivery={currentOrder?.estimatedDelivery}
              orderId={currentOrder.orderId}
              aria-label="Current order details"
              role="region"
            />
          ) : (
            <RobotMapWrapper
              latitude={location.latitude}
              longitude={location.longitude}
              height="150px"
              aria-label="Robot map location"
              role="region"
            />
          )}

          <ReturnButton
            variant="contained"
            fullWidth
            onClick={handleReturn}
            disabled={
              !(currentStatus === "On Delivery" || currentStatus === "Idle")
            }
            aria-disabled={
              !(currentStatus === "On Delivery" || currentStatus === "Idle")
            }
            aria-label="Return robot to base"
          >
            Return to Base
          </ReturnButton>
        </Content>
      </RoboCard>
    </>
  );
});

export default RobotCard;
