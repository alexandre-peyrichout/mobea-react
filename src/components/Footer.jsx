import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
import logo from '../assets/logo.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  logo: {
    height: '60px',
    opacity: 0.5,
    filter: 'grayscale(1)',
    paddingLeft: '20px',
    [theme.breakpoints.down('xs')]: {
      padding: '15px 0px'
    }
  },
  flexItem: {
    minHeight: '100%'
  },
  flexItemStart: {
    minHeight: '100%',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  },
  flexItemEnd: {
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '20px',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      paddingRight: '0px'
    }
  },
  bottomLinks: {
    padding: '5px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0px'
    },
    fontSize: 'calc(0.5rem + 0.5vw)',
    color: 'darkgrey',
    '&:hover': {
      color: 'grey',
      cursor: 'pointer'
    }
  },
  separator: {
    color: 'grey',
    margin: '0px 5px'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [modal, SetModal] = React.useState('test');

  const handleClickOpen = (scrollType, modal) => () => {
    setOpen(true);
    setScroll(scrollType);
    SetModal(modal);
  };

  const handleClose = () => {
    setOpen(false);
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

  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignContent="center"
          className={classes.flexItemStart}
        >
          <Link underline="none" component={LinkRouter} to="/#" className={classes.bottomLinks}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.flexItem}
        >
          <Link
            underline="none"
            className={classes.bottomLinks}
            onClick={handleClickOpen('paper', 'cgu')}
          >
            CGU
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link
            underline="none"
            className={classes.bottomLinks}
            onClick={handleClickOpen('paper', 'faq')}
          >
            FAQ
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link
            underline="none"
            className={classes.bottomLinks}
            onClick={handleClickOpen('paper', 'confidentialité')}
          >
            Confidentialité
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link
            underline="none"
            className={classes.bottomLinks}
            onClick={handleClickOpen('paper', 'Contact')}
          >
            Contact
          </Link>
          <Box className={classes.separator}>|</Box>
          <Link
            underline="none"
            className={classes.bottomLinks}
            onClick={handleClickOpen('paper', 'Site')}
          >
            Site
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.gridItem}>
        <Box display="flex" justifyContent="space-around" className={classes.flexItemEnd}>
          <Link
            underline="none"
            className={classes.bottomLinks}
            onClick={handleClickOpen('paper', 'Copyright')}
          >
            Copyright
          </Link>
        </Box>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{modal}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {modal === 'cgu' ? 'Texte du CGU' : 'autre'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
