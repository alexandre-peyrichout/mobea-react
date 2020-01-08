import Layout from '../components/Layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dunes from '../assets/dunes.jpg';


const useStyles = makeStyles({
text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
card: {
    marginTop: 30,
    maxWidth: 345,
},
dunes: {
    marginLeft: 80,
    marginTop: 10,
    height: 140,
    justifyContent: 'center'
},
title: {
    textAlign: 'center'
},
subtitle: {
    textAlign: 'justify'
}
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Layout>
        <div className={classes.text}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia />
           <img src={dunes} alt="dunes" className={classes.dunes}
        />
        <CardContent>
          <Typography color="primary" gutterBottom variant="h5" component="h2" className={classes.title}>
            CONTACTEZ-NOUS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.subtitle}>
            Une application web gratuite, qui sera à la fois collaborative et participative, dont le but est d'accompagner les expatriés avant, pendant et après l'expatriation.
            Nous proposerons des modules différents et complémentaires selon le profil et la destination.            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    </Layout>
  );
}