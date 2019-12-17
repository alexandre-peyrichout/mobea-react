import React from 'react';
import IframeComp from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  iframe: {
    margin: '10px auto',
    height: '100%',
    width: '100%',
    borderRadius: '5px',
    border: '0'
  }
}));

const Iframe = () => {
  const classes = useStyles();
  return <IframeComp url="https://www.ouest-france.fr/monde/maroc/" className={classes.iframe} />;
};

export default Iframe;
