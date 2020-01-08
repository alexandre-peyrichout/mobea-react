import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../assets/logo.png';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link as LinkRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
// import DashboardAvatar from './DashboardAvatar';
import ProfilForm from './ProfilForm';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ListIcon from '@material-ui/icons/List';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Conf from '../pages/Politique';
import Faq from '../pages/Faq';

const useStyles = makeStyles(() => ({
  list: {
    width: 250
  },
  AppBar: {
    display: 'flex'
  },
  logo: {
    padding: '5px',
    height: '60px',
    margin: 'auto'
  },
  titleProfil: {
    textAlign: 'center'
  }
}));

const Navbar2 = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [modal, SetModal] = React.useState('test');

  const handleClickOpen = (scrollType, modal) => () => {
    if (modal === 'faq') {
      setOpen2(true);
    } else {
      setOpen(true);
    }
    setScroll(scrollType);
    SetModal(modal);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link underline="none" component={LinkRouter} to="/#">
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Accueil" />
          </ListItem>
        </Link>

        <Link underline="none" href="#destination">
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <FlightTakeoffIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Ma destination" />
          </ListItem>
        </Link>

        <Link underline="none" href="#card">
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <ListIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Mes listes" />
          </ListItem>
        </Link>

        <Link underline="none" target="_blank" href="mailto:contact@mobea.fr">
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <ContactSupportIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>

        <Link underline="none" onClick={handleClickOpen('paper', 'faq')}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <QuestionAnswerIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="FAQ" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <AppBar color="default" className={classes.AppBar}>
      <Dialog
        open={open2}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {modal === 'confidentialité' && 'Politique de confidentialité'}
          {modal === 'faq' && 'Foire aux questions'}
          {modal === 'copyright' && 'Détails'}
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {modal === 'confidentialité' && <Conf />}
            {modal === 'faq' && <Faq />}
            {modal === 'copyright' && 'Copyright 2016 - 2020'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Toolbar>
        <IconButton
          onClick={toggleDrawer('left', true)}
          edge="start"
          className={classes.menuButton}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
        <img src={logo} alt="logo" className={classes.logo} />
        <IconButton
          edge="end"
          color="inherit"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose1}
        >
          <MenuItem onClick={handleClickOpen('paper')}>Mon profil</MenuItem>
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
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
          <MenuItem onClick={handleClose}>Se déconnecter</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar2;
