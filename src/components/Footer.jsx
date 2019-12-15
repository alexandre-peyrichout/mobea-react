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
    opacity: 0.5,
    filter: 'grayscale(1)'
  },
  bottomLinks: {
    margin: 'auto',
    padding: '0 10px',
    color: 'grey'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={3} spacing={1}>
        <Link component={LinkRouter} to="/#" className={classes.bottomLinks}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
              CGU
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Link className={classes.bottomLinks} component={LinkRouter} to="/faq">
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link className={classes.bottomLinks} component={LinkRouter} to="/politique">
              Confidentialité
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
              Site
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Link component={LinkRouter} to="/#" className={classes.bottomLinks}>
          Copyright Mobea
        </Link>
      </Grid>
    </Grid>
  );
}
