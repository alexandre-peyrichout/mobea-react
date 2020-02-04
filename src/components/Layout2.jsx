import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Footer from './Footer';
import image404 from '../assets/image404.jpg';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  content: {
    paddingTop: '62px',
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    background: `url(${image404})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
}));

const Layout2 = ({ children, history }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Navbar history={history} />
      </div>
      <div className={classes.content}>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout2;
