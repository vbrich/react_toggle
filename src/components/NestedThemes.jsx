import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, orange } from '@mui/material/colors';
import { Box } from '@mui/material';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green[500],
    },
  },
});

export default function NestedThemes() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Box component="div" p={4} sx={{ backgroundColor: 'primary.light'}}>
        <Checkbox defaultChecked />
        Testing  
      </Box>
      <ThemeProvider theme={innerTheme}>
        <Box component="div" p={4} sx={{ backgroundColor: 'primary.dark'}}>
          <Checkbox defaultChecked />
          Testing  
        </Box>
      </ThemeProvider>
    </ThemeProvider>
  );
}