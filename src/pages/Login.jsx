import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#F2A8A4',
      darker: '#242424',
    },
    neutral: {
      main: '#F2A8A4',
      contrastText: '#242424',
    },
  },
});


const Login = ()=>{
    return(
        <ThemeProvider theme={theme}>
      
        <div className="m-auto text-white text-xl flex justify-center bg-black p-10 rounded-xl">Hello</div>
        <div className="p-20 bg-white rounded-xl flex flex-col w-1/3">
            <h1 className=" text-peach text-xl w-fit">Login</h1>
            <TextField margin="normal" label="Email Address" size="small"/>
            <TextField label="Password" size="small"/>
            <br/>
            <Button variant="contained" margin="normal" size="small" className="w-20" style={
            {
                padding: '5px',
                color: 'white',
            }
            }>Sign In</Button>
        </div>
 
        </ThemeProvider>
    )
}

export default Login