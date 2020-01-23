import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import ContainerAvatarNews from '../components/ContainerAvatarNews';
import CheckCard from '../components/CheckCard';
import MyExpat from '../components/MyExpat2';
import Context from '../context/Context';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    height: '600px'
  },
  minHeight: {
    minHeight: 'calc(100vh - 156px)'
  }
}));

export default function FullWidthGrid(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setConnectedUser } = React.useContext(Context);

  useEffect(() => {
    fetch('api/dashboard', {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    })
      .then(res => res.json())
      .then(data => setConnectedUser(data.result[0].iduser))
      .then(console.log('are u gonna setIsLoggedIn'))
      .then(data => setIsLoggedIn('access'))
      .catch(err => setIsLoggedIn('no-access'));
  });

  if (isLoggedIn === 'no-access') {
    props.history.push('/login');
  }

  const classes = useStyles();
  return (
    <Layout history={props.history}>
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
