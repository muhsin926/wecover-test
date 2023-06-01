import { Container } from "@mui/material";
import Header from "../components/Header";
import Steps from "../components/Steps";
import ChassisNumber from "../components/ChassisNumber";
import { ChatWithUs } from "../components/ChatWithUs";

const title = "We want to know about you and your car";

export const ChassisNumberPage = () => (
  <Container sx={{ padding: 3 }}>
    <Header />
    <Steps title={title} />
    <ChassisNumber />
    <ChatWithUs/>
  </Container>
);
