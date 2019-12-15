import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRouter } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import logo from '../assets/logo.png';

const useStyles = makeStyles(() => ({
  logo: {
    padding: '20px 5px',
    height: '60px',
    margin: 'auto',
    opacity: 0.5
  },
  bottomLinks: {
    margin: 'auto',
    padding: '10px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={3} spacing={1}>
        <Toolbar>
          <Link component={LinkRouter} to="/#" className={classes.bottomLinks}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </Toolbar>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Toolbar>
          <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
            CGU
          </Link>
          <Link className={classes.bottomLinks} component={LinkRouter} to="/faq">
            FAQ
          </Link>
          <Link className={classes.bottomLinks} component={LinkRouter} to="/politique">
            Politique de confidentialité
          </Link>
          <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
            Contact
          </Link>
          <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
            Site
          </Link>
        </Toolbar>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Toolbar>
          <Link component={LinkRouter} to="/#" className={classes.bottomLinks}>
            Copyright Mobea
          </Link>
        </Toolbar>
      </Grid>
    </Grid>
  );
}
