import React, { Component } from 'react';
import { Card, CardContent, CardMedia, CardHeader, Typography, GridList, GridListTile, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const style = {
	jobcard: {
		// maxWidth:710,
		// width: '46%',
		height: 'auto',
		margin: '5%',
		padding: '1%',
		// display: 'inline-block',
		// background:'#E0F2F1',
		verticalAlign: 'top',
		raised: true, 
	},
	/*projectcard: {
		maxWidth: 300,
		height: 'auto',
		margin: 35,
		padding: 20,
		display: 'inline-block'
	},*/
	detail: {
		display: 'flex'
	},
	img: {
		height: 'auto',
		width: '40%'
	},
	paper: {
		width: 'auto', 
		height: 'auto', 
		padding: 0, 
		display: 'inline-block',
		// background: '#E0F2F1'
	},
	display1: {
		paddingLeft: '5%',
		textAlign: 'left',
		// marginTop: '1%'
		paddingTop: '10%',
	},
	/*media: {
		width: 400,
		height: 'auto',
		margin: 5,
		// vserticalAlign: 'center'
	}, */
	content: {
		paddingTop: 10,
		paddingRight: 0
		// flex: '1 0 auto'
	},
	type: {
		// width:'100%'
	}
}

class Experience extends Component {

	constructor(props) {
		super(props);

		console.log(this.props)

	}

	render(props) {
	const { classes } = this.props;

		return(
			<div className="jobContainer">
			  {/*<Paper style={style.paper} square={true} className="experiencePaper" elevation={3}>*/}
			  	<Typography variant="display1" component="h1" style={style.display1}>
          			Work Experience
        		</Typography>
				<Card className="jobcard" style={style.jobcard}>
					<div style={style.detail} >
						<CardMedia>
							<img style={style.img} src={require("../Images/stockmusic.png")} alt="stockmusic logo" />
						</CardMedia>
						<CardContent style={style.content}>
							<Typography variant="headline" component="h1">
							Software Engineer Intern, Summer 2017
							</Typography>
							<Typography variant="body1" style={style.type}>
							Backend work in PHP, writing artisan commands that served the purpose of shortening the workload to access and manipulate data in 
							the database. This included commands to automatically transcode original music with the watermark tracks, retrieve details of a specific track, 
							and retrieve customer information, each with certain specifications.
							</Typography>
						</CardContent>
					</div>
				</Card>
				<Card className="jobcard" style={style.jobcard}>
					<div style={style.detail} >
						<CardMedia>
							<img style={style.img} src={require("../Images/microsoft.png")} alt="microsoft logo" />
						</CardMedia>
						<CardContent style={style.content} >
							<Typography variant="headline" component="h1" >
							Escalation Quality Analyst, Summer 2016
							</Typography>
							<br />
							<Typography variant="body1">
							Description
							</Typography>
						</CardContent>
					</div>
				</Card>
				{/*<Typography variant="display3" component="h1" style={style.display3}>
					Projects
				</Typography>
				<Card className="projectcard" style={style.projectcard}>
					<CardMedia>
						<img style={style.img} src="./favicon.ico" alt="project logo" />
					</CardMedia>
					<CardContent>
						<Typography variant="headline" component="h1">
						Choir Connect Web Application
						</Typography>
					</CardContent>
				</Card>
				<Card className="projectcard" style={style.projectcard}>
					<CardMedia>
						<img style={style.img} src="./favicon.ico" alt="project logo" />
					</CardMedia>
					<CardContent>
						<Typography variant="headline" component="h1">
						NinjaTrader Automation Software
						</Typography>
					</CardContent>
				</Card>*/}
			{/*</Paper>*/}
			</div>
		)
	}

}

export default Experience;