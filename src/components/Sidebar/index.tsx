import React from "react";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { NavLink, NavLinkProps } from "react-router-dom";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import MuiListItemIcon from "@material-ui/core/ListItemIcon";
import { useQuery, useQueryClient } from "react-query";
import {
  fetchAllCategories,
  fetchCategoriesByManual,
} from "../../service/server/categories";
import { useManual } from "../../hooks/useManual";
import useHover from "../../hooks/useHover";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { KategoriContext } from "../../views/AssetproDocs";

const ListItemIcon = withStyles({
  root: {
    minWidth: 0,
    marginRight: "10px",
  },
})(MuiListItemIcon);

const AdapterLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => <NavLink innerRef={ref as any} {...props} />
);

const dummy = [
  {
    idKategori: "01",
    nama: "Gudang",
    to: "/assetpro/docs/gudang",
    icon: <DashboardRoundedIcon />,
    content: {
      idContent: "103",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit-3",
    },
  },
  {
    idKategori: "02",
    nama: "Pembelian",
    to: "/assetpro/docs/pembelian",
    icon: <DashboardRoundedIcon />,
  },
  {
    idKategori: "03",
    nama: "Peminjaman",
    to: "/assetpro/docs/peminjaman",
    icon: <DashboardRoundedIcon />,
  },
  {
    idKategori: "04",
    nama: "Perbaikan",
    to: "/assetpro/docs/perbaikan",
    icon: <DashboardRoundedIcon />,
  },
];

export default () => {
  const classes = useStyles();
  const { handleOpenDialog,openDialog } = useContext(KategoriContext);
  const { manual } = useManual();
  const { data, isLoading } = useQuery("fetchAllCategoriesByManual", () =>
    fetchCategoriesByManual(manual.code)
  );
  const [hoverRef, isHovered] = useHover();
  console.log('op',openDialog)
  if (isLoading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" className={classes.title}>
          Kategori
        </Typography>
        <Button
          color={"primary"}
          onClick={handleOpenDialog}
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
      <div className={classes.underline}></div>

      <List>
        {dummy.map((a: any, i: number) => {
          return (
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EditIcon style={{ marginRight: 5 }} color="primary" />
              <ListItem
                key={i}
                activeClassName={classes.activeListItem}
                className={classes.listItem}
                component={AdapterLink}
                to={a.to}
              >
                <ListItemIcon>{a.icon}</ListItemIcon>
                <Typography variant="h6">{a.nama}</Typography>
              </ListItem>
            </div>
          );
        })}
      </List>
    </div>
  );
};
