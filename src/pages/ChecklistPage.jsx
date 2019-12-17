import React from 'react';
import Layout from '../components/Layout';
import CheckCard from '../components/CheckCard';
import { Box } from '@material-ui/core';

const ChecklistPage = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center">
        <CheckCard />
      </Box>
    </Layout>
  );
};

export default ChecklistPage;
