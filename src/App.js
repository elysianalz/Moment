import React, { Component } from "react";

// firebase
import firebase from './firebase';

// react-router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

// material-ui
import { makeStyles } from '@material-ui/core';

//images
import Image from './images/soragrit-wongsa-aV5xrpB0bwQ-unsplash.jpg';

// views
import Login from './views/login';
import ReLogin from './views/relogin';
import Profile from './views/profile';
import Home from './views/home';
import Landing from './views/landing';
import Time from './views/time';

// custom components
import Nav from './components/nav';

// material-ui styles
const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  screens: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  landingRoute: {
    backgroundImage: "url(" + Image + ")",
  }
}));

// App wrapper
function App() {

  const classes = useStyles();

  return (
    <Router className={classes.container}>

      <div className={classes.container}>

        <Nav/>
        
        <div className={classes.screens}>
          <Route className={classes.landingRoute} exact path="/"  component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/relogin" component={ReLogin} />
          <Route path="/profile" component={Profile} />
          <Route path="/time" component={Time} />
        </div>
        
      </div>

    </Router>
  );
}

// Private route
function PrivateRoute({ component: Component, ...rest }) {

  const classes = useStyles();

  return (
    <Route
      {...rest}
      render={props =>
        firebase.auth().currentUser ? (
          <Component className={classes.container} {...props} />
        ) : (
          <Redirect to={{pathname: "/login", state: { from: props.location }}}/>
        )
      }
    />
  );

}

export default App;