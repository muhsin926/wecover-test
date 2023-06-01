import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import "../../styles/style.css";
import EstimateCarValue from "./EstimateCarValue";
import { Plans } from "./Plans";
import { NextButton } from "../../common/NextButon";

const ChassisNumber = () => {
  const [DOB, setDOB] = useState();
  return (
    <Box className="outerBox">
      <Box className="mainBox">
        <form action="">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ width: "130px" }}>
              <Typography variant="body2">
                My driving license is less than 3 years
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="yes"
                  name="radio-buttons-group"
                >
                  <div style={{ display: "flex", justifyContent: "start" }}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: "130px" }}>
              <DatePicker
                label="Date of Birth"
                renderInput={(params) => <TextField {...params} fullWidth />}
                value={DOB}
                onChange={(newDate) => {
                  setDOB(newDate);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: "130px" }}>
              <TextField
                id="outlined-basic"
                label="Car Chassis No."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ width: "130px" }}>
              <TextField
                id="outlined-basic"
                label="Car estimation Value"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
        <EstimateCarValue />
        <Plans />
        <NextButton step={1} params={"/selecting-insurence-companies"}>
          Check options
        </NextButton>
      </Box>
    </Box>
  );
};

export default ChassisNumber;
