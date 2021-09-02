import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundImage: `url("/img/bg-header.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: "60px",
      [theme.breakpoints.up("sm")]: {
        padding: "80px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "120px",
      },
    },
    titleh2: {
      color: "#1c1c1c",
      fontSize: "3rem",
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        fontSize: "4rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "5rem",
      },
    },
    titleh3: {
      color: "#1c1c1c",
      fontWeight: "bold",
    },
    search: {
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
      color: "#979797",
      position: "relative",
      marginTop: "25px",
      borderRadius: "30px",
      backgroundColor: fade(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.8),
      },
      width: "100%",
    },
    searchIcon: {
      right: 0,
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputInput: {
      padding: theme.spacing(2.5),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
    inputRoot: {
      width: "100%",
    },
  })
);
