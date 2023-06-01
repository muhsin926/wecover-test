import { Box } from '@mui/material'
import chatImg from '../../assets/Images/Mask group.png'

export const ChatWithUs = () => {
  return (
    <Box sx={{ cursor: 'pointer', position: 'fixed', right: 20, bottom: 20}}>
        <img src={chatImg} alt="" />
    </Box>
  )
}
