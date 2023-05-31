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

const style = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  width: "130px",
};

const ChassisNumber = () => {
  const [DOB, setDOB] = useState();
  return (
    <Box className="outerBox">
      <Box className="mainBox">
        <form action="">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={style}>
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
            <Grid item xs={12} md={6} sx={style}>
              <DatePicker
                label="Date of Birth"
                renderInput={(params) => <TextField {...params}  fullWidth/>}
                value={DOB}
                onChange={(newDate) => {
                  setDOB(newDate);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={style}>
              <TextField
                id="outlined-basic"
                label="Car Chassis No."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} sx={style}>
              <TextField
                id="outlined-basic"
                label="Car estimation Value"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
        <EstimateCarValue/>
        <Plans/>
        <NextButton params={''}>Check options</NextButton>
      </Box>
    </Box>
  );
};

export default ChassisNumber;
