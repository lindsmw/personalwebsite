import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import styles from '../CSS/AltIntroduction.css';
import Experience from './Experience'


const style = {
	/*paper: {
		background:'#E0F2F1',
	},*/
	title: {
		// textAlign: 'center',
		width: '40%',
		position: 'absolute',
    	top: '25%',
    	left: '25%',
    	transform: 'translate(-50%, -50%)',
    	color: 'black',
    	// border: '2px solid white',
    	textAlign: 'left',
        fontFamily: 'Questrial, sans-serif',
        // fontWeight: 'bold',
        letterSpacing: 2
	},
    facts: {
        width: '40%',
        position: 'absolute',
        top:'50%',
        left: '25%',
        transform: 'translate(-50%, -50%)',
        color: 'lightblue',
        textAlign: 'left',
        fontFamily: 'Questrial, sans-serif',
        // border: '2px solid white',

    },
	random: {
		// display: 'inline-block',
		float: 'left',
		padding: '5%',
		textAlign: 'left',
		verticalAlign: 'middle',
		paddingTop: '10%'
	},
	intro: {
		display: 'inline-block'
	}, 
    extra: {
        width: '30%',
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
                    <Typography variant="display1" component="h2" style={style.facts}>
                        Today in History fact?
                    </Typography>
                    <div className="rightHalf">
        				<div className="textContainer" >
            				<Typography /*className="random"*/ variant="display1" component="h3" style={style.random}>
            					Something Random 
            				</Typography>
        				</div>
        				<div className="textContainer2" >
            				<Typography /*className="intro"*/ variant="title" component="h3" style={style.random}>
            					My name's Margaret, but my friends call me Meg. I'll answer to both.
                                <br/><br/>
                                I was born in Philadelphia, raised in Houston, enhanced in Seattle, and now reside in Dallas.
                                <br /><br/>
                                I graduated from Southern Methodist University in 2018 with a Bachelor's Degree in Computer Science.
                                <br />
            				</Typography>
        				</div>
                        <div className="textContainer3">
                            {/*<Typography variant="display2" componen="h3" style={style.random}> 
                                lsKDVMalfbmalkdbmlm
                            </Typography>*/}
                            <Experience />
                        </div>
                    </div>
    			</div>
    			</Paper>
    			{/*</Paper>*/}
			</div>
    	)
    }
}

export default AltIntroduction;