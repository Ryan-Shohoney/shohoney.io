import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, teal, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: teal,
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;