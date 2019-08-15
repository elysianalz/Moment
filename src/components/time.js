import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core';

// components
import Moment from './moment';

const useStyles = makeStyles(theme => ({
	time: {
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
}));

const Time = () => {
	const classes = useStyles();
	return (
		<div className={classes.time}>
			<Moment/>
		</div>
	);
}

export default Time;