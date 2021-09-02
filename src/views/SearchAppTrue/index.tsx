import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import HeroImage from "../../components/HeroImage";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "720px",
      padding: "40px",
      [theme.breakpoints.up("xs")]: {
        padding: "50px 60px",
      },
      [theme.breakpoints.up("sm")]: {
        padding: "60px 80px",
      },
    },
    resultHeader: {
      fontSize: "1.8rem",
      fontWeight: 500,
      marginBottom: "80px",
    },
    result: {
      textAlign: "justify",
      margin: "40px 0",
      [theme.breakpoints.up("sm")]: {
        margin: "50px 0",
      },
      [theme.breakpoints.up("md")]: {
        margin: "60px 20px",
      },
      [theme.breakpoints.up("lg")]: {
        margin: "60px 40px",
      },
    },
    linkHeader: {
      marginBottom: "20px",
      color: "#2B67B3",
      fontWeight: 600,
    },
  })
);

const dummy = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mattis neque eu dictum neque urna. Id fermentum, porttitor mauris mauris scelerisque ut nunc, pharetra. Amet amet, lobortis nulla arcu, ac suscipit pellentesque id viverra. Et aenean sit neque pretium lorem velit est arcu, in. Consectetur ipsum ut ut vehicula tempor urna, enim justo, molestie. Eget id malesuada commodo suspendisse odio amet condimentum lacus. Posuere donec suspendisse eget quis. Egestas diam, sed sed ornare.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mattis neque eu dictum neque urna. Id fermentum, porttitor mauris mauris scelerisque ut nunc, pharetra. Amet amet, lobortis nulla arcu, ac suscipit pellentesque id viverra. Et aenean sit neque pretium lorem velit est arcu, in. Consectetur ipsum ut ut vehicula tempor urna, enim justo, molestie. Eget id malesuada commodo suspendisse odio amet condimentum lacus. Posuere donec suspendisse eget quis. Egestas diam, sed sed ornare.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mattis neque eu dictum neque urna. Id fermentum, porttitor mauris mauris scelerisque ut nunc, pharetra. Amet amet, lobortis nulla arcu, ac suscipit pellentesque id viverra. Et aenean sit neque pretium lorem velit est arcu, in. Consectetur ipsum ut ut vehicula tempor urna, enim justo, molestie. Eget id malesuada commodo suspendisse odio amet condimentum lacus. Posuere donec suspendisse eget quis. Egestas diam, sed sed ornare.",
  },
];

export default () => {
  const classes = useStyles();
  return (
    <div>
      <Header title="DDSolution" search minSearch />
      <HeroImage h3 title="What can we help you at Assetpro?" />
      <div className={classes.content}>
        <Typography variant="h5" className={classes.resultHeader}>
          Search results for "Cara menggunakan menu inventori"
        </Typography>
        <div className={classes.result}>
          <Grid
            container
            spacing={8}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {dummy.map((a, i) => {
              return (
                <Grid item sm={12} md={6}>
                  <Typography variant="h5" className={classes.linkHeader}>
                    <Link href="#">{a.title}</Link>
                  </Typography>

                  <Typography variant="body1">
                    {a.isi.length > 250
                      ? `${a.isi.substring(0, 250)}...`
                      : a.isi}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
};
