import React from 'react';

// firebase authentication - storage - db
import firebase from '../firebase';

// material ui
import { 
	Container, 
	CssBaseline, 
	Typography, 
	makeStyles, 
	Box,
	Button } from '@material-ui/core';

// custom components
import FacebookButton from '../components/facebookbutton';
import GoogleButton from '../components/googlebutton';

// image
import Image from '../images/martin-lopez-36BoGkBAFg4-unsplash.jpg';

const useStyles = makeStyles(theme => ({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		justifyItems: 'center',
    	height: '100%',
    	backgroundImage: 'url(' + Image + ')',
    	backgroundPosition: 'center',
    	backgroundRepeat: 'no-repeat',
    	backgroundSize: 'cover',
	},

	page: {
		minHeight: '100%',
		
	},

}));

const Login = () => {
	const classes = useStyles();
	return (
		<div className={classes.page}>
			<CssBaseline/>
			<div className={classes.container}>
				<FacebookButton/>
				<GoogleButton />
			</div>
			
		</div>
	);
}

export default Login;