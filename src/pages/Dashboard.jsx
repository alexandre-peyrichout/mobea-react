import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/Layout';
import Avatar from '../components/DashboardAvatar';
import CheckCard from '../components/CheckCard';

const useStyles = makeStyles(() => ({
  parent: {
    margin: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr [de] 1fr',
    gridTemplateRows: '1fr 1fr',
    gridColumnGap: '8px',
    gridRowGap: '8px'
  },
  div1: { gridArea: '1 / 1 / 2 / 2' },
  div2: { gridArea: '1 / 2 / 2 / 4' },
  div3: { gridArea: '2 / 1 / 3 / 2' },
  div4: { gridArea: '2 / 2 / 3 / de' },
  div5: { gridArea: '2 / de / 3 / 4' }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.parent}>
        <Avatar className={classes.div1}>1</Avatar>
        <Paper className={classes.div2}>2</Paper>
        <CheckCard className={classes.div3} />
        <CheckCard className={classes.div4} />
        <CheckCard className={classes.div5} />
        <CheckCard className={classes.div6} />
        <CheckCard className={classes.div7} />
      </div>
    </Layout>
  );
}
