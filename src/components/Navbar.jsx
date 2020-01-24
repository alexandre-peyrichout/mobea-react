import React, { useContext } from 'react';
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
import { Link as LinkRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
// import DashboardAvatar from './DashboardAvatar';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ListIcon from '@material-ui/icons/List';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Context from '../context/Context';

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
  logodiv: {
    margin: 'auto'
  },
  titleProfil: {
    textAlign: 'center'
  }
}));

const Navbar2 = ({ history }) => {
  const { setShow_PROFIL } = useContext(Context);
  const { setShow_FAQ } = useContext(Context);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const disconnect = () => {
    localStorage.removeItem('token');
    // window.location.replace('http://localhost:3001/login');
    history.push('/login');
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

        <Link underline="none" onClick={() => setShow_FAQ(true)}>
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
        <Link className={classes.logodiv} href="dashboard#top">
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
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
          <MenuItem onClick={() => setShow_PROFIL(true)}>Mon profil</MenuItem>
          <MenuItem onClick={disconnect}>Se déconnecter</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar2;
