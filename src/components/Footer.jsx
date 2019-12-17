import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
import logo from '../assets/logo.png';

const useStyles = makeStyles(theme => ({
  logo: {
    height: '60px',
    opacity: 0.5,
    filter: 'grayscale(1)'
  },
  flexItem: {
    minHeight: '100%',
    padding: '5px 0px',

    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px'
    }
  },
  bottomLinks: {
    fontSize: 'calc(0.5rem + 0.5vw)',
    color: 'darkgrey',
    '&:hover': {
      color: 'grey'
    }
  },
  separator: {
    color: 'grey',
    margin: '0px 5px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          alignContent="center"
          className={classes.flexItem}
        >
          <Link underline="none" component={LinkRouter} to="/#" className={classes.bottomLinks}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.flexItem}
        >
          <Link underline="none" className={classes.bottomLinks} component={LinkRouter} to="/#">
            CGU
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link underline="none" className={classes.bottomLinks} component={LinkRouter} to="/faq">
            FAQ
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link
            underline="none"
            className={classes.bottomLinks}
            component={LinkRouter}
            to="/politique"
          >
            Confidentialité
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link underline="none" className={classes.bottomLinks} component={LinkRouter} to="/#">
            Contact
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link underline="none" className={classes.bottomLinks} component={LinkRouter} to="/#">
            Site
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.gridItem}>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          className={classes.flexItem}
        >
          <Link underline="none" component={LinkRouter} to="/#" className={classes.bottomLinks}>
            Copyright Mobea
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
