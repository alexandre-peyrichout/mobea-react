import React from 'react';
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import fond from '../assets/bgold.jpg';
import logo from '../assets/logo.png';
import LandingBar from '../components/LandingBar';

const useStyles = makeStyles(() => ({

  logo: {
  width: '8%',
  margin: ''
  },

  container: {
    margin: '0',
    padding: '0',
    minHeight: '100vh',
    minWidth: '100%', 
    backgroundImage: `url("${fond}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}));


function LandingPage() {
  const classes = useStyles();
  return (
    
    <Container  className={classes.container}>
  <LandingBar/>
<img className={classes.logo} src={logo} alt=''/>
    </Container>
  );
}

export default LandingPage;
