import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from '../assets/bg.jpg';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  content: {
    padding: '80px 8px 8px 8px',
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    background: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
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
