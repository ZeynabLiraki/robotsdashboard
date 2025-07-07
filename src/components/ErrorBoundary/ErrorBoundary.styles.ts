import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const FallbackContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  maxWidth: 600,
  margin: "auto",
  marginTop: theme.spacing(8),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));
