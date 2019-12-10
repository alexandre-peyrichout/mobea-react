import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  content: {
    flexGrow: '1'
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Navbar />
      </div>
      <div className={classes.content}>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
