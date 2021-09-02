import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { Avatar, Grid, IconButton, Link } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link as RouterLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "5px 20px",
      backgroundColor: "#2b67b3",
      [theme.breakpoints.up("sm")]: {
        padding: "4px 20px",
      },
    },
    toolbar: {
      margin: 0,
      padding: 0,
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: "6px",
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    },
    title: {
      paddingTop: "3px",
      flexGrow: 1,
      color: "#ffffff",
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    iconSearch: {
      color: "#ffffff",
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    search: {
      color: "#979797",
      position: "relative",
      borderRadius: "30px",
      backgroundColor: fade(theme.palette.common.white, 0.9),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.8),
      },
      marginLeft: 0,
      width: "100%",
      display: "none",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
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
      padding: theme.spacing(1.8),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
    inputRoot: {
      width: "100%",
      borderRadius: "25px",
    },

    searchBar: {
      color: "#979797",
      position: "relative",
      borderRadius: "25px",
      backgroundColor: fade(theme.palette.common.white, 0.9),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.8),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    searchIconBar: {
      right: 0,
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputInputBar: {
      padding: theme.spacing(1.3),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  })
);

interface Props {
  // Gunakan props search jika ingin menampilkan kolom search
  search?: boolean;
  minSearch?: boolean;
  title: string;
}

export default ({ search = false, minSearch = false, title }: Props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={5} sm={7} md={8} lg={9}>
          <Link component={RouterLink} to="/" underline="none">
            <Toolbar className={classes.toolbar}>
              <Avatar
                alt="Logo Assetpro"
                src="/img/logo.png"
                variant="rounded"
                className={classes.small}
              />
              <Typography className={classes.title} variant="h6">
                {title}
              </Typography>
            </Toolbar>
          </Link>
        </Grid>

        {minSearch && (
          <div className={classes.iconSearch}>
            <IconButton
              aria-label="search"
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <SearchIcon style={{ fontSize: 30 }} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div className={classes.searchBar}>
                <div className={classes.searchIconBar}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    input: classes.inputInputBar,
                    root: classes.inputRoot,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Menu>
          </div>
        )}

        {search && (
          <Grid item xs={7} sm={5} md={4} lg={3}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  input: classes.inputInput,
                  root: classes.inputRoot,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
