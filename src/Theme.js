import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple, amber } from '@material-ui/core/colors';

const theme = createMuiTheme(

{
  palette: {
    primary: purple,
    secondary: amber,
    background: {
      default: "#323230"
    }
  },
}

);

export default function Theme(props) {
  let { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
