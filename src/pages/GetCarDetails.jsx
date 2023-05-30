import Header from "../components/Header";
import { Container } from "@mui/material";
import Steps from "../components/Steps";
import SignToCarInsure from "../components/SignToCarInsure";

const GetCarDetails = () => {
  return (
    <main className="backgroundColor">
    <Container sx={{ padding: 3 }} >
      <Header />
      <Steps />
      <SignToCarInsure />
    </Container>
    </main>
  );
};

export default GetCarDetails;
