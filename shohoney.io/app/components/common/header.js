import Link from 'next/link';

import {
  AppBar,
  Button,
  Toolbar,
  Typography
} from '@material-ui/core';

import {
  makeStyles
} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  spaced: {
    justifyContent: 'space-between',
  },
}));

const Header = _ => {
  const classes = styles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.spaced}>
        <Link href="/">
          <Typography variant="h4" component="a" color="inherit">
            shohoney.io
          </Typography>
        </Link>
        <div>
        <Link href="/wedding">
          <Button variant="text" component="a" color="inherit">
            Our Wedding
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="text" component="a" color="inherit">
            About
          </Button>
        </Link>
        <Link href="/blog">
          <Button variant="text" component="a" color="inherit">
            Blog
          </Button>
        </Link>
        <Link href="/nuts-and-bolts">
          <Button variant="text" component="a" color="inherit">
            Nuts and Bolts
          </Button>
        </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
