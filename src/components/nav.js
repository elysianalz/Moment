import React from 'react';

// firebase
import firebase from '../firebase';

// react-router
import { withRouter, Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import boxShadow from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Quicksand',
  },
  navBtn: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  }
}));

// navigation bar
const Nav = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{background: '#00bfff'}} boxShadow={5} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Moment
          </Typography>
          <AuthButton/>
          <Button className={classes.navBtn} component={Link} to="/time" color="inherit">Time</Button>
          <Button className={classes.navBtn} component={Link} to="/profile" color="inherit">Moments</Button>
          <Button className={classes.navBtn} component={Link} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );

}

// sign out
function signOut(history) {
  firebase.auth().signOut().then(function() {
    history.push('/');
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

// Sign out button
const AuthButton = withRouter(
  ({ history }) =>
    firebase.auth().currentUser ? (

        <p>Welcome!{" "}
          <button onClick={() => signOut(history)}>
            Sign out
          </button>
        </p>

    ) : (

      null
    
    )
);

export default Nav;