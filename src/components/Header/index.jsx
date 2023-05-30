import { Box } from "@mui/material";
import { ArrowBack, Replay } from "@mui/icons-material";
import {
  NavButton,
  SmallNavBtn,
  hideSmallScreen,
  showSmallScreen,
} from "./customUI";
import logo from '../../assets/Logo/logo.svg'

const Header = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={hideSmallScreen}>
        <NavButton startIcon={<ArrowBack />}>Back</NavButton>
      </Box>

      <Box sx={showSmallScreen}>
        <SmallNavBtn>
          <ArrowBack />
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
    </Box>
  );
};

export default Header;
