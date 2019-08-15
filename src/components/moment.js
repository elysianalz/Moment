import React from 'react';

import { makeStyles } from '@material-ui/core';

// image
import Image from '../images/soragrit-wongsa-aV5xrpB0bwQ-unsplash.jpg';


const useStyles = makeStyles(theme => ({
	polaroid: {
		backgroundColor: 'white',
		padding: 25,
		borderRadius: 2,
	},
	image: {
		width: 200,
		height: 260,
		backgroundImage: 'url(' + Image + ')',
		backgroundPostion: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	caption: {
		fontFamily: 'Caveat',
		fontSize: 22,
		fontWeight: 'bold',
	},
}));

const Moment = () => {
	const classes = useStyles();
	return (
		<div className={classes.polaroid}>
			{/*<img className={classes.image} src={Image} />*/}
			<div className={classes.image}></div>
			<div className={classes.caption}>
				<span>caption</span>
			</div>
		</div>
	);
}

export default Moment;