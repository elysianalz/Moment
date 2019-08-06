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

// views
import Login from './views/login';
import Profile from './views/profile';
import Home from './views/home';
import Landing from './views/landing';

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
    height: '100%',
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
          <Route exact path="/"  component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </div>
        
        <PrivateRoute path="/profile" className={classes.container} component={Profile} />

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