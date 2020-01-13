import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Card, IconButton } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import SettingsIcon from '@material-ui/icons/Settings';
import Background from '../assets/bgold.jpg';
import AvatarImg from '../assets/avatar.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProfilForm from './ProfilForm';
import SaveIcon from '@material-ui/icons/Save';

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
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [modal, SetModal] = React.useState('test');

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
    SetModal(modal);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.container}>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className={classes.titleProfil}>
          Mon profil
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ProfilForm />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className={classes.blocSave}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Sauvegarder et mettre à jour
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      <div className={classes.settingsDiv}>
        <IconButton aria-label="settings" onClick={handleClickOpen('paper')}>
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
