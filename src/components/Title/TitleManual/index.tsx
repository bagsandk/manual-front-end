import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

import { FindInPage } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: "30px",
    },
    title: {
      padding: 0,
    },
    titleIcon: {
      marginRight: "4px",
    },
    titleHeader: {
      letterSpacing: "1px",
      fontWeight: "bold",
    },
  })
);

interface TitleManualProps {
  title: string;
}

export default ({ title }: TitleManualProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ListItem className={classes.title}>
        <FindInPage className={classes.titleIcon} />
        <Typography variant="h6" className={classes.titleHeader}>
          {title}
        </Typography>
      </ListItem>
    </div>
  );
};
