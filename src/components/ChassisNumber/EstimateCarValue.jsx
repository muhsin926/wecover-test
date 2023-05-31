import { Box, LinearProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../contexts/CommonContext";

const EstimateCarValue = () => {
  const { selectPlan } = useContext(Context);
  return (
    <Box my={4} sx={{ width: "100%" }}>
      <Typography variant="h6">We estimate that your car value is</Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" sx={{ marginBottom: 1, marginTop: 2 }}>
          {!selectPlan ? " AED 80,678" : "AED 15,000"}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1, marginTop: 2 }}>
          {!selectPlan ? "  AED 92,400" : "AED 2,000,000"}
        </Typography>
      </Box>
      {!selectPlan ? (
        <LinearProgress color="primary" variant="determinate" value={50} />
      ) : (
        <LinearProgress color="error" variant="determinate" value={50} />
      )}
    </Box>
  );
};

export default EstimateCarValue;
