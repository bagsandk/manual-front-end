import { withStyles, Button } from "@material-ui/core";

export const ButtonPlay = withStyles(() => ({
  root: {
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "30px",
    fontSize: "1rem",
    border: "2px solid #ffffff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#2BB339",
      border: "2px solid transparent",
    },
    "&:active": {
      backgroundColor: "#2BB339",
      border: "2px solid transparent",
    },
  },
}))(Button);
