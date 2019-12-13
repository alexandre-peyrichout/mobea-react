import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import fond from '../assets/bgold.jpg';
import logo from '../assets/logo.png';
import LandingBar from '../components/LandingBar';

const useStyles = makeStyles(() => ({
  contain: {
    margin: '0',
    padding: '0',
    minHeight: '100vh',
    minWidth: '100%',
    backgroundImage: `url("${fond}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  container: {
    minWidth: '100vw',
    minHeight: '100vh',
    margin: '0',
    padding: '0'
  },
  propos: {
    width: '100%',
    height: '200px'
  },

  zonecentrale: {
    minWidth: '100%',
    minHeight: '80vh',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '10%',
    alignItems: 'center'
  },
  submit: {
    width: '100px'
  },
  boldText: {
    fontWeight: 'bold',
    width: '40%',
    wordBreak: 'break-all'
  }
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Container className={classes.contain}>
        <LandingBar />
        <Container className={classes.zonecentrale}>
          <Typography variant="h2" className={classes.boldText}>
            Expérience
          </Typography>
          <Typography className={classes.boldText}>
            IPSET LOREM DE MERDUM SEC FLUCTUAT NEC MERGITUR AMABIT
            UGHEUIGHEIGHEIUFHERIUOGHIUHIUZHBGIUZHFIUHZIURGFHZIRHZIFHNIEURHFIFHIUERHGIZGNIEHGIJGNBEIGUIGBEGIBEGEBGIJERBGIJERGIEGNIJERBGERBNOGBNRJIOGBEIGBEIHGBNEIGJEBNGIENGIJEBNGIENBGIJEBGIEBGHIERBGIJERGBEIORJGIEJGBERIJGNIEGNEIRJNEIJGNEIJGBIEJGB
          </Typography>
          <div>
            <Button type="submit" variant="contained" color="primary" className={classes.submit}>
              S'inscrire
            </Button>
          </div>
        </Container>
      </Container>
      <Container className={classes.propos}>
        <Typography>A PROPOS</Typography>
      </Container>
    </Container>
  );
}

export default LandingPage;
