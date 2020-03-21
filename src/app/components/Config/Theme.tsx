import { cyan, green, grey, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      white: '#EEEEEE',
      black: '#23272A'
    },
    type: 'dark',
    primary: cyan,
    secondary: green,
    error: {
      main: red.A400
    },
    background: {
      default: grey.A400
    }
  }
});

export default theme;
