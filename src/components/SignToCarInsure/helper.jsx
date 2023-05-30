import styled from "@emotion/styled";
import { Button } from "@mui/material";

  export const InputButton = styled(Button)(() => ({
    borderRadius: 7,
    color: "#000",
    borderColor: "rgba(0,0,0,.2)",
    width: "100%",
    margin: "10px 0",
    display: "flex",
    justifyContent: "start",
  }));
  
  export const NextButton = styled(Button)(() => ({
    borderRadius: 100,
    color: "#000",
    border: "2px solid #67dc9b",
    marginTop: 30,
    padding: "5px 30px",
  }));

  export const radios = [
    { value: "Chassis_Number", label: "Enter Chassis Number" },
    { value: "Car_Details", label: "Enter your Car Details" },
    { value: "Vehicle_license", label: "Upload Your Vehicle license" },
  ];
  