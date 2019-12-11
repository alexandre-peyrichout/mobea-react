import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Checkbox from '@material-ui/core/Checkbox';
import InfoIcon from '@material-ui/icons/Info';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';

const useStyles = makeStyles(() => ({
  card: {},
  cardHeader: {
    backgroundColor: 'lightgrey'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: 'solid 1px lightgrey',
    padding: '1rem 0'
  },
  infos: {
    marginLeft: 'auto'
  }
}));

export default function CheckCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<VerifiedUserIcon fontSize="large" />}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title="ASSURANCE"
      />

      <CardContent>
        <div className={classes.container}>
          <Checkbox
            checked
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
          />
          lorem ipsum dolor
          <InfoIcon className={classes.infos} color="disabled" />
        </div>
        <div className={classes.container}>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
          />
          lorem ipsum dolor
          <InfoIcon className={classes.infos} color="disabled" />
        </div>
        <div className={classes.container}>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
          />
          lorem ipsum dolor
          <InfoIcon className={classes.infos} color="disabled" />
        </div>
        <div className={classes.container}>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
          />
          lorem ipsum dolor
          <InfoIcon className={classes.infos} color="disabled" />
        </div>
        <div className={classes.container}>
          <Checkbox
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
          />
          lorem ipsum dolor
          <InfoIcon className={classes.infos} color="disabled" />
        </div>
      </CardContent>
    </Card>
  );
}
