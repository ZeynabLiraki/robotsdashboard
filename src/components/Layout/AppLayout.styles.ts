import { styled } from "@mui/material/styles";
import { AppBar, Drawer, ListItemButton, Box } from "@mui/material";

export const drawerWidth = 250;

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#1f2d3d",
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    backgroundColor: "#8e9499",
    color: theme.palette.common.white,
    boxSizing: "border-box",
    top: 64,
  },
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ selected, theme }) => ({
  marginTop: theme.spacing(1.25),
  color: selected ? theme.palette.error.main : theme.palette.common.white,
  backgroundColor: selected ? "#efefef" : "transparent",
  borderRight: selected ? `3px solid ${theme.palette.error.main}` : "none",
  "&:hover": {
    backgroundColor: selected ? "#efefef" : "#c6c7cc",
  },
}));

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  width: 300,
  outline: "none",
}));
