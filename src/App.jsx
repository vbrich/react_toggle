import { useState } from 'react';
import './App.css';
import {Card,Box,Container,CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

// Define theme settings
const light = {
  palette: {
    mode: "light",
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: '#444444',
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  }
};

const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: '#444444',
    },
    background: {
      default: '#1E1E1E',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#000', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  }
};

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  // This function triggered when switch is clicked
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? createTheme(dark): createTheme(light)}>

        <CssBaseline/>
        
        <Container>
          <div className="App">

          <Box component="div" p={1}></Box>

          <Card style={{ border: "none", boxShadow: "none" }}>
            <div className="Right">
              <IconButton 
                color="inherit" 
                aria-label="light" 
                size="small" 
                onClick={() => {
                  changeTheme();
                }}>
                {isDarkTheme ? <LightModeOutlinedIcon fontSize="inherit"/> : <NightlightOutlinedIcon fontSize="inherit"/>}  
              </IconButton>
            </div>
          </Card>

          <Box component="div" p={1}></Box>

          <Card style={{ border: "none", boxShadow: "none", height: "500px" }}>
            <p>Hello</p>
          </Card>

          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
