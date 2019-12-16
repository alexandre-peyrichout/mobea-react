import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
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
  },
  footer: { minHeight: '100px' },
  center: {
    textAlign: 'center'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.footer} alignContent="center" alignItems="center">
      <Grid item xs={12} sm={3} spacing={1}>
        <Container className={classes.center}>
          <Link component={LinkRouter} to="/#" className={classes.bottomLinks}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </Container>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Container className={classes.center}>
              <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
                CGU
              </Link>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container className={classes.center}>
              <Link className={classes.bottomLinks} component={LinkRouter} to="/faq">
                FAQ
              </Link>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container className={classes.center}>
              <Link className={classes.bottomLinks} component={LinkRouter} to="/politique">
                Confidentialité
              </Link>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container className={classes.center}>
              <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
                Contact
              </Link>
            </Container>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Container className={classes.center}>
              <Link className={classes.bottomLinks} component={LinkRouter} to="/#">
                Site
              </Link>
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Container className={classes.center}>
          <Link component={LinkRouter} to="/#" className={classes.bottomLinks}>
            Copyright Mobea
          </Link>
        </Container>
      </Grid>
    </Grid>
  );
}
