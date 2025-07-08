import React from "react";
import { List, ListItemText } from "@mui/material";
import { StyledListItemButton, StyledDrawer } from "./AppLayout.styles";

type MenuItem = {
  key: string;
  label: string;
};

interface DrawerProps {
  menuItems: MenuItem[];
  selectedKey: string;
  onNavigate: (key: string) => void;
  open: boolean;
  onClose: () => void;
  variant?: "persistent" | "temporary";
}

const Drawer: React.FC<DrawerProps> = ({
  menuItems,
  selectedKey,
  onNavigate,
  open,
  onClose,
  variant = "persistent",
}) => {
  return (
    <StyledDrawer
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <List>
        {menuItems.map((item) => (
          <StyledListItemButton
            key={item.key}
            selected={selectedKey === item.key}
            onClick={() => {
              onNavigate(item.key);
              if (variant === "temporary") onClose();
            }}
          >
            <ListItemText primary={item.label} />
          </StyledListItemButton>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Drawer;
