import { cyan, grey, lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: cyan,
    secondary: lightBlue,
    background: {
      default: grey[900]
    }
  }
});

export default theme;
