import React, { useContext } from 'react';
import { Card, CardContent, Typography, Grid, Divider, CardHeader } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {

    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

  return (
      <Card className={classes.root}>
          <CardHeader title="Expense Tracker" subheader="Created by Sai Adithya" />
          <CardContent>
              <Typography align="center" variant="h5">Total Balance ₹{balance}</Typography>
              <Typography variant="subtitle1" align="center" style={{ lineHeight: '1.5em', marginTop: '20px' }} >
                  {/* Infocard */}
                  Try adding: <br/> income of ₹20 in category salary for monday ...
              </Typography>
              <Divider />
              <Form />
          </CardContent>
          <CardContent className={classes.cartContent}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <List />
                  </Grid>
              </Grid>
          </CardContent>
      </Card>
  );
};

export default Main;
