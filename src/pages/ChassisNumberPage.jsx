import { Container } from "@mui/material"
import Header from "../components/Header"
import Steps from "../components/Steps"
import ChassisNumber from "../components/ChassisNumber"

const title = "We want to know about you and your car"

const ChassisNumberPage = () => {
  return (
    <Container sx={{ padding: 3 }}>
      <Header/>
      <Steps title={title}/>
      <ChassisNumber/>
    </Container>
  )
}

export default ChassisNumberPage