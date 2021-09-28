import { cyan, grey, lightBlue, red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    common: {
      white: '#EEEEEE',
      black: '#23272A'
    },
    type: 'dark',
    primary: cyan,
    secondary: lightBlue,
    error: {
      main: red.A400
    },
    background: {
      default: grey.A400
    }
  }
});

export default theme;
