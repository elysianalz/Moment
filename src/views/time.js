import React from 'react';

// material-ui
import { makeStyles, Container, CssBaseline } from '@material-ui/core';

//components
import TimePiece from '../components/timepiece';

const useStyles = makeStyles(theme => ({
	page: {
		display: 'flex',
		flexDirection: 'row',
		minHeight: '100%',
		paddingTop: 100,
		backgroundColor: '#00bfff',
	},
}));

const Time = () => {
	const classes = useStyles();
	return (
		<div className={classes.page}>
			<CssBaseline/>
			<Container>
				<TimePiece />
			</Container>
		</div>
	);
}

export default Time;