import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


export const NavButton = styled(Button)(()=>({
    borderRadius: 100,
    color: '#000',
    backgroundColor: '#fff',
    padding: "5px 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)"
}))