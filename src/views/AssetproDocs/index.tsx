import { Button } from "@material-ui/core";
import { isError, useQuery } from "react-query";
import { Redirect } from "react-router";
import ManualContent from "../../components/ManualContent";
import TitleManual from "../../components/Title/TitleManual";
import { useManual } from "../../hooks/useManual";
import AddIcon from "@material-ui/icons/Add";
import Layout from "../../layout";
import Dialog from "./Dialog";
import DialogKategori from "./DialogKategori";

import {
  fetchAllContent,
  fetchContentsByManualCode,
} from "../../service/server/content";
import useHover from "../../hooks/useHover";
import React, { useState } from "react";
import { createContext } from "react";

const dummy = [
  {
    idContent: "101",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    kategori: "gudang",
  },
  {
    idContent: "102",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    kategori: "pembelian",
  },
  {
    idContent: "103",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    kategori: "peminjaman",
  },
];

export default () => {
  const { manual } = useManual();
  if (manual.code == undefined) {
    return <Redirect to={"/"} />;
  }
  const [hoverRef, isHovered] = useHover();
  const { data, isLoading, isFetched } = useQuery(
    ["fetchAllContentByManual", manual.code],
    () => fetchContentsByManualCode(manual.code)
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

  return (
    <KategoriProvider>
      <Layout>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <TitleManual title="Semua Konten" />
          <Button
            onClick={handleOpenDialog}
            color={"primary"}
            ref={hoverRef}
            style={{
              marginLeft: 20,
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
            }}
          >
            <AddIcon color={isHovered ? "primary" : "action"} />
          </Button>
        </div>
        {isLoading && <p>loading content ... </p>}
        {dummy.map((a: any, i: number) => {
          return (
            <ManualContent title={a.title} urlTo="/assetpro/docs/gudang/1" />
          );
        })}
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
      </Layout>
    </KategoriProvider>
  );
};

interface initialValues {
  openDialog: boolean;
  itemDeleted: string[];
  itemUpdated: string[] | undefined;
  handleAdd: () => void;
  handleUpdate: () => void;
  handleDelete: () => void;
  handleCloseItemDialog: () => void;
  handleCloseConfirmDeleteDialog: () => void;
  handleCloseDialog: () => void;
  handleOpenConfirmDeleteDialog: (ids: any) => void;
  handleOpenItemDialog: (item: any) => void;
  handleOpenDialog: () => void;
}
const KategoriContext = createContext({} as initialValues);
interface Props {
  children: React.ReactNode;
}
const KategoriProvider = ({ children }: Props) => {
  const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
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
    setItemDeleted(Ids as string[]);
    setOpenConfirmDeleteDialog(true);
  };

  const handleOpenItemDialog = (item?: any) => {
    setItemUpdated(item);
    setOpenDialog(true);
  };
  const handleOpenDialog = () => {
    setItemUpdated(undefined);
    setOpenDialog(true);
  };
  console.log(openDialog)
  return (
    <KategoriContext.Provider
      value={{
        openDialog,
        itemDeleted,
        itemUpdated,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleCloseItemDialog,
        handleCloseConfirmDeleteDialog,
        handleCloseDialog,
        handleOpenConfirmDeleteDialog,
        handleOpenItemDialog,
        handleOpenDialog,
      }}
    >
      {children}
      <DialogKategori
        onAdd={handleAdd}
        onClose={handleCloseDialog}
        onUpdate={handleUpdate}
        open={openDialog}
        processing={false}
        item={itemUpdated}
      />
    </KategoriContext.Provider>
  );
};
export { KategoriContext };
