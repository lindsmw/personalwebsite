import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import styles from '../CSS/AltIntroduction.css';


const style = {
	/*paper: {
		background:'#E0F2F1',
	},*/
	title: {
		// textAlign: 'center',
		maxWidth: '40%',
		position: 'absolute',
    	top: '50%',
    	left: '25%',
    	transform: 'translate(-50%, -50%)',
    	color: 'black',
    	border: '2px solid white',
    	textAlign: 'center'
	},
	random: {
		// display: 'inline-block',
		// float: 'left'
		padding: '1%',
		textAlign: 'center',
		verticalAlign: 'middle',
		paddingTop: '10%'
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
    			<Paper>
    			<div className="leftHalf" >
    				<img src={require("../Images/IMG_0413copy.png")} alt="neature" style={{width: '100%', height: '100%', opacity: '0.7', float: 'left', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}} />
    				<Typography variant="display4" component="h1" style={style.title}> 
    					Welcome.
    				</Typography>
    				{/*<div className="rightHalf" >*/}
    				<div className="textContainer" >
    				<Typography /*className="random"*/ variant="display1" component="h3" style={style.random}>
    					This will contain something random. Some nonsense that I want to be included on my page for fun. 
    				</Typography>
    				</div>
    				<div className="textContainer2" >
    				<Typography /*className="intro"*/ variant="display1" component="h3" style={style.random}>
    					hello
    				</Typography>
    				</div>
    			</div>
    			</Paper>
    			{/*</Paper>*/}
			</div>
    	)
    }
}

export default AltIntroduction;