import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";

const steps = ["1", "2", "3", "4", "5"];
const stepValue = 0;
const Steps = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Typography variant="h4" component={"h1"}>
        Let’s get your car insured!
      </Typography>
      <Box sx={{ width:"80%" }}>
        <Stepper
          activeStep={stepValue}
          alternativeLabel
          style={{ paddingBlock: 30 }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default Steps;
