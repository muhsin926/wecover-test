import styled from "@emotion/styled";
import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)(() => ({
  borderRadius: 100,
  color: "#000",
  border: "2px solid #67dc9b",
  marginTop: 30,
  padding: "5px 30px",
}));

export const NextButton = (props) => {
  const { params, icon, children } = props;
  const navigate = useNavigate();
  return (
    <CustomButton
      variant="outlined"
      onClick={() => navigate(params)}
      endIcon={<ArrowForward/>}
    >
      {children}
    </CustomButton>
  );
};
