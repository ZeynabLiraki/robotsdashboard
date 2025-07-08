import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Box, useTheme, useMediaQuery } from "@mui/material";

import Drawer from "./Drawer";
import AppBar from "./AppBar";
import { drawerWidth } from "./AppLayout.styles";
import { mainBoxSx } from "./AppLayout.styles";

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [userInfo, setUserInfo] = useState<{
    firstName?: string;
    lastName?: string;
  } | null>(null);
  const [selectedKey, setSelectedKey] = useState<string>("/");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(!isMobile);

  useEffect(() => {
    try {
      const user = localStorage.getItem("Current-User");
      if (user) setUserInfo(JSON.parse(user));
    } catch {}
  }, []);

  useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

  const handleNavigate = (path: string) => {
    setSelectedKey(path);
    navigate(path);
  };

  const menuItems = [{ key: "/", label: "Card List" }];

  return (
    <>
      <AppBar userInfo={userInfo} onMenuClick={() => setDrawerOpen(true)} />

      <Drawer
        menuItems={menuItems}
        selectedKey={selectedKey}
        onNavigate={handleNavigate}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant={isMobile ? "temporary" : "persistent"}
      />

      <Box
        component="main"
        sx={mainBoxSx(theme, isMobile, drawerOpen, drawerWidth)}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default AppLayout;
