import React, { useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import useStyles from "./styles";
import { useTheme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MuiListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import Drawer from "@material-ui/core/Drawer";

const ListItemIcon = withStyles({
  root: {
    minWidth: 0,
    marginRight: "10px",
  },
})(MuiListItemIcon);

interface Props {
  window?: () => Window;
}

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

export default ({ window }: Props) => {
  const classes = useStyles();

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // Drawer mini Navigasi
  const drawer = (
    <div className={classes.rootDrawer}>
      <div className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Kategori
        </Typography>
        <div className={classes.underline}></div>
      </div>

      <Divider />

      <List component="div">
        {dummy.map((a: any, i: number) => {
          return (
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={AdapterLink}
              to={a.to}
            >
              <ListItemIcon>{a.icon}</ListItemIcon>
              <ListItemText primary={a.nama} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      <Grid item xs={2}>
        <div>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.iconMenu}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "left" : "right"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </div>
      </Grid>
    </div>
  );
};
