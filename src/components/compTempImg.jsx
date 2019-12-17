import React from 'react';
import CompImg from '../assets/2.png';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    borderRadius: '10px',
    height: '600px'
  },
  paper: {
    height: '100%'
  }
}));

const CompTempImg = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <img src={CompImg} className={classes.img} alt="comp2" />
    </Paper>
  );
};

export default CompTempImg;
