import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as LinkRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../assets/bg.jpg';
import Logo from '../assets/logo.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      © Copyright -
      <Link color="inherit" href="https://material-ui.com/">
        Mobea
      </Link>
      {/* {new Date().getFullYear()} */}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: '0 30px'
  },
  font: {
    background: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    margin: '0',
    marginTop: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'white'
  },
  logo: {
    height: '20vh'
  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div className={classes.font}>
      <Container className={classes.container} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.logo} alt="mobea-icon" src={Logo} />
          <Typography component="h1" variant="h5">
            S'inscrire
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Prénom"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Nom"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              S'inscrire
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component={LinkRouter} to="/Login" variant="body2">
                  J'ai déjà un compte ? Se connecter
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
