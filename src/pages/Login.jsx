import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
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
    margin: '30px 0',
    height: '10vh'
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.font}>
      <Container className={classes.container} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.logo} alt="mobea-icon" src={Logo} />
          <Typography component="h1" variant="h5">
            Se connecter
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="http://tinytuba.com/" variant="body2">
                  Mot de passe oublié ?
                </Link>
              </Grid>
              <Grid item>
                <Link component={LinkRouter} to="/signup" variant="body2">
                  Je n'ai pas de compte ? S'inscrire
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
