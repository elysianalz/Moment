import React from 'react';

// material-ui
import { makeStyles, Typography } from '@material-ui/core';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
	googleLogin: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		border: '1px solid #d2d2d2',
		width: 320,
		padding: '5px 10px',
		borderRadius: 10,
		backgroundColor: '#d2d2d2',
		boxShadow: '0 8px 6px -6px rgb(0,0,0,0.4)',
		marginBottom: 20,
	},
	buttonText: {
		width: 150,
		fontFamily: 'Quicksand',
		color: '#2d2d2d',
		fontWeight: 'bold',
	},
	gIcon: {
		color: '#d34836',
		padding: '-5px 0px',
	},
}));

function handleClick(){
	alert('click');
}

const GoogleButton = () => {

	const classes = useStyles();

	return (
		<div onClick={handleClick} className={classes.googleLogin}>
			<FontAwesomeIcon className={classes.gIcon} size="6x" icon={faGoogle} />
			<Typography className={classes.buttonText} variant='h5' >Connect with Google</Typography>
		</div>
	);
}

export default GoogleButton;