import React, { useState } from "react";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { ButtonPlay } from "./../Button";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Dialog from "@material-ui/core/Dialog";
import useHover from "../../hooks/useHover";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "10px",
    },
    listItemText: {
      letterSpacing: "0.5px",
      fontSize: "1rem",
      textIndent: "40px",
      textAlign: "justify",
    },
    videoWrapper: {
      backgroundColor: "#000000",
    },
    videoContent: {
      margin: "4px 0",
    },
    imgHover: {
      marginTop: "20px",
      marginBottom: "40px",
      borderRadius: "25px",
      position: "relative",
      display: "flex",
      WebkitBoxAlign: "end",
      alignItems: "flex-end",
      WebkitTransition: "0.4s ease-out",
      transition: "0.4s ease-out",
      cursor: "pointer",
      "&::before": {
        content: `""`,
        position: "absolute",
        top: "0",
        left: "0",
        display: "block",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.2)",
        zIndex: "2",
        WebkitTransition: "0.5s",
        transition: "0.5s",
        opacity: "0",
        borderRadius: "25px",
      },
      "&:hover": {
        transform: "scale(1.01)",
        "&:before": {
          opacity: 1,
        },
      },
    },
    img: {
      borderRadius: "25px",
      width: "100%",
    },
    this: {
      width: "100%",
      height: "100%",
      OObjectFit: "cover",
      objectFit: "cover",
      position: "absolute",
      top: "0",
      left: "0",
    },
    btnHover: {
      paddingTop: "30%",
      display: "flex",
      justifyContent: "center",
      height: "100%",
      position: "relative",
      zIndex: 3,
      opacity: "0",
      WebkitTransform: "translateY(0px)",
      transform: "translateY(0px)",
      WebkitTransition: "0.5s",
      transition: "0.5s",
      "&:hover": {
        opacity: 1,
        webkitTransform: "translateY(-30px)",
        transform: " translateY(-30px)",
      },
    },
  })
);

interface Props {
  title: string;
  urlVideo: string;
}

export default ({ title, urlVideo }: Props) => {
  const classes = useStyles();

  const [hoverRef, isHovered] = useHover();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="caption"
        display="block"
        className={classes.listItemText}
      >
        {title}
      </Typography>
      <div ref={hoverRef} className={classes.imgHover}>
        <img src="/img/content.png" className={classes.img} />
        <div className={classes.this}>
          <div className={classes.btnHover}>
            <div>
              <ButtonPlay
                endIcon={<PlayCircleOutlineIcon />}
                onClick={handleClickOpen}
              >
                Tonton video
              </ButtonPlay>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.videoWrapper}>
          <ReactPlayer
            url={urlVideo}
            controls
            width="100%"
            height="calc(100vh - 200px)"
            className={classes.videoContent}
          />
        </div>
      </Dialog>
    </div>
  );
};
