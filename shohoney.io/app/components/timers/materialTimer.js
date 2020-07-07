import React, { useEffect, useState } from 'react';
import {
  Paper,
  Grid,
  Typography
} from '@material-ui/core';
import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles';

function tick(props) {
  const diff = props.targetDate - Date.now();
  const days = diff / 1000 / 60 / 60 / 24;
  const hours = ((diff / 1000 / 60 / 60 / 24) - Math.floor(days)) * 24;
  const minutes = (hours - Math.floor(hours)) * 60;
  const seconds = (minutes - Math.floor(minutes)) * 60;
  const time = {
    days: Math.floor(days),
    hours: Math.floor(hours),
    minutes: Math.floor(minutes),
    seconds: Math.floor(seconds)
  }
  return time;
}
const styles = makeStyles(theme => ({
  timeCard: {
    textAlign: 'center',
    padding: '30px',
    backgroundColor: theme.palette.secondary['500']
  }
}));

const MaterialTimer = props => {
  const [time, setTime] = useState(tick(props)),
    classes = styles(useTheme());

  useEffect(_ => {
    const interval = setInterval(_ => {
      setTime(tick(props));
    }, 1000);

    return _ => {
      clearInterval(interval);
    }
  });



  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <Paper className={classes.timeCard}>
          <Typography variant="h4" color="inherit">
            {time.days}
          </Typography>
          <Typography>
            Days
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.timeCard}>
          <Typography variant="h4">
            {time.hours}
          </Typography>
          <Typography>
            Hours
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.timeCard}>
          <Typography variant="h4">
            {time.minutes}
          </Typography>
          <Typography>
            Minutes
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.timeCard}>
          <Typography variant="h4">
            {time.seconds}
          </Typography>
          <Typography>
            Seconds
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MaterialTimer;