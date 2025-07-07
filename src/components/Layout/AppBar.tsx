import { Toolbar, Typography } from "@mui/material";
import { StyledAppBar } from "./AppLayout.styles";

interface AppBarProps {
  userInfo: { firstName?: string; lastName?: string } | null;
}
const AppBar: React.FC<AppBarProps> = ({ userInfo }) => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Typography sx={{ marginRight: 2 }}>
          {userInfo
            ? `${userInfo.firstName ?? ""} ${userInfo.lastName ?? ""}`
            : "User"}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};
export default AppBar;
