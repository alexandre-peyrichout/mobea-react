import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import ContainerAvatarNews from '../components/ContainerAvatarNews';
import CheckCard from '../components/CheckCard';
import MyExpat from '../components/MyExpat2';
import Context from '../context/Context';
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  show: {
    transitionDuration: '2s',
    opacity: '1'
  },
  hide: {
    opacity: '0',
    transitionDuration: '2s'
  },
  img: {
    width: '100%',
    height: '600px'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  minHeight: {
    minHeight: 'calc(100vh - 156px)'
  }
}));

export default function FullWidthGrid(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setConnectedUser } = React.useContext(Context);
  const { backdrop } = React.useContext(Context);
  const { fadeState } = React.useContext(Context);

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
  }, [setConnectedUser]);

  if (isLoggedIn === 'no-access') {
    props.history.push('/login');
  }

  const classes = useStyles();
  return (
    <Layout history={props.history}>
      <div className={fadeState ? classes.show : classes.hide}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} className={classes.minHeight}>
            <ContainerAvatarNews />
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.minHeight}>
            <MyExpat />
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.minHeight}>
            <CheckCard />
          </Grid>
        </Grid>
      </div>
      <Backdrop className={classes.backdrop} open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Layout>
  );
}
