import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/Layout';
import Openselect from '../components/Openselect';
import Avatar from '../components/DashboardAvatar';
import CheckCard from '../components/CheckCard';
import Needs from '../components/Needs';
import Flag from 'react-world-flags';
import Tasks from '../components/Tasks';

const useStyles = makeStyles(() => ({
  
  parent: {
    margin: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr [de] 1fr',
    gridTemplateRows: 'auto 1fr 1fr',
    gridColumnGap: '8px',
    gridRowGap: '8px'
  },
  div1: { gridArea: '1 / 1 / 2 / 2' },
  div2: { gridArea: '1 / 2 / 2 / 4' },
  div3: { gridArea: '2 / 1 / 3 / 2' },
  div4: { gridArea: '2 / 2 / 3 / de' },
  div5: { gridArea: '2 / de / 3 / 4' },

  contain: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  container: {
    width: '50%',
    marginTop: '10%',
    marginRight: '0%'
  },
  container1: {
    width: '50%'
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.parent}>
        <Avatar className={classes.div1}>1</Avatar>
        <Paper className={classes.div2}>
          <div className={classes.contain}>
          <div className={classes.container1}>
          <Openselect />
          <Flag code={504} width="40" />
          <h3>Tanger</h3>
          <Tasks />
          </div>
          <div className={classes.container}>
          <Needs />
          </div>
          </div>
        </Paper>

        <CheckCard className={classes.div3} />
        <CheckCard className={classes.div4} />
        <CheckCard className={classes.div5} />
        <CheckCard className={classes.div6} />
        <CheckCard className={classes.div7} />
      </div>
    </Layout>
  );
}
