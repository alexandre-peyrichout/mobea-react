import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Container, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    '& a': {
      color: 'grey'
    },
    '& a:hover': {
      textDecoration: 'none'
    }
  },
  boxRight: {
    marginLeft: 'auto'
  },
  boxMiddle: {
    marginLeft: '5%'
  },
  bottomLinks: {
    padding: '1rem'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container component="div">
      <Toolbar className={classes.root}>
        <Box className={classes.boxLeft}>
          <Link href="/test">Logo</Link>
        </Box>
        <Box className={classes.boxMiddle} />
        <Link className={classes.bottomLinks} href="/test">
          CGU
        </Link>
        <Link className={classes.bottomLinks} href="/faq">
          FAQ
        </Link>
        <Link className={classes.bottomLinks} href="/politique">
          Politique de confidentialité
        </Link>
        <Link className={classes.bottomLinks} href="/test">
          Contact
        </Link>
        <Link className={classes.bottomLinks} href="/test">
          Site
        </Link>
        <Box className={classes.boxRight} />
        <Link href="/test">Copyright Mobea</Link>
      </Toolbar>
    </Container>
  );
}
