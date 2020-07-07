import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { 
  ThemeProvider
} from '@material-ui/core/styles';
import theme from '../mui/theme';

class BaseApp extends App {
  render () {
    const {Component, pageProps} = this.props;
    let material = '';

    return (
     <ThemeProvider theme={theme}>
       <CssBaseline />
       <Component {...pageProps} />
     </ThemeProvider>
    )
  }
}

export default BaseApp;