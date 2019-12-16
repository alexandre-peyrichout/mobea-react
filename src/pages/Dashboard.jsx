import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import Avatar from '../components/DashboardAvatar';

const useStyles = makeStyles(() => ({}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Avatar />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper>4</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper>5</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper>6</Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
