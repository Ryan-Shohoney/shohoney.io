import React from 'react';
import MaterialNodeParser from './lib/MaterialNodeParser';
import {
  Paper,
  Typography
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  gutter: {
    padding: '15px 30px',
    margin: '15px'
  }
}));
const RichTextSection = props => {
  const classes = styles();
  return (
    <Paper className={classes.gutter}>
      <Typography variant="h2">
        {props.heading}
      </Typography>
      {MaterialNodeParser.parse(props.body)}
    </Paper>
  );
};


export default RichTextSection;