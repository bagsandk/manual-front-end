import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      display: "block",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    underline: {
      display: "block",
      height: "5px",
      width: "100px",
      backgroundColor: "#1c1c1c",
      margin: "0px auto",
      borderRadius: "100px",
    },
  })
);

interface TitleProps {
  title?: string;
}

export default ({ title }: TitleProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4" align="center">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.underline}></div>
        </Grid>
      </Grid>
    </div>
  );
};
