import React from 'react';

// material ui
import { Container, CssBaseline, Typography, makeStyles, Box } from '@material-ui/core';

// image
import Image from '../images/soragrit-wongsa-aV5xrpB0bwQ-unsplash.jpg';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHome, faBoxOpen, faHeart } from '@fortawesome/free-solid-svg-icons';
//import { faHeart } from '@fortawesome/free-regular-svg-icons';


// material styles
const useStyles = makeStyles(theme => ({
	
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		justifyItems: 'center',
		//backgroundImage: "url(" + Image + ")",
		backgroundPosition: 'center',
    	backgroundRepeat: 'no-repeat',
    	backgroundSize: 'cover',
    	height: '100%',
	},

	hero: {
		color: 'white',
		fontFamily: 'Quicksand',
		fontWeight: 'light',
		textShadow: '0px 5px 8px #ffffff',
	},

	page: {
		minHeight: '100%',
		
	},

	heroImage: {
		minHeight: '100vh',
		minWidth: '100vw',
		backgroundImage: "url(" + Image + ")",
		backgroundPosition: 'center',
    	backgroundRepeat: 'no-repeat',
    	backgroundSize: 'cover',
    	position: 'fixed',
    	zIndex: -1,
	},

	legend: {
		backgroundColor: '#00bfff',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems:'center',
		minHeight: '100%',
		paddingBottom: 50,
		boxShadow: '0 -8px 6px -6px rgb(0,0,0,0.4)',
	},

	legendText: {
		color: 'white',
		fontFamily: 'Quicksand',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 20,
	},

	legendItem: {
		display: 'flex',
		flexBasis: 200,
		flexDirection: 'column',
		alignItems: 'center',
	},

	legendary: {
		display: 'flex',
		padding: 20,
		justifyContent: 'space-around',
		marginBottom: 50,
		marginTop: 50,
	},

	fbLegend: {
		color: 'white',
		fontFamily: 'Quicksand',
		textAlign: 'center',
	},

	white: {
		color: 'white',
	},

	iconContainer: {
		marginTop: -50,
		padding: 45,
		borderRadius: '100%',
		backgroundColor: '#00bfff',
		borderColor: '#00bfff',
		boxShadow: '0 -8px 6px -6px rgb(0,0,0,0.4)',
		zIndex: 0,
	},

}));

const Landing = () => {

	const classes = useStyles();

	return (
			
			<div className={classes.page}>

				<div className={classes.heroImage}></div>

				<div className={classes.container}>
					<CssBaseline />
					<Typography className={classes.hero} variant="h2" >
						keep a time of moments
					</Typography>
				</div>
				
				<div className={classes.constainer}>

					<div className={classes.legend}>

						<div className={classes.iconContainer}>
							<FontAwesomeIcon className={classes.white} size="6x" icon={faCamera} />
						</div>

						<div className={classes.legendary}>

							<div className={classes.legendItem}>
								<FontAwesomeIcon className={classes.white} size="6x" icon={faHeart} />
								<Typography className={classes.legendText}>
									Save your moments in time with love
								</Typography>
							</div>

							<div className={classes.legendItem}>
								<FontAwesomeIcon className={classes.white} size="6x" icon={faHome} />
								<Typography className={classes.legendText}>
									Create a family and cherish your time together
								</Typography>
							</div>

							<div className={classes.legendItem}>
								<FontAwesomeIcon className={classes.white} size="6x" icon={faBoxOpen} />
								<Typography className={classes.legendText}>
									Tuck your memories away in a safe place
								</Typography>
							</div>

						</div>

						<div>
							<Typography variant="h5" className={classes.fbLegend}>
								Connect with Facebook
							</Typography>
						</div>
						
					</div>

				</div>

			</div>

	);
}

export default Landing;