import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles(() => ({
  content: {
    maxWidth: '750px',
    margin: 'auto'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
  }
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.container}>
        <Paper className={classes.content}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    </Layout>
  );
};

export default NotFound;
