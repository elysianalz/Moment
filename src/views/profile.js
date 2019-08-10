import React from 'react';

// material ui
import { makeStyles, CssBaseline, Container, Box, Typography } from '@material-ui/core';

// components
import TimeMachine from '../components/timemachine';

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
				<div>
					<Typography>
						Welcome to your time machine.
					</Typography>
				</div>
				<TimeMachine/>
			</Container>
		</div>
	);
}

export default Profile;