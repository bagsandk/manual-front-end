import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  Card,
  CardContent,
  Link,
  ListItem,
  Typography,
} from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { ArrowRightAlt } from "@material-ui/icons";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import { Link as RouterLink } from "react-router-dom";
import useHover from "../../hooks/useHover";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "30px 0",
      padding: "40px 30px",
      borderRadius: "20px",
      boxShadow:
        "rgb(0 0 0 / 20%) 4px 4px 30px -10px, rgb(0 0 0 / 14%) 3px 4px 4px 0px, rgb(0 0 0 / 12%) 3px 2px 8px 0px",
      [theme.breakpoints.up("sm")]: {
        margin: "40px 0",
        padding: "10px 10px",
      },
      [theme.breakpoints.up("md")]: {
        margin: "40px 0",
        padding: "40px 30px",
      },
      [theme.breakpoints.up("lg")]: {
        margin: "40px 0",
        padding: "40px 30px",
      },
    },
    title: {
      padding: 0,
    },
    titleHeader: {
      paddingLeft: "8px",
      fontWeight: "bold",
      letterSpacing: "1px",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.2rem",
        letterSpacing: "0.5px",
        paddingLeft: "2px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
        letterSpacing: "1px",
        paddingLeft: "8px",
      },
    },
    content: {
      letterSpacing: "1px",
      margin: "20px 0",
    },
    link: {
      color: "#83B3EF",
    },
  })
);

interface Props {
  onClick: () => void;
  iconDoc?: boolean;
  iconFaq?: boolean;
  title: string;
  handleOpenItemDialog: () => void;
  content: string;
  link: string;
}

export default ({
  onClick,
  iconDoc,
  iconFaq,
  title,
  content,
  link,
  handleOpenItemDialog,
}: Props) => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  const [hoverRef, isHovered] = useHover();
  const [hoverRef1, isHovered1] = useHover();

  return (
    <Card style={{ position: "relative" }} className={classes.root}>
      <div ref={hoverRef} style={{ position: "absolute", right: 40, top: 10 }}>
        <VisibilityIcon color={isHovered ? "primary" : "action"} />
      </div>
      <div
        onClick={handleOpenItemDialog}
        ref={hoverRef1}
        style={{ position: "absolute", right: 10, top: 10 }}
      >
        <EditIcon color={isHovered1 ? "primary" : "action"} />
      </div>
      <CardContent>
        <ListItem className={classes.title}>
          {iconDoc && <AssignmentOutlinedIcon fontSize="large" />}
          {iconFaq && <ChatBubbleOutlineOutlinedIcon fontSize="large" />}

          <Typography variant="h5" className={classes.titleHeader}>
            {title}
          </Typography>
        </ListItem>
        <Typography
          className={classes.content}
          variant="h6"
          color="textSecondary"
        >
          {content}
        </Typography>
        <Link
          onClick={onClick}
          component={RouterLink}
          to={link}
          className={classes.link}
          variant="subtitle2"
        >
          <ListItem className={classes.title}>
            Read more
            <ArrowRightAlt />
          </ListItem>
        </Link>
      </CardContent>
    </Card>
  );
};
