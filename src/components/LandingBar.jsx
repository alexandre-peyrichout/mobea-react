import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.png";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";

import DehazeIcon from "@material-ui/icons/Dehaze";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  logo: {
    width: "210px",
    marginLeft: "3%",
    marginTop: "6%"
  },
  contain: {
    display: "flex",
    alignItems: "center",
    marginRight: "auto"
  },
  landingBar: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "unset"
  }
}));

function LandingBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (right, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [right]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link underline="none" href="#notreHistoire">
          <ListItem button>
            <ListItemText primary="Notre Histoire" />
          </ListItem>
        </Link>

        <Link underline="none" href="#fonctionnalités">
          <ListItem button>
            <ListItemText primary="Fonctionnalités" />
          </ListItem>
        </Link>

        <Link underline="none" href="#équipe">
          <ListItem button>
            <ListItemText primary="L'équipe" />
          </ListItem>
        </Link>
      </List>

      <Link underline="none" href="/admin">
        <ListItem button>
          <ListItemText primary="Admin" />
        </ListItem>
      </Link>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.landingBar} position="static" color="inherit">
        <Toolbar>
          <div className={classes.contain}>
            <img className={classes.logo} src={logo} alt="" />
          </div>
          <DehazeIcon onClick={toggleDrawer("right", true)} edge="end" className={classes.menuButton} color="inherit">
            <MenuIcon />
          </DehazeIcon>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer("right", false)}>
            {sideList("right")}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default LandingBar;
