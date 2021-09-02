import { Grid, InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

interface HeroImageProps {
  search?: boolean;
  title: string;
  h2?: boolean;
  h3?: boolean;
}

export default ({
  search = false,
  title,
  h2 = false,
  h3 = false,
}: HeroImageProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} lg={10}>
          {h2 && (
            <Typography className={classes.titleh2} variant="h2" align="center">
              {title}
            </Typography>
          )}
          {h3 && (
            <Typography className={classes.titleh3} variant="h3" align="center">
              {title}
            </Typography>
          )}
        </Grid>

        {search && (
          <Grid item xs={10} sm={8} md={7} lg={5}>
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
