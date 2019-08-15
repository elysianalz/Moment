import React from 'react';

// material ui
import { makeStyles, CssBaseline, Container, Box, Typography } from '@material-ui/core';

// components
import TimeMachine from '../components/timemachine';
import Time from '../components/time';

const useStyles = makeStyles(theme => ({
	page: {
		display: 'flex',
		flexDirection: 'row',
		minHeight: '100%',
		paddingTop: 100,
		backgroundColor: '#00bfff',
	},
	indent: {
		color: '#483d8b',
	}
}));

const Profile = () => {
	const classes = useStyles();
	return (
		<div className={classes.page}>
			<CssBaseline/>
			<Container>
				<TimeMachine/>
				<Time/>
			</Container>
		</div>
	);
}

export default Profile;