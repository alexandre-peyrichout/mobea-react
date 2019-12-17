import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from './DashboardAvatar';
import IframeComp from './Iframe';

const useStyles = makeStyles(theme => ({
  parent: {
    display: 'flex',
    flexDirection: 'column',
    height: '98.5%'
  },
  childIframe: {
    flexGrow: '1'
  }
}));

const ContainerAvatarNews = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.childAvatar}>
        <Avatar />
      </div>
      <div className={classes.childIframe}>
        <IframeComp />
      </div>
    </div>
  );
};

export default ContainerAvatarNews;
