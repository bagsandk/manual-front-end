import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import { createStyles, Grid, Theme } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    padding: "40px",
    minHeight: "860px",
    [theme.breakpoints.up("sm")]: {
      padding: "30px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "60px",
    },
  },
  gridContent: {
    paddingTop: "40px",

    [theme.breakpoints.up("sm")]: {
      paddingTop: "40px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "40px",
    },
  },
  isiContent: {
    borderRadius: "8px",
    backgroundColor: "#F6F6F6",
    padding: "40px",
  },
}));

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Header title="DDSolution" minSearch />
      <div className={classes.content}>
        <Breadcrumb
          minNavigasi
          titleStart="Assetpro"
          addLink1
          titleLink1="Manual"
          link1="/assetpro"
          titleEnd="Documentation"
        />
        <Grid
          className={classes.gridContent}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={4} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={8} md={9} className={classes.isiContent}>
            <main>{children}</main>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
};
