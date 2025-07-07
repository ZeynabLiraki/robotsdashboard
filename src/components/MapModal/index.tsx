import React, { Suspense, useEffect, useRef } from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { StyledIconButton, StyledModalBox } from "./MapModal.styles";
const RobotMap = React.lazy(() => import("../robotMap/index"));
interface MapModalProps {
  open: boolean;
  onClose: () => void;
  latitude: number;
  longitude: number;
}

const MapModal: React.FC<MapModalProps> = ({
  open,
  onClose,
  latitude,
  longitude,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="map-modal-title"
      aria-describedby="map-modal-description"
      closeAfterTransition
      disableEnforceFocus={false}
    >
      <StyledModalBox role="dialog" aria-modal="true" tabIndex={-1}>
        <h2
          id="map-modal-title"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          Map Location
        </h2>
        <p
          id="map-modal-description"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          Modal showing map location of selected coordinates.
        </p>

        <StyledIconButton
          aria-label="Close map modal"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <CloseIcon />
        </StyledIconButton>
        <Suspense fallback={<div>Loading map…</div>}>
          <RobotMap latitude={latitude} longitude={longitude} height="350px" />
        </Suspense>
      </StyledModalBox>
    </Modal>
  );
};

export default MapModal;
