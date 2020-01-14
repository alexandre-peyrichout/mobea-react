import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logo.png';
import { Link as LinkRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  login: {
    marginRight: '2%',
    color: 'white',
    '&:hover': {
      background: 'rgba(229, 170, 75, 1)'
    }
  },
  logo: {
    width: '210px',
    marginLeft: '3%',
    marginTop: '6%'
  },
  contain: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto'
  },
  landingBar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: 'unset'
  }
}));

export default function LandingBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.landingBar} position="static" color="inherit">
        <Toolbar>
          <div className={classes.contain}>
            <img className={classes.logo} src={logo} alt="" />
          </div>
          <Link underline="none" className={classes.loginLinks} component={LinkRouter} to="/login">
            <Button Button variant="outlined" color="inherit" className={classes.login}>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
