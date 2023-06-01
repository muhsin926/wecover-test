import { Container } from "@mui/material";
import Header from "../components/Header";
import { SelectingCompanies } from "../components/SelectingCompanies";
import Steps from "../components/Steps";

const title = "Let’s find the best insurance company for you!";

export const SelectingInsCoPage = () => (
  <Container sx={{ padding: 3 }}>
    <Header />
    <Steps title={title} />
    <SelectingCompanies />
  </Container>
);
