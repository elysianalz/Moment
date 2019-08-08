import React from 'react';

// material ui
import { makeStyles, Typography } from '@material-ui/core';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

// styles
const useStyles = makeStyles(theme => ({
	facebookLogin: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		border: '1px solid #3b5998',
		width: 320,
		padding: '5px 10px',
		borderRadius: 10,
		backgroundColor: '#3b5998',
		boxShadow: '0 8px 6px -6px rgb(0,0,0,0.4)',
		marginBottom: 20,
	},
	buttonText: {
		width: 150,
		fontFamily: 'Quicksand',
		color: 'white',
	},
	fbIcon: {
		color: 'white',
		padding: '-5px 0px',
	},
	iconBackground: {
		backgroundColor: 'white',
		padding: '-5px 0px',
	}
}));

function handleClick(){
	alert('click');
}

const FacebookButton = () => {

	const classes = useStyles();

	return (
		<div onClick={handleClick} className={classes.facebookLogin}>
			<FontAwesomeIcon className={classes.fbIcon} size="6x" icon={faFacebookSquare} />
			<Typography className={classes.buttonText} variant='h5' >Connect with Facebook</Typography>
		</div>
	);
}

export default FacebookButton;