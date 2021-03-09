import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import { Navbar } from '../../components/Navbar';
import { Books } from '../../components/Books';
import { Grid } from '@material-ui/core';
import { AddIcon } from '../../components/AddIcon';

const HomePage = memo(() => {
  return (
    <>
      <Helmet>
        <title>Home | Library</title>
        <meta name="description" content="Home | Library" />
      </Helmet>
      <Grid container>
        <Grid item>
          <Navbar />
          <Books />
          <AddIcon />
        </Grid>
      </Grid>
    </>
  );
});

export default HomePage;
