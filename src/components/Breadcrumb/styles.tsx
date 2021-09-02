import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        position: "relative",
      },
    },
    link: {
      display: "flex",
    },
    linkBread: {
      fontWeight: "bold",
    },
    avatar: {
      marginRight: theme.spacing(1.5),
      width: 20,
      height: 20,
    },
    bread: {
      left: 0,
      position: "relative",
      marginBottom: "10px",
      [theme.breakpoints.up("sm")]: {
        marginBottom: 0,
      },
    },
    search: {
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
      color: "#979797",
      position: "relative",
      borderRadius: "30px",
      backgroundColor: fade(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.8),
      },
      width: "100%",
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
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
      padding: theme.spacing(2.2),
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
