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
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import CardApps from "../../components/CardApps";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage";
import TitleHome from "../../components/Title/TitleHome";
import { fetchAllApp, updateApp } from "../../service";
import Dialog from "./Dialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: "50px 80px",
      [theme.breakpoints.up("sm")]: {
        padding: "50px 60px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "70px 100px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "80px 150px",
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

  const [isLoad, setIsLoad] = useState(false);
  const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [itemDeleted, setItemDeleted] = useState<string[]>([]);
  const [itemUpdated, setItemUpdated] = useState<string[] | undefined>(
    undefined
  );

  const queryClient = useQueryClient();
  const { data, isLoading, isError, isSuccess, isFetching } = useQuery(
    "getApps",
    fetchAllApp
  );
  const mutation = useMutation((ap: any) => updateApp(ap.data, ap.code), {
    onSuccess: async (rst) => {
      await queryClient.fetchQuery("getApps");
      handleCloseDialog();
    },
    onError: (e) => {
      handleCloseDialog();
      alert(e);
    },
  });
  
  const handleAdd = () => {
    console.log("add");
  };
  const handleUpdate = async (data: any, code: any) => {
    await mutation.mutate({ data: data, code: code });
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

  const spacing = () => {
    if (isLg) {
      return 10;
    }
    if (isMd) {
      return 6;
    }
    if (isSm) {
      return 4;
    }
    return 0;
  };
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  let processing = isLoading || mutation.isLoading;
  return (
    <div>
      <Header title="DDSolution" />
      <HeroImage h2 title="Bagaimana kami dapat membantu Anda?" search />
      <div className={classes.content}>
        <TitleHome title="Aplikasi Kami" />
        <Grid
          spacing={spacing()}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {isSuccess &&
            data?.data?.map((d: any) => {
              return (
                <Grid item xs={12} sm={4}>
                  <CardApps
                    data={d}
                    handleOpenItemDialog={() => handleOpenItemDialog(d)}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
      <Fab
        onClick={handleOpenDialog}
        style={{ position: "fixed", bottom: 40, right: 40 }}
        color="primary"
        aria-label="add"
        title="Tambah App"
      >
        <AddIcon />
      </Fab>
      {openDialog && (
        <Dialog
          onAdd={handleAdd}
          onClose={handleCloseDialog}
          onUpdate={handleUpdate}
          open={openDialog}
          processing={processing}
          item={itemUpdated}
        />
      )}
      <Footer />
    </div>
  );
};
