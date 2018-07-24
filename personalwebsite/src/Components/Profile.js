import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import styles from '../CSS/profile.css';

const style = {
	height: 300,
	width: 300, 
	margin: 'auto',
	padding: 20,
	textAlign: 'center',
	position: 'center',
	display: 'inline-block',
	borderRadius: '50%',
	overflow:'hidden'

}

class Profile extends Component {

	render() {
		return (
			<div className="profilePaper">
				<Paper /*zDepth={3}*/ style={style} square={false}>
					<img src="" style={{width:'100%', height:'auto'}} alt="Meg Lindsay's face"/>
				</Paper>
			{/*<img src="public/profile.JPG" />*/}
			</div>
		)
	}
}

export default Profile;