import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Link as RouterLink } from "react-router-dom";
import useHover from "../../hooks/useHover";
import { useManual } from "../../hooks/useManual";
import useStyles from "./styles";

export default ({ data, handleOpenItemDialog }: any) => {
  const classes = useStyles();
  const [hoverRef, isHovered] = useHover();
  const { handleApp } = useManual();
  return (
    <Card style={{ position: "relative" }} className={classes.root}>
      <div ref={hoverRef} onClick={handleOpenItemDialog} style={{ position: "absolute", right: 10, top: 10 }}>
        <EditIcon color={isHovered ? "primary" : "action"} />
      </div>
      <CardContent className={classes.cardContent}>
        <CardActionArea
          onClick={() => handleApp(data)}
          component={RouterLink}
          to={`/${data.Name.toLowerCase()}`}
        >
          <Avatar
            className={classes.avatar}
            alt="Card Assetpro"
            src={`/img/${data.Logo}`}
            variant="rounded"
          />
          <Typography className={classes.caption1} variant="h4" align="center">
            {data.Name}
          </Typography>
          <Typography
            className={classes.caption2}
            variant="subtitle2"
            align="center"
          >
            {"Manual"}
          </Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};
