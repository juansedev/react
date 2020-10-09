import { createMuiTheme } from "@material-ui/core/styles";

//import purple from "@material-ui/core/colors/purple";
//import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#764abc",
    },
  },
  background: {
    default: "#fff",
  },
  /*palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: "orange",
  },*/
});

export default theme;
