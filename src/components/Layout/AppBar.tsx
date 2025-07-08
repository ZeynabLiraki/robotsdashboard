import React from "react";
import { Toolbar, Typography, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {
  StyledAppBar,
  StyledIconButton,
  FlexGrowBox,
} from "./AppLayout.styles";

interface AppBarProps {
  userInfo: { firstName?: string; lastName?: string } | null;
  onMenuClick?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ userInfo, onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        {isMobile && (
          <StyledIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </StyledIconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          {userInfo
            ? `Welcome, ${userInfo.firstName ?? ""} ${userInfo.lastName ?? ""}`
            : "Welcome"}
        </Typography>
        <FlexGrowBox />
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
