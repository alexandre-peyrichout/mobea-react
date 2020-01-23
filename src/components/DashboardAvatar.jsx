import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Card, IconButton } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import SettingsIcon from '@material-ui/icons/Settings';
import Background from '../assets/bgold.jpg';
import Context from '../context/Context';
import PersonIcon from '@material-ui/icons/Person';

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
  const { userData } = useContext(Context);

  if (userData) {
    return (
      <Card className={classes.container}>
        <div className={classes.settingsDiv}>
          <IconButton onClick={() => setShow_PROFIL(true)}>
            <SettingsIcon style={{ color: grey[50] }} />
          </IconButton>
        </div>
        <div className={classes.avatarDiv}>
          <Avatar alt="placeholder" className={classes.bigAvatar}>
            <PersonIcon fontSize="large" />
          </Avatar>
        </div>
        <div className={classes.nameDiv}>
          {userData.firstname} {userData.lastname}
        </div>
      </Card>
    );
  } else {
    return <div></div>;
  }
}
