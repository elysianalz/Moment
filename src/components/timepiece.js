import React from 'react';

// matierial ui
import { makeStyles, Container, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	piece: {
		flex: 1,
		backgroundColor: 'white',
		minHeight: 400,
		justifyContent: 'stretch',
		boxShadow: '0 10px 6px -4px rgb(0,0,0,0.4)',
		borderRadius: 2,
		padding: '30px 0px',
	},
	picture: {
		backgroundColor: 'gray',
		borderRadius: '100%',
		width: 120,
		height: 120,
		marginBottom: 30,
	},
	moments: {
		justifyContent: 'flex-start',
		height: 300,
		widht: 200,
		backgroundColor: 'gray',
	}
}));

const TimePiece = () => {
	const classes = useStyles();
	return (
		<div className={classes.piece}>
			<CssBaseline/>
			<Container>
				<div className={classes.picture}></div>
				<div className={classes.moments}>
					
				</div>
			</Container>
		</div>
	);
}

export default TimePiece;