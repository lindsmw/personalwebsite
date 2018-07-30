import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import styles from '../CSS/profile.css';

const style = {
	paper: {
		height: 400,
		width: 400, 
		margin: 'auto',
		//padding: 20,
		textAlign: 'center',
		position: 'center',
		display: 'inline-block',
		borderRadius: '50%',
		overflow:'hidden'
	},
	paragraphs: {
		display: 'flex',
		width: '300'
	},

}

class Profile extends Component {

	render() {
		return (		
			<div className="profileDiv">
			<br />
				<div className="paragraphContainer">
				<Typography variant="title" component="h1">
					Bad Website? Nah, Bad you.
				</Typography>
				</div>
				<Paper /*zDepth={3}*/ style={style.paper} square={false} className="paperContainer">
					<img src="./profile.jpg" style={{width:'100%', height:'auto'}} alt="Meg Lindsay's face"/>
				</Paper>
				<div className="paragraphContainer">
				<Typography variant="title" component="h1" >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Typography>
				</div>
			{/*<img src="public/profile.JPG" />*/}
			</div>
		)
	}
}

export default Profile;