import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Fingerprint, ArrowForward } from "@mui/icons-material";
import { InputButton, radios } from "./helper";
import { NextButton } from "../../common/NextButon";
import "../../styles/style.css";

const SignToCarInsure = () => {
  return (
    <Box className="outerBox">
      <Box className="mainBox">
        <Typography variant="subtitle2">Save your time by using </Typography>
        <div>
          <InputButton
            variant="outlined"
            startIcon={<Fingerprint />}
            sx={{
              padding: "10px 60px",
              justifyContent: "center",
              fontWeight: "bold",
              borderColor: "#000",
              fontSize: "16px",
            }}
          >
            Sign in with UAE PASS
          </InputButton>
        </div>

        <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,.5)" }}>
          or you can proceed with{" "}
        </Typography>

        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={radios[0].value}
            name="radio-buttons-group"
          >
            {radios.map((data) => (
              <InputButton key={data.value} variant="outlined">
                <FormControlLabel
                  value={data.value}
                  control={<Radio />}
                  label={data.label}
                />
              </InputButton>
            ))}
          </RadioGroup>
        </FormControl>
        <NextButton params={"chassis-number"} icon={<ArrowForward />}>
          Next
        </NextButton>
      </Box>
    </Box>
  );
};

export default SignToCarInsure;
