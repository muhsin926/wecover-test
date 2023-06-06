import Header from "../components/Header";
import { Container } from "@mui/material";
import Steps from "../components/Steps";
import SignToCarInsure from "../components/SignToCarInsure";
import { ChatWithUs } from "../components/ChatWithUs";

const title = "Let’s get your car insured!";

export const GetCarDetailsPage = () => (
    <><Header /><Container sx={{ padding: 3 }}>
    <Steps title={title} />
    <SignToCarInsure />
    <ChatWithUs />
  </Container></>
);
