import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const drawerWidth = 260;

export default makeStyles((theme: Theme) =>
  createStyles({
    iconMenu: {
      position: "absolute",
      top: -15,
      right: -0,
      color: "#1c1c1c",
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    title: {
      fontWeight: "bold",
      margin: 0,
      padding: 0,
    },
    underline: {
      display: "block",
      height: "3px",
      width: "40px",
      backgroundColor: "#1c1c1c",
      borderRadius: "100px",
    },
    listItem: {
      borderRadius: "8px",
      marginBottom: "10px",
      color: "#1c1c1c",
      borderLeft: "6px solid transparent",
      "&:hover": {
        borderRadius: "8px",
        borderLeft: "6px solid #2b67b3",
        backgroundColor: "#F6F6F6",
      },
    },
    activeListItem: {
      borderRadius: "8px",
      borderLeft: "6px solid #2b67b3",
      backgroundColor: "#F6F6F6",
      color: "#2B67B3",
    },
    rootDrawer: {
      padding: "10px",
    },
    linkDrawer: {
      color: "#1c1c1c",
      "&:hover": {
        textDecoration: "none",
      },
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  })
);
