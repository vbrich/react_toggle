import profile from "./assets/logo.gif";
import { useState } from 'react';
import './App.css';
import {
  Card,
  CardHeader,
  Switch,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline
} from '@mui/material';

import {createTheme, ThemeProvider} from '@mui/material/styles';

// Define theme settings

const light = {
  palette: {
    mode: "light"
  }
};

const dark = {
  palette: {
    mode: "dark"
  }
};

function App() {

  // Light theme is default
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
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
            <Box component="div" p={4}></Box>
            <Card>
              <CardHeader action={<FormGroup>
                <FormControlLabel control={
                  <Switch checked={isDarkTheme} onChange={changeTheme}/>
                } label = "Dark Theme"/>
              </FormGroup>}/>
              <Typography variant = "h3" component = "h3" >
                <div className="container">
                  <div className="hPage">
                    Home Page
                  </div>
                  Hello World!
                  <br />
                </div>
              </Typography>
              <img src={profile} alt="profile" className="App-logo" />
                <Typography className="body1" variant="body1">
                  Dark mode is {isDarkTheme ? "On" : "Off"}
                </Typography>
            </Card>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
