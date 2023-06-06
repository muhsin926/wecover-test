import { Box, Container } from "@mui/material";
import { ArrowBack, Replay } from "@mui/icons-material";
import {
  NavButton,
  SmallNavBtn,
  hideSmallScreen,
  showSmallScreen,
} from "./customUI";
import logo from "../../assets/Logo/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <Box sx={hideSmallScreen}>
        <NavButton startIcon={<ArrowBack />} onClick={handleBackButtonClick}>
          Back
        </NavButton>
      </Box>

      <Box sx={showSmallScreen}>
        <SmallNavBtn>
          <ArrowBack onClick={handleBackButtonClick} />
        </SmallNavBtn>
      </Box>
      <Box>
        <img src={logo} alt="Logo" />
      </Box>
      <Box sx={hideSmallScreen}>
        <NavButton startIcon={<Replay />}>Start Over</NavButton>
      </Box>

      <Box sx={showSmallScreen}>
        <SmallNavBtn>
          <Replay />
        </SmallNavBtn>
      </Box>
    </Container>
  );
};

export default Header;
