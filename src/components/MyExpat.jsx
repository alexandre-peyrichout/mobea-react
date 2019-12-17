import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Card, IconButton } from '@material-ui/core';
import VpnKeyOutlined from '@material-ui/icons/VpnKeyOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import AddCircle from '@material-ui/icons/AddCircleOutlineOutlined';
import WorkOutline from '@material-ui/icons/WorkOutlineOutlined';
import Assignment from '@material-ui/icons/AssignmentOutlined';
import AccountBalance from '@material-ui/icons/AccountBalanceOutlined';
import HomeWork from '@material-ui/icons/HomeWorkOutlined';
import SwapCalls from '@material-ui/icons/SwapCallsOutlined';
import QuestionAnswer from '@material-ui/icons/QuestionAnswerOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 0
  },
  config: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  root: {
    flexGrow: 1,
  },
  margin: {
    width: '30%',
    margin: theme.spacing(1),
  },
  container: {
    padding: '0px',
  },
  avatar: {
  color: 'white',
  backgroundColor: '#6db5a8',
  margin: '10px'
  },
  blocIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50px',
    width: '50px',
    borderRadius: '50%'
  },
  add: {
    border: '1px dashed'
  }
}));

//TASKS

const BorderLinearProgress = withStyles({
    root: {
      height: 15,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 219, 122, 1)',
    },
    bar: {
      borderRadius: 20,
      backgroundColor: 'rgba(229, 170, 75, 1)',
    },
  })(LinearProgress);


export default function Openselect() {
  const classes = useStyles();
  const [country, setCountry] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (

    <Fragment>
    <div>
      <div className={classes.config}>
      <h5>Configurer mon expatriation</h5>
      <IconButton>
        <SettingsOutlined fontSize="medium" />
      </IconButton>
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Morocco</MenuItem>
          <MenuItem value={20}>Germany</MenuItem>
          <MenuItem value={30}>Tunisia</MenuItem>
        </Select>
      </FormControl>
      
    </div>

      <div className={classes.root}>
          <h5>24% des tâches effectuées</h5>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={50}
        />
      </div>

<Card className={classes.container}>
      <div className={classes.firstBloc}>
      <h5>Besoins</h5>
      <div className={classes.bloc}>
      <div className={classes.blocIcons}>
        <IconButton className={classes.avatar} >
        <Tooltip title="Logement" placement="top">
        <VpnKeyOutlined fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Assurance" placement="top">
        <VerifiedUserIcon fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Santé" placement="top">
        <AddCircle fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Travail" placement="top">
        <WorkOutline fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Administratif" placement="top">
        <Assignment fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Banque" placement="top">
        <AccountBalance fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.add} >
        <Tooltip title="Ajout" placement="top">
        <AddIcon fontSize="medium" />
        </Tooltip>
        </IconButton>  
      </div>
      </div>
      
      </div>
      <div className={classes.secondBloc}>
      <h5>Travail</h5>
      <div className={classes.bloc}>
      <div className={classes.blocIcons}>
        <IconButton className={classes.avatar} >
        <Tooltip title="Télétravail" placement="top">
        <HomeWork fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Reconversion" placement="top">
        <SwapCalls fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Coacing" placement="top">
        <QuestionAnswer fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.add} >
        <Tooltip title="Ajout" placement="top">
        <AddIcon fontSize="medium" />
        </Tooltip>
        </IconButton>
      </div>
      </div>
      </div>
    </Card>

      </Fragment>
    );
}

