import { Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { EmptyWraper } from "./EmptyList.styles";

const EmptyList = ({ message = "No data available." }) => {
  return (
    <EmptyWraper>
      <SentimentDissatisfiedIcon fontSize="large" color="disabled" />
      <Typography variant="h6" color="textSecondary" mt={2}>
        {message}
      </Typography>
    </EmptyWraper>
  );
};

export default EmptyList;
