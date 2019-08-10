import React, { Component } from "react";

// react-router
import { Redirect } from 'react-router-dom';

// firebase
import firebase from '../firebase';

// login screen
export default class ReLogin extends Component {

  state = { redirectToReferrer: false };
  
  login = () => {

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user; 
      this.setState({ redirectToReferrer: true });
    })

    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });

  };

  render() {

    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (

      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
      
    );

  }
}