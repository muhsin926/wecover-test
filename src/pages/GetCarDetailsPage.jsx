import Header from "../components/Header";
import { Container } from "@mui/material";
import Steps from "../components/Steps";
import SignToCarInsure from "../components/SignToCarInsure";

const title = "Let’s get your car insured!";

export const GetCarDetailsPage = () => (
  <Container sx={{ padding: 3 }}>
    <Header />
    <Steps title={title} />
    <SignToCarInsure />
  </Container>
);
