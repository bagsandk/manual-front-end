import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Grid, Link, ListItem } from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: "30px",
    },
    title: {
      fontWeight: 600,
    },
    link: {
      color: "#1c1c1c",
      float: "right",
      "&:hover": {
        color: "#2B67B3",
      },
    },
    linkItem: {
      padding: 0,
    },
  })
);

interface TitleManualProps {
  title?: string;
}

export default ({ title }: TitleManualProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Typography variant="h5" className={classes.title}>
            {title}?
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Link
            component={RouterLink}
            to="/assetpro/docs"
            className={classes.link}
          >
            <ListItem className={classes.linkItem}>
              <ArrowBackIosRoundedIcon fontSize="small" />
              <Typography variant="subtitle2">Kembali</Typography>
            </ListItem>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
