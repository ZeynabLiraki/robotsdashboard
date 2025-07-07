import styled from "styled-components";
import { IconButton } from "@mui/material";

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledModalBox = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 24px;
  padding: 16px;
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
`;
