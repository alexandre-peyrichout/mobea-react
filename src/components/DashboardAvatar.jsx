import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Card, IconButton } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import SettingsIcon from '@material-ui/icons/Settings';
import Background from '../assets/bgold.jpg';
import AvatarImg from '../assets/avatar.png';
import Context from '../context/Context';

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
    marginBottom: '2rem',
    color: 'white',
    fontWeight: 'bold'
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();
  const { setShow_PROFIL } = useContext(Context);

  return (
    <Card className={classes.container}>
      <div className={classes.settingsDiv}>
        <IconButton onClick={() => setShow_PROFIL(true)}>
          <SettingsIcon style={{ color: grey[50] }} />
        </IconButton>
      </div>
      <div className={classes.avatarDiv}>
        <Avatar alt="placeholder" src={AvatarImg} className={classes.bigAvatar} />
      </div>
      <div className={classes.nameDiv}>Camille Dupont</div>
    </Card>
  );
}
