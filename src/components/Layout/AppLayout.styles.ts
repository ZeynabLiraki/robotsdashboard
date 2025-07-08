import { styled } from "@mui/material/styles";
import { ListItemButton } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { Theme } from "@mui/material";

export const drawerWidth = 250;

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

export const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#1f2d3d",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const FlexGrowBox = styled(Box)({
  flexGrow: 1,
});

export const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    top: 64,
    backgroundColor: "#8e9499",
    color: theme.palette.common.white,
  },
}));


export const mainBoxSx = (theme: Theme, isMobile: boolean, drawerOpen: boolean, drawerWidth: number) => ({
  flexGrow: 1,
  p: 3,
  mt: "64px",
  ml: !isMobile && drawerOpen ? `${drawerWidth}px` : 0,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});