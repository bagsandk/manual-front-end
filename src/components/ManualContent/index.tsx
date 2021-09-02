import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import { ArrowRightAlt } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "10px",
      borderRadius: "10px",
      backgroundColor: theme.palette.background.paper,
    },
    listItem: {
      paddingLeft: 16,
      paddingRight: 16,
      [theme.breakpoints.up("sm")]: {
        paddingLeft: 10,
        paddingRight: 10,
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
    listItemText: {
      letterSpacing: "0.5px",
      fontSize: "1rem",
      paddingLeft: "8px",
    },
    link: {
      color: "#1c1c1c",
    },
  })
);

interface Props {
  title: string;
  urlTo: string;
}

export default ({ title, urlTo }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link component={RouterLink} to={urlTo} className={classes.link}>
        <ListItem className={classes.listItem}>
          <ArrowRightAlt />
          <Typography variant="h6" className={classes.listItemText}>
            {title}?
          </Typography>
        </ListItem>
      </Link>
    </div>
  );
};
