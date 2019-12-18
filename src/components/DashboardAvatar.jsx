import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Card, IconButton } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import SettingsIcon from '@material-ui/icons/Settings';
import Background from '../assets/bgold.jpg';
import AvatarImg from '../assets/avatar.png';

const useStyles = makeStyles(theme => ({
  avatarDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  container: {
    padding: '0px',
    height: '100%',
    background: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  bigAvatar: {
    width: 80,
    height: 80
  },
  settingsDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  nameDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    color: 'white',
    fontWeight: 'bold'
  },
  titleDiv: {
    color: 'white',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    paddingBottom: '1rem'
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <div className={classes.settingsDiv}>
        <IconButton aria-label="settings">
          <SettingsIcon style={{ color: grey[50] }} />
        </IconButton>
      </div>
      <div className={classes.avatarDiv}>
        <Avatar alt="placeholder" src={AvatarImg} className={classes.bigAvatar} />
      </div>
      <div className={classes.nameDiv}>Camille Dupont</div>
      <div className={classes.titleDiv}>Titre</div>
    </Card>
  );
}
