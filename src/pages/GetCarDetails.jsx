import Header from '../components/Header'
import { Box } from '@mui/material'
import Steps from '../components/Steps'
import SignToCarInsure from '../components/SignToCarInsure'

const GetCarDetails = () => {
  return (
    <Box sx={{padding: 3}} className='backgroundColor' >
    <Header/>
    <Steps/>
    <SignToCarInsure/>
    </Box>
  )
}

export default GetCarDetails