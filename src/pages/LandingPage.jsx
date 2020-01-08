import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import fond from '../assets/marrakech.jpg';
import fond2 from '../assets/morocco.jpg';
import LandingBar from '../components/LandingBar';
import DemoCarousel from '../components/AutoCarousel';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0',
    minWidth: '100%'
  },
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
    minWidth: '100%',
    minHeight: '100vh',
    margin: '0',
    padding: '0'
  },

  propos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '100%',
    minHeight: '100vh'
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
    alignItems: 'flex-end',
    '& div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  },

  submit: {
    width: '100px'
  },
  boldText: {
    fontWeight: 'bold',
    maxWidth: '100%',
    wordBreak: 'normal',
    padding: '0 15%',
    marginBottom: '4%',
    marginTop: '1%',
    textAlign: 'justify',
    '@media (max-width:961px)': {
      maxWidth: '95%'
    }
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  frame: {
    marginBottom: '3%',
    width: '800px',
    height: '460px',
    '@media (max-width:961px)': {
      width: '95%',
      height: '180px'
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'column'
  },
  titles: {
    marginBottom: '3%',
    marginTop: '3%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '3em',
    marginBottom: '1%',
    marginTop: '2%',
    '@media (max-width:961px)': {
      fontSize: '3em',
      maxWidth: '95%'
    }
  },

  descriptionImg: {
    backgroundImage: `url("${fond2}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  description: {
    backgroundColor: 'black',
    color: '#e2b439',
    textAlign: 'center'
  }
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Container className={classes.contain}>
        <LandingBar />
        <Container className={classes.zonecentrale}>
          <Typography className={classes.title}>MOBILITE AUTREMENT</Typography>
          <Typography className={classes.boldText}>Entre France & Maroc</Typography>
          <div>
            <Button type="submit" variant="contained" color="primary" className={classes.submit}>
              S'inscrire
            </Button>
          </div>
        </Container>
      </Container>

      <Grid
        container
        spacing={1}
        justify="center"
        style={{ minHeight: '35vh', marginTop: '30px', marginBottom: '30px' }}
      >
        <Grid container item xs={6} justify="center">
          <Container className={classes.description}>
            <Typography className={classes.title}>Notre histoire</Typography>
            <Typography className={classes.boldText}>
              Une réelle volonté d'accompagner les diasporas, les bi- nationaux et les expatriés
              souhaitant s'installer entre la France et le Maroc pour une courte ou une longue
              durée. MOBEA sera la boite à outils idéale pour bien préparer votre mobilité entre les
              deux rives. Grâce à notre algorithme, notre application collaborative, vous permettra
              de préparer, organiser, communiquer, partager, networker, et surtout se faire de
              nouveaux ami(e)s sur place avant même votre arrivée ! En fonction de votre profil, vos
              loisirs, vos passions et vos préférences, MOBEA vous proposera les ami(e)s qui vous
              complètent, partagent vos intérêts et que vous n'auriez probablement jamais croisés.
            </Typography>
          </Container>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Container className={classes.descriptionImg}></Container>
        </Grid>
      </Grid>

      <Container className={classes.propos}>
        {/* <Typography className={classes.titles} variant="h3">
          A PROPOS
        </Typography>
        <iframe
          title="video"
          className={classes.frame}
          src="https://www.youtube.com/embed/bh7znN9kMS8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}

        <Typography className={classes.titles} variant="h3">
          FONCTIONNALITES
        </Typography>

        <Grid
          container
          spacing={1}
          justify="center"
          style={{ minHeight: '35vh', marginBottom: '30px' }}
        >
          <Grid container item xs={6} md={4} justify="center">
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                avatar={<PlaylistAddCheckIcon fontSize="large" />}
                title={<Typography variant="body1">checklists</Typography>}
                align="center"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" align="center">
                  Préparez et organisez cotre mobilité avant, pendant et après votre installation
                  (votre destination, vos démarches, vos transferts...)
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid container item xs={6} md={4}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                avatar={<ChatBubbleOutlineIcon fontSize="large" />}
                title={<Typography variant="body1">chat en ligne</Typography>}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" align="center">
                  Echangez et partagez avec des personnes en situation de départ ou déjà installées
                  qui ont les mêmes problématiques, intérêts, passions, profession
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid container item xs={6} md={4}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                avatar={<ThumbUpIcon fontSize="large" />}
                title={<Typography variant="body1">retours d'expérience certifiés</Typography>}
                align="center"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" align="center">
                  Partagez vos tips : créez votre profil et dites nous ce que la mobilité vous
                  apporte dans vos expériences professionnelles et personnelles
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <DemoCarousel />
          {/* <Grid container item xs={6} md={2}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                avatar={<EventNoteOutlinedIcon fontSize="large" />}
                title={
                  <Typography variant="body1">
                    Connectez vous avec les autres expatrié(e)s
                  </Typography>
                }
                align="center"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" align="center">
                  Restez connéecté.e.s. Suivez et partagez avec les expatrié.e.s puis organisez vos
                  Meet up selon vos profils et préférences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid container item xs={6} md={2}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                avatar={<CreateOutlinedIcon fontSize="large" />}
                title={<Typography variant="body1">Personnalisez votre application</Typography>}
                align="center"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" align="center">
                  Partagez vos loisirs, passions et préférences: créez votre profil personnel et
                  dites-nous en plus à propos de vos expériences d'expatriation et vos modes de vie.
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </Container>
      <Footer />
    </Container>
  );
}

export default LandingPage;
