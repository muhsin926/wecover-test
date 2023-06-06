import styled from "@emotion/styled";
import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../contexts/CommonContext";
import { toast } from "react-hot-toast";

export const CustomButton = styled(Button)(() => ({
  borderRadius: 100,
  color: "#000",
  border: "2px solid #67dc9b",
  marginTop: 30,
  padding: "5px 30px",
  textTransform: "capitalize",
}));

export const NextButton = (props) => {
  const { params, children, step, radio } = props;
  const { setMultiStep } = useContext(Context);
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (radio) {
      radio == "Chassis_Number" ? navigate(params) : toast.error("Invalid");
    } else {
      step && setMultiStep(step);
      navigate(params);
    }
  };
  return (
    <CustomButton
      variant="outlined"
      onClick={handleOnClick}
      endIcon={<ArrowForward />}
    >
      {children}
    </CustomButton>
  );
};

NextButton.propTypes = {
  params: PropTypes.string,
  children: PropTypes.node,
  step: PropTypes.number,
  radio: PropTypes.string,
};
