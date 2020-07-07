import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';

const ParallaxHero = props => {
  const styles = makeStyles(theme => ({
    hero: {
      backgroundImage: `url(${props.src})`,
      minHeight: props.smaller ? '400px' : '600px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5vw'
    }
  }));

  const classes = styles();
  return (
    <div className={classes.hero} title={props.title}>
      {props.children}
    </div>
  )
}

export default ParallaxHero;