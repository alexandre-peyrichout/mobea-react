import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import fond from '../assets/bgold.jpg';
import logo from '../assets/logo.png';
import LandingBar from '../components/LandingBar';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
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
    alignItems: 'center'
  },
  submit: {
    width: '100px'
  },
  boldText: {
    fontWeight: 'bold',
    width: '40%',
    wordBreak: 'break-all'
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
  avatar: {
    backgroundColor: red[500]
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
        <Typography variant="h3">A PROPOS</Typography>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/bh7znN9kMS8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <Grid container spacing={1}>
          <Grid container item xs={6} md={2}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Une application mobile intelligente"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Grâce à votre communauté proactive et collaborative : le partage n'aura plus de secrets pour vous.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item xs={6} md={2}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Organisez"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Recherchez des expatrié.e.s et organisez votre expatriation depuis votre mobile: votre destination, vos démarches, votre installation...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item xs={6} md={2}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Des rencontres approuvées"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Grâce à notre algorithme, notre application vous propose les amis qui vous complètent, partagent vos passions et que vous n'auriez probablement jamais croisés.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item xs={6} md={2}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Connectez vous avec les autres expatrié(e)s"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Restez connéecté.e.s. Suivez et partagez avec les expatrié.e.s puis organisez vos Meet up selon vos profils et préférences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item xs={6} md={2}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Personnalisez votre application"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Partagez vos loisirs, passions et préférences: créez votre profil personnel et dites-nous en plus à propos de vos expériences d'expatriation et vos modes de vie.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default LandingPage;
