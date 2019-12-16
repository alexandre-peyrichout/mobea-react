import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


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


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    width: '30%',
    margin: theme.spacing(1),
  },
}));

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h5>24% des tâches effectuées</h5>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={50}
      />
    </div>
  );
}