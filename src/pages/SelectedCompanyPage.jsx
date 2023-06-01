import { Container } from "@mui/material";
import Header from "../components/Header";
import Steps from "../components/Steps";
import { SelectedCompany } from "../components/SelectedCompany";

const title = 'Excellent choice! Lets keep going!'

export const SelectedCompanyPage = () => (
    <Container sx={{ padding: 3 }}>
      <Header />
      <Steps title={title} />
      <SelectedCompany/>
    </Container>
  );
  