import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <Grid container xs={12}>
      <Navbar />
      <Grid container xs={4}>
        element1
      </Grid>
      <Grid container xs={8}>
        <Grid container xs={12}>
          element2
        </Grid>
        <Grid container xs={6}>
          element3
        </Grid>
        <Grid container xs={6}>
          element4
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
