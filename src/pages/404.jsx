import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles(() => ({
  root: {
    margin: 'auto',
    padding: '10px'
  }
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Erreur 404.
        </Typography>
        <Typography component="p">Oups, cette page n'existe pas.</Typography>
      </Paper>
    </Layout>
  );
};

export default NotFound;
