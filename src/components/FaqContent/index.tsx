import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "10px",
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow:
        "rgb(0 0 0 / 20%) 4px 4px 30px -10px, rgb(0 0 0 / 14%) 3px 4px 4px 0px, rgb(0 0 0 / 12%) 3px 2px 8px 0px",
    },
    titleContent: {
      marginBottom: "15px",
      textDecoration: "underline",
    },
    listItemText: {
      letterSpacing: "0.5px",
      fontSize: "1rem",
      textIndent: "40px",
      textAlign: "justify",
    },
  })
);

interface Props {
  title: string;
}

export default ({ title }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.titleContent}>
        Answer
      </Typography>
      <Typography
        variant="caption"
        display="block"
        className={classes.listItemText}
      >
        {title}
      </Typography>
    </div>
  );
};
