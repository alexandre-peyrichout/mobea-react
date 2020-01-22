import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import ContainerAvatarNews from '../components/ContainerAvatarNews';
import CheckCard from '../components/CheckCard';
import MyExpat from '../components/MyExpat2';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    height: '600px'
  },
  minHeight: {
    minHeight: 'calc(100vh - 156px)'
  }
}));

export default function FullWidthGrid() {
  // const 
  // useeffect header bearer token
  // axios post

  useEffect(() => {
    axios
      .post('/api/dashboard', {
        token: localStorage.getItem('token')
      })
    .then((res) => res.data)

  });


  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} className={classes.minHeight}>
          <ContainerAvatarNews />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.minHeight}>
          {/* composant temporaire qui sera remplaçé par celui de Steph */}
          {/* <CompTempImg /> */}
          <MyExpat />
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.minHeight}>
          <CheckCard />
        </Grid>
      </Grid>
    </Layout>
  );
}
