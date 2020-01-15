import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Checkbox from '@material-ui/core/Checkbox';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255,0.3)'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 16px 0px 24px'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1rem 0',
    backgroundColor: 'rgba(255, 255, 255,0.85)',
    margin: '4px 0px'
  },
  listTitle: {
    fontSize: '1.5rem',
    color: 'white'
  },
  icon: {
    color: 'white'
  }
}));

export default function CheckCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id="card">
      <div className={classes.flex}>
        <VerifiedUserIcon className={classes.icon} fontSize="medium" />
        <Typography variant="h3" className={classes.listTitle}>
          Assurances
        </Typography>
        <IconButton>
          <ArrowDropDownCircleIcon className={classes.listTitle} />
        </IconButton>
      </div>
      <CardContent>
        <Card className={classes.container}>
          <Checkbox
            checked
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
            color="primary"
          />
          lorem ipsum dolor
        </Card>
        <Card className={classes.container}>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
            color="primary"
          />
          lorem ipsum dolor
        </Card>
        <Card className={classes.container}>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
            color="primary"
          />
          lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
          lorem ipsum dolorlorem ipsum dolorlorem
        </Card>
        <Card className={classes.container}>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
            color="primary"
          />
          lorem ipsum dolor
        </Card>
        <Card className={classes.container}>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
            color="primary"
          />
          lorem ipsum dolor
        </Card>
      </CardContent>
    </Card>
  );
}
