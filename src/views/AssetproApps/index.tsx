import {
  createStyles,
  Fab,
  Grid,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import { useQuery } from "react-query";
import { Redirect, useParams } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";
import CardDocs from "../../components/CardDocs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Dialog from "./Dialog";
import HeroImage from "../../components/HeroImage";
import { useManual } from "../../hooks/useManual";
import { fetchManualsByApp } from "../../service/server/manual";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: "40px 80px",
      minHeight: "600px",
      [theme.breakpoints.up("sm")]: {
        padding: "40px 60px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "50px 100px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "60px 150px",
      },
    },
  })
);

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const { app, handleManual, active } = useManual();
  const { appName }: { appName: string } = useParams();
  if (app.code == undefined) {
    console.log(appName);
    return <Redirect to={"/"} />;
  }
  const { data, isLoading, isError, isSuccess, isFetching, error } = useQuery(
    ["getManualByCode", app.code],
    () => fetchManualsByApp(app.code)
  );
  const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [itemDeleted, setItemDeleted] = useState<string[]>([]);
  const [itemUpdated, setItemUpdated] = useState<string[] | undefined>(
    undefined
  );

  const handleAdd = () => {
    console.log("add");
  };
  const handleUpdate = () => {
    console.log("update");
  };
  const handleDelete = () => {
    console.log("delete");
  };
  const handleCancelSelected = () => {
    setSelected([]);
  };
  const handleCloseConfirmDeleteDialog = () => {
    setOpenConfirmDeleteDialog(false);
  };

  const handleCloseItemDialog = () => {
    setItemUpdated(undefined);
    setOpenDialog(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenConfirmDeleteDialog = (Ids: string[] | number[]) => {
    console.log("hhhhhhhhhhhhh");
    setItemDeleted(Ids as string[]);
    setOpenConfirmDeleteDialog(true);
  };

  const handleOpenItemDialog = (item?: any) => {
    setItemUpdated(item);
    setOpenDialog(true);
  };
  const handleOpenDialog = (item?: any) => {
    setItemUpdated(undefined);
    setOpenDialog(true);
  };

  const handleSelectedChange = (newSelected: string[]) => {
    setSelected(newSelected);
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  const spacing = () => {
    if (isLg) {
      return 10;
    }
    if (isMd) {
      return 8;
    }
    if (isSm) {
      return 6;
    }
    return 0;
  };

  return (
    <div>
      <Header title="DDSolution" minSearch />
      <HeroImage h2 title="Apa yang bisa kami bantu di Assetpro?" />
      <div className={classes.content}>
        <Breadcrumb titleStart="Assetpro" titleEnd="Manual" />
        <Grid
          spacing={spacing()}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {isSuccess &&
            data?.data != null &&
            data?.data.map((d: any) => {
              return (
                <Grid item xs={12} sm={6}>
                  <CardDocs
                    onClick={() => handleManual(d)}
                    iconDoc
                    link={`${appName}/${d.Name.toLowerCase()}`}
                    title={d.Name}
                    content={d.Desc}
                    handleOpenItemDialog={() => handleOpenItemDialog(d)}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
      <Fab
        style={{ position: "fixed", bottom: 40, right: 40 }}
        color="primary"
        aria-label="add"
        title="Tambah Manual"
        onClick={handleOpenDialog}
      >
        <AddIcon />
      </Fab>
      <Footer />
      {openDialog && (
        <Dialog
          onAdd={handleAdd}
          onClose={handleCloseDialog}
          onUpdate={handleUpdate}
          open={openDialog}
          processing={false}
          item={itemUpdated}
        />
      )}
    </div>
  );
};
