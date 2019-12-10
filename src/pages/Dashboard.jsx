import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({
  parent: {
    margin: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    gridColumnGap: '8px',
    gridRowGap: '8px'
  },
  div1: { gridArea: '1 / 1 / 7 / 3' },
  div2: { gridArea: '1 / 3 / 3 / 7' },
  div3: { gridArea: '3 / 3 / 7 / 5' },
  div4: { gridArea: '3 / 5 / 7 / 7' }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.parent}>
        <Paper className={classes.div1}>1</Paper>
        <Paper className={classes.div2}>2</Paper>
        <Paper className={classes.div3}>3</Paper>
        <Paper className={classes.div4}>4</Paper>
      </div>
    </Layout>
  );
}
