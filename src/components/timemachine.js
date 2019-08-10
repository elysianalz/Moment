import React from 'react';

// firebase
import firebase from '../firebase';

// material ui
import { makeStyles, Typography } from '@material-ui/core';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// styles
const useStyles = makeStyles(theme => ({
	timezone: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		height: 400,
		border: "1px solid #4682b4",
		borderRadius: 5,
		backgroundColor: '#4682b4',
		boxShadow: 'inset 0 0 20px #483d8b',
	},
	plus: {
		color: '#483d8b',
		opacity: 0.6,
		fontFamily: 'Quicksand',
		fontWeight: 'bold',
		marginBottom: 15,
	},
}));

const TimeMachine = () => {
	const classes = useStyles();
	return (
		<div className={classes.timezone}>
			<FontAwesomeIcon className={classes.plus} size="6x" icon={faPlus} />
			<Typography className={classes.plus}>create time</Typography>
		</div>
	);
}

export default TimeMachine;