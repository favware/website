import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      white: '#EEEEEE',
      black: '#23272A'
    },
    type: 'dark',
    primary: {
      main: '#388E3C',
      light: '#52C7B8',
      dark: '#00675B',
      contrastText: '#222222'
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
      default: '#23272A'
    }
  }
});

export default theme;
