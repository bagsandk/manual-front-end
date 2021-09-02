import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "15px 0",
      backgroundColor: "#2b67b3",
    },
    title1: {
      paddingTop: "3px",
      flexGrow: 1,
      color: "#d8d7d7",
      display: "inline",
      letterSpacing: "1px",
    },
    title2: {
      paddingTop: "3px",
      flexGrow: 1,
      color: "#ffffff",
      display: "inline",
      letterSpacing: "1px",
    },
  })
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Typography className={classes.title1} variant="caption">
              &copy; 2021{" "}
            </Typography>
            <Typography className={classes.title2} variant="caption">
              PT Darma Digital Solution
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
