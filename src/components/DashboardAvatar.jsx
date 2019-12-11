import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Container } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(theme => ({
  avatarDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
    padding: '0px',
    backgroundImage: 'url(https://images4.alphacoders.com/106/thumb-1920-106826.jpg)'
  },
  bigAvatar: {
    width: 80,
    height: 80,
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
    fontWeight: 'bold',
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
      <Container className={classes.container} fixed>
            <div className={classes.settingsDiv}>
            <IconButton aria-label="settings">
              <SettingsIcon style={{ color: grey[50] }} />
            </IconButton>
            </div>
            <div className={classes.avatarDiv}>
              <Avatar alt="placeholder" src="https://ih0.redbubble.net/image.824129891.2971/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.u1.jpg" className={classes.bigAvatar} />
            </div>
            <div className={classes.nameDiv}>
              Name Placeholder
            </div>
            <div className={classes.titleDiv}>
              TITLE
            </div>
      </Container>
  );
}