import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "860px",
      padding: "40px 60px",
    },
    result: {
      marginTop: "400px",
      textAlign: "center",
    },
    textBold: {
      fontWeight: "bold",
    },
  })
);

export default () => {
  const classes = useStyles();
  return (
    <div>
      <Header title="DDSolution" search minSearch />
      <div className={classes.content}>
        <Typography variant="h5">
          Search results for "Cara menggunakan menu inventori"
        </Typography>
        <div className={classes.result}>
          <Typography variant="h5" className={classes.textBold}>
            Tidak Ada Hasil
          </Typography>
          <Typography variant="subtitle1">
            Kami tidak menemukan yang Anda cari
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};
