import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import { Avatar, Grid, Toolbar, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    paddingBottom: "20px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    padding: 0,
    flexDirection: "row-reverse",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "860px",
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
      marginBottom: "60px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: "bold",
      whiteSpace: "nowrap",
    },
    line: {
      height: "8px",
      width: "100%",
      margin: "0 20px",
      borderBottom: "1px solid grey",
    },
    result: {
      margin: "40px 0",
      textAlign: "justify",
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
    toolbar: {
      margin: 0,
      padding: 0,
      width: "100%",
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    logo: {
      margin: "0 15px 0 20px",
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    expandContent: {
      margin: "0 35px 0 40px",
    },
    isiContent: {},
  })
);

const dummy = [
  {
    logo: "/img/logo-assetpro.png",
    nama: "Assetpro Web",
    content: [
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
    ],
  },
  {
    logo: "/img/logo-erecruitment.png",
    nama: "E-Recruitment",
    content: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        isi:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mattis neque eu dictum neque urna. Id fermentum, porttitor mauris mauris scelerisque ut nunc, pharetra. Amet amet, lobortis nulla arcu, ac suscipit pellentesque id viverra. Et aenean sit neque pretium lorem velit est arcu, in. Consectetur ipsum ut ut vehicula tempor urna, enim justo, molestie. Eget id malesuada commodo suspendisse odio amet condimentum lacus. Posuere donec suspendisse eget quis. Egestas diam, sed sed ornare.",
      },
    ],
  },
];

export default () => {
  const classes = useStyles();

  return (
    <div>
      <Header title="DDSolution" search minSearch />
      <div className={classes.content}>
        <Typography variant="h5" className={classes.resultHeader}>
          Search results for "Cara menggunakan menu inventori"
        </Typography>
        <div className={classes.result}>
          {dummy.map((a, i) => {
            return (
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Toolbar className={classes.toolbar}>
                    <Avatar
                      alt="Logo Assetpro"
                      src={a.logo}
                      variant="rounded"
                      className={classes.logo}
                    />

                    <Typography className={classes.heading}>
                      {a.nama}
                    </Typography>

                    <div className={classes.line}></div>
                    <Avatar className={classes.small}>
                      {a.content.length}
                    </Avatar>
                  </Toolbar>
                </AccordionSummary>
                <AccordionDetails className={classes.expandContent}>
                  <Grid
                    container
                    spacing={6}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    {a.content.map((b, i) => {
                      return (
                        <Grid item sm={12} md={6}>
                          <Typography
                            variant="h5"
                            className={classes.linkHeader}
                          >
                            <Link href="#">{b.title}?</Link>
                          </Typography>
                          <Typography
                            variant="body1"
                            className={classes.isiContent}
                          >
                            {b.isi.length > 250
                              ? `${b.isi.substring(0, 250)}...`
                              : b.isi}
                          </Typography>
                        </Grid>
                      );
                    })}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
