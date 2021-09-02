import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Avatar, Grid, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link as RouterLink } from "react-router-dom";
import SidebarMin from "../SidebarMin";
import { useManual } from "../../hooks/useManual";

interface Props {
  addLink1?: boolean;
  addLink2?: boolean;
  titleStart: string;
  titleLink1?: string;
  titleLink2?: string;
  link1?: any;
  link2?: any;
  titleEnd: string;
  minNavigasi?: boolean;
}

export default ({
  addLink1 = false,
  addLink2 = false,
  titleStart,
  titleLink1,
  titleLink2,
  link1,
  link2,
  titleEnd,
  minNavigasi = false,
}: Props) => {
  const classes = useStyles();
  const { app, manual, active } = useManual();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={10} sm={8}>
          <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
            <Link
              component={RouterLink}
              to={`/${app.name.toLowerCase()}`}
              color="inherit"
              className={classes.link}
            >
              <Avatar
                variant="square"
                className={classes.avatar}
                alt="Logo Assetpro"
                src="/img/logo-assetpro.png"
              />
              {app.name}
            </Link>

            {manual.name && (
              <Link
                component={RouterLink}
                to={`/${app.name.toLowerCase()}/${manual.name.toLowerCase()}`}
                color="inherit"
                className={classes.link}
              >
                {manual.name}
              </Link>
            )}
            {addLink2 && (
              <Link
                component={RouterLink}
                to={link2}
                color="inherit"
                className={classes.link}
              >
                {titleLink2}
              </Link>
            )}
          </Breadcrumbs>
        </Grid>

        <Grid item sm={4}>
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

        {/* Min Navigasi */}

        {minNavigasi && <SidebarMin />}
      </Grid>
    </div>
  );
};
