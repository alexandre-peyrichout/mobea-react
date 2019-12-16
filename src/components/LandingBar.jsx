import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logo.png';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  login: {
    marginLeft: '80%'
  },
  logo: {
    width: '70px'
  },
  contain: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto'
  }
}));

export default function LandingBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.contain}>
            <img className={classes.logo} src={logo} alt="" />
          </div>
          <Button variant="outlined" color="inherit" className={classes.login}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
