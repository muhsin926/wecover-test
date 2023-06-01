import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordion } from "./constant";

export const SideBar = () => {
  return (
    <>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Insurance Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Third-Party" />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Comprehensive"
              />
            </FormGroup>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Sort By</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={"low-to-high"}
              >
                <FormControlLabel
                  value="low-to-high"
                  control={<Radio />}
                  label="Price, low to high"
                />
                <FormControlLabel
                  value="high-to low"
                  control={<Radio />}
                  label="price, high to low"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
      {accordion.map((data, i) => (
        <Accordion key={data} style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i + 3}a-content`}
            id={`panel${i + 3}a-header`}
          >
            <Typography>{data}</Typography>
          </AccordionSummary>
          <AccordionDetails>{/* show code after */}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
