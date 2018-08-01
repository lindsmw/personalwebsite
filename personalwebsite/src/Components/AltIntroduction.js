import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import styles from '../CSS/AltIntroduction.css';


const style = {
	paper: {
		background:'#E0F2F1',
	},
	title: {
		// textAlign: 'center',
		position: 'absolute',
    	top: '50%',
    	left: '25%',
    	transform: 'translate(-50%, 100%)',
    	color: 'black'
	},
	random: {
		display: 'inline-block',
		float: 'left'
	},
	intro: {
		display: 'inline-block'
	}
}

class AltIntroduction extends Component {
	render () {
    	return(
    			
    		<div className="parent" >
    		{/*<Paper style={style.paper} >*/}
    			<div className="leftHalf" >
    				<img src={require("../Images/IMG_0413copy.png")} alt="neature" style={{width: '100%', opacity: '0.7'}} />
    				{/*<Typography variant="display3" component="h1" style={style.title}> 
    					Margaret Lindsay
    				</Typography>*/}
    			</div>
    			<div className="rightHalf" >
    				
    			</div>
    			{/*</Paper>*/}
			</div>
    	)
    }
}

export default AltIntroduction;