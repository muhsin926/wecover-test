import { Box } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../contexts/CommonContext";
import { CompanyInfo } from "./CompanyInfo";
import "../../styles/style.css";

export const SelectedCompany = () => {
  const { selectedCo } = useContext(Context);
  return (
    <Box className="outerBox">
      <Box className="mainBox" sx={{ width: "100%" }}>
        <CompanyInfo companies={selectedCo} />
      </Box>
    </Box>
  );
};
