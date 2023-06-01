import { Box } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../contexts/CommonContext";
import { CompanyInfo } from "./CompanyInfo";
import { ArrowForward } from "@mui/icons-material";
import { NextButton } from "../../common/NextButon";
import "../../styles/style.css";

export const SelectedCompany = () => {
  const { selectedCo } = useContext(Context);
  return (
    <Box className="outerBox">
      <Box className="mainBox" sx={{ width: "100%" }}>
        <CompanyInfo companies={selectedCo} />
        <NextButton params={""} icon={<ArrowForward />}>
          Next
        </NextButton>
      </Box>
    </Box>
  );
};
