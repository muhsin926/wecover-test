import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../../contexts/CommonContext";

const steps = ["1", "2", "3", "4", "5"];
const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "50px",
};

const Steps = ({ title }) => {
  const { multiStep } = useContext(Context);
  return (
    <Box sx={style}>
      <Typography variant="h4" component={"h1"}>
        {title}
      </Typography>

      <Box sx={{ width: "80%" }}>
        <Stepper
          activeStep={multiStep}
          alternativeLabel
          style={{ paddingBlock: 30 }}
        >
          {steps?.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

Steps.propTypes = {
  title: PropTypes.string,
};

export default Steps;
