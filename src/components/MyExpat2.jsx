import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Card,
  Fab,
  IconButton,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  LinearProgress,
  CircularProgress,
  Grid,
  Tooltip,
  Badge
} from '@material-ui/core';
import { SettingsOutlined, Delete, VpnKeyOutlined } from '@material-ui/icons/';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import AddIcon from '@material-ui/icons/Add';
import AddCircle from '@material-ui/icons/AddCircle';
import WorkOutline from '@material-ui/icons/WorkOutlineOutlined';
import Assignment from '@material-ui/icons/AssignmentOutlined';
import AccountBalance from '@material-ui/icons/AccountBalanceOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(() => ({
  parent: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column'
  },
  childTop: {
    padding: '8px 8px 8px 16px'
  },
  childBottom: {
    padding: '8px',
    marginTop: '8px',
    flexGrow: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  config: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  configTitle: {
    marginRight: '5px'
  },
  formControl: {
    width: '100%'
  },
  progressTitle: {
    marginTop: '10px',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  select: {
    flexGrow: '1',
    marginBottom: '20px',
    marginRight: '10px'
  },
  selectflex: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    padding: '40px 0',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper2: {
    padding: '41.5px 0',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255,0.3)'
  },

  fabProgress: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: '0',
    right: '0',
    zIndex: 1
  },
  iconOnTop: {
    zIndex: 2
  },
  listTitle: {
    fontSize: '1.5rem',
    color: 'white'
  },
  badge: {
    zIndex: '3'
  }
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 15,
    width: '75%',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 219, 122, 1)',
    margin: '10px 0'
  },
  bar: {
    borderRadius: 20,
    backgroundColor: 'rgba(229, 170, 75, 1)'
  }
})(LinearProgress);

const MyExpat2 = () => {
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
    <div className={classes.parent}>
      <Card className={classes.childTop}>
        <div className={classes.config}>
          <Typography variant="p" className={classes.configTitle}>
            Configurer mon expatriation
          </Typography>
          <IconButton>
            <SettingsOutlined fontSize="medium" />
          </IconButton>
        </div>
        <FormControl className={classes.formControl}>
          <div className={classes.selectflex}>
            <InputLabel id="demo-controlled-open-select-label">Destination</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={country}
              onChange={handleChange}
              className={classes.select}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Morocco</MenuItem>
              <MenuItem value={20}>Germany</MenuItem>
              <MenuItem value={30}>Tunisia</MenuItem>
            </Select>

            <IconButton>
              <Delete fontSize="medium" />
            </IconButton>
            <IconButton color="primary">
              <AddCircle fontSize="medium" />
            </IconButton>
          </div>
        </FormControl>
        <div className={classes.progress}>
          <Typography color="primary" variant="h5" className={classes.progressTitle}>
            75% des tâches effectuées
          </Typography>
          <BorderLinearProgress variant="determinate" color="secondary" value={75} />
        </div>
      </Card>
      {/* deuxieme card */}
      <Card className={classes.childBottom}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.listTitle}>
              Mes listes
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.wrapper}>
              <Badge badgeContent={4} color="primary" className={classes.badge}>
                <IconButton className={classes.iconOnTop}>
                  <Tooltip title="Logement" placement="top">
                    <VpnKeyOutlined fontSize="large" />
                  </Tooltip>
                </IconButton>
              </Badge>
              <CircularProgress
                color="secondary"
                variant="determinate"
                value={50}
                size={70}
                className={classes.fabProgress}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.wrapper}>
              <IconButton className={classes.iconOnTop}>
                <Tooltip title="Assurances" placement="top">
                  <VerifiedUserIcon fontSize="large" />
                </Tooltip>
              </IconButton>
              <CircularProgress
                color="secondary"
                variant="determinate"
                value={50}
                size={70}
                className={classes.fabProgress}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.wrapper}>
              <IconButton className={classes.iconOnTop}>
                <Tooltip title="Santé" placement="top">
                  <FavoriteBorderIcon fontSize="large" />
                </Tooltip>
              </IconButton>
              <CircularProgress
                color="secondary"
                variant="determinate"
                value={32}
                size={70}
                className={classes.fabProgress}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.wrapper}>
              <IconButton className={classes.iconOnTop}>
                <Tooltip title="Emploi" placement="top">
                  <WorkOutline fontSize="large" />
                </Tooltip>
              </IconButton>
              <CircularProgress
                variant="determinate"
                color="secondary"
                value={50}
                size={70}
                className={classes.fabProgress}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.wrapper}>
              <IconButton className={classes.iconOnTop}>
                <Tooltip title="Administratif" placement="top">
                  <Assignment fontSize="large" />
                </Tooltip>
              </IconButton>
              <CircularProgress
                color="secondary"
                variant="determinate"
                value={80}
                size={70}
                className={classes.fabProgress}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.wrapper}>
              <IconButton className={classes.iconOnTop}>
                <Tooltip title="Banque" placement="top">
                  <AccountBalance fontSize="large" />
                </Tooltip>
              </IconButton>
              <CircularProgress
                color="secondary"
                variant="determinate"
                value={11}
                size={70}
                className={classes.fabProgress}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.wrapper2}>
              <Tooltip title="Ajouter ma propre liste" placement="top">
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Tooltip>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default MyExpat2;
