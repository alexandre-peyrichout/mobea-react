import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
import logo from '../assets/logo.png';
import Context from '../context/Context';
import Faq from '../pages/modals/Faq';
import Politique from '../pages/modals/Politique';
import Copyright from '../pages/modals/Copyright';
import Profil from '../pages/modals/Profil';
import AddDestination from '../pages/modals/Add_destination';
import DeleteDestination from '../pages/modals/Delete_destination';
const useStyles = makeStyles(theme => ({
  logo: {
    height: '60px',
    opacity: 0.5,
    filter: 'grayscale(1)',
    paddingLeft: '20px',
    [theme.breakpoints.down('xs')]: {
      padding: '15px 0px'
    }
  },
  flexItem: {
    minHeight: '100%'
  },
  flexItemStart: {
    minHeight: '100%',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  },
  flexItemEnd: {
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '20px',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      paddingRight: '0px'
    }
  },
  bottomLinks: {
    padding: '5px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0px'
    },
    fontSize: 'calc(0.5rem + 0.5vw)',
    color: 'darkgrey',
    '&:hover': {
      color: 'grey',
      cursor: 'pointer'
    }
  },
  separator: {
    color: 'grey',
    margin: '0px 5px'
  },
  grid: {
    width: '100%'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const { setShow_FAQ } = React.useContext(Context);
  const { setShow_POLITIQUE } = React.useContext(Context);
  const { setShow_COPYRIGHT } = React.useContext(Context);

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={3}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignContent="center"
          className={classes.flexItemStart}
        >
          <Link underline="none" component={LinkRouter} className={classes.bottomLinks}>
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
          <Link underline="none" className={classes.bottomLinks} onClick={() => setShow_FAQ(true)}>
            FAQ
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link
            underline="none"
            className={classes.bottomLinks}
            onClick={() => setShow_POLITIQUE(true)}
          >
            Confidentialité
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link
            component="a"
            underline="none"
            className={classes.bottomLinks}
            href="mailto:test@gmail.com"
          >
            Contact
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.gridItem}>
        <Box display="flex" justifyContent="space-around" className={classes.flexItemEnd}>
          <Link
            underline="none"
            className={classes.bottomLinks}
            onClick={() => setShow_COPYRIGHT(true)}
          >
            Copyright
          </Link>
        </Box>
      </Grid>
      {/* Modales ci-dessous  */}
      <Faq />
      <Politique />
      <Copyright />
      <Profil />
      <AddDestination />
      <DeleteDestination />
    </Grid>
  );
}
