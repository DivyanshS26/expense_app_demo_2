import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#4f83cc',
      main: '#61C0A9',
      dark: '#002f6c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9fffe0',
      main: '#69f0ae',
      dark: '#2bbd7e',
      contrastText: '#000',
    },
      openTitle: '#002f6c',
      protectedTitle: '#2bbd7e',
      type: 'light'
    }
  })

  export default theme