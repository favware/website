import { cyan, green, grey, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      white: '#EEEEEE',
      black: '#23272A'
    },
    type: 'dark',
    primary: {
      main: green[800],
      light: cyan[300],
      dark: green[900],
      contrastText: grey[900]
    },
    secondary: {
      main: '#074A43',
      light: '#3C766E',
      dark: '#00221C',
      contrastText: '#EEEEEE'
    },
    error: {
      main: red.A400
    },
    background: {
      default: grey.A400
    }
  }
});

export default theme;
