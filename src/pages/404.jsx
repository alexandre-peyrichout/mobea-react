import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Container } from '@material-ui/core';
import image404 from '../assets/image404.jpg';
import Layout2 from '../components/Layout2';

const useStyles = makeStyles(() => ({
  root: {
    margin: 'auto',
    padding: '10px',
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Layout2 >
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Erreur 404.
        </Typography>
        <Typography component="p">Oups, cette page n'existe pas.</Typography>
      </Paper>
    </Layout2>
  );
};

export default NotFound;
