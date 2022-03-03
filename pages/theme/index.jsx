import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      light: '#5b5b5b',
      main: '#e9e9e9',
      dark: '#323232',
      none: 'transparent',
    },
    secondary: {
      light: '#ff6d00bd',
      main: '#ff6d00',
      dark: '#ff6d00bd',
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },

});

export default theme