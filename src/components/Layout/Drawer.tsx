import { List, ListItemText } from "@mui/material";
import { StyledDrawer, StyledListItemButton } from "./AppLayout.styles";
import type React from "react";

type menueItem = {
  key: string;
  label: string;
};

interface DrawerProps {
  menuItems: menueItem[];
  selectedKey: string;
  onNavigate: (keu: string) => {};
}

const Drawer: React.FC<DrawerProps> = ({
  menuItems,
  selectedKey,
  onNavigate,
}) => {
  return (
    <StyledDrawer variant="persistent" anchor="left" open>
      <List>
        {menuItems.map((item) => (
          <StyledListItemButton
            key={item.key}
            selected={selectedKey === item.key}
            onClick={() => onNavigate(item.key)}
          >
            <ListItemText primary={item.label} />
          </StyledListItemButton>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Drawer;
