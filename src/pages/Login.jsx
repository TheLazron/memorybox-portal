import { TextField } from "@mui/material"
import { Button, Card } from "@mantine/core";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import {Typography} from "@mui/material";
import { MantineProvider } from "@mantine/core";


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
  typography: {
    fontFamily: [
      'Inter', 
      'sans-serif',
  ].join(','),
  
    fontSize: 10,
}
  
});


const Login = ()=>{
    return(
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <div className="flex justify-between h-screen">
        <div className="flex-1 flex justify-center items-center">
        <div className="m-auto text-white text-xl flex justify-center bg-black p-10 rounded-xl w-fit">Hello</div>
        </div>
        <Typography variant="h3" className="flex-1 flex justify-center items-center">
        <div>
        <Card className="w-fit p-10 px-20">
        <div className="py-20 bg-white rounded-xl flex flex-col">
            <h1 className=" text-peach text-xl w-max">Login</h1>
            
            <TextField margin="normal" label="Email Address" size="normal"/>
            <TextField label="Password" size="normal"/>
            <br/>
            <Button>Sign In</Button>
            
          
        </div>
        </Card>
        </div>
        </Typography>

        </div>
 
        </MantineProvider>
    )
}

export default Login