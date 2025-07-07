import  { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Drawer from "./Drawer";
import AppBar from "./AppBar";

const drawerWidth = 270;

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<{
    firstName?: string;
    lastName?: string;
  } | null>({ firstName: "Zeynab", lastName: "Liraki" });
  const [selectedKey, setSelectedKey] = useState<string>("/");

  useEffect(() => {
    try {
      const user = localStorage.getItem("Current-User");
      if (user) setUserInfo(JSON.parse(user));
    } catch {}
  }, []);

  const handleNavigate = (path: string) => {
    setSelectedKey(path);
    navigate(path);
  };

  const menuItems = [
    {
      key: "/",
      label: "Card List",
    },
  ];

  return (
    <>
      <AppBar userInfo={userInfo} />

      <Drawer
        menuItems={menuItems}
        selectedKey={selectedKey}
        onNavigate={() => handleNavigate}
      />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px`, mt: "64px" }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default AppLayout;
