import { createMuiTheme } from '@material-ui/core/styles';

const themeMobea = createMuiTheme({
  palette: {
    common: {
      black: 'rgba(0, 0, 0, 1)',
      white: 'rgba(255, 255, 255, 1)'
    },
    background: {
      paper: '#fff',
      default: '#fafafa'
    },
    secondary: {
      light: 'rgba(255, 255, 139, 1)',
      main: 'rgba(255, 221, 89, 1)',
      dark: 'rgba(229, 170, 75, 1)',
      contrastText: 'rgba(68, 51, 23, 1)'
    },
    primary: {
      light: 'rgba(255, 219, 122, 1)',
      main: 'rgba(229, 170, 75, 1)',
      dark: 'rgba(175, 123, 26, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  }
});

export default themeMobea;
