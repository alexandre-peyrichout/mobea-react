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
          <Link href="/#">Mobea</Link>
        </Box>
        <Box className={classes.boxMiddle} />
        <Link className={classes.bottomLinks} href="/#">
          CGU
        </Link>
        <Link className={classes.bottomLinks} href="/#">
          FAQ
        </Link>
        <Link className={classes.bottomLinks} href="/#">
          Politique de confidentialité
        </Link>
        <Link className={classes.bottomLinks} href="/#">
          Contact
        </Link>
        <Link className={classes.bottomLinks} href="/#">
          Site
        </Link>
        <Box className={classes.boxRight} />
        <Link href="/#">Copyright Mobea</Link>
      </Toolbar>
    </Container>
  );
}
