import React, { Component } from 'react';
import { Card, CardContent, CardMedia, CardHeader, Typography, GridList, GridListTile, Paper } from '@material-ui/core';


const style = {
	jobcard: {
		maxWidth:700,
		height: 300,
		margin: 35,
		padding: 20,
		display: 'inline-block',
		background:'#9E9E9E',
	},
	projectcard: {
		maxWidth: 300,
		height: 'auto',
		margin: 35,
		padding: 20,
		display: 'inline-block'
	},
	detail: {
		display: 'flex'
	},
	img: {
		width: 300,
		height: 'auto'
	},
	paper: {
		width: 'auto', 
		height: 'auto', 
		padding: 20, 
		display: 'inline-block',
		background: '#E0F2F1'
	},
	display2: {
		padding: 10,
		textAlign: 'center',
		borderBottom: '1px solid black',
		marginTop: 20
	},
	media: {
		width: 400,
		height: 'auto'
	}
}

class Experience extends Component {

	render() {
	const { classes } = this.props;

		return(
			<div className="jobContainer">
			{/*<GridList className={"backgroundGrid"} cellHeight={500} rows={2}>
				<GridListTile >*/}
			  <Paper style={style.paper} square={true} className="experiencePaper" elevation={3}>
			  	<Typography variant="display2" component="h1" style={style.display2}>
          			Work Experience
        		</Typography>
				<Card className="jobcard" style={style.jobcard}>
					<div style={style.detail} >
					<CardMedia>
						<img style={style.img} src="./favicon.ico" alt="stockmusic logo" />
					</CardMedia>
					<CardContent style={style.content}>
						<Typography variant="headline" component="h1">
						Software Engineer Intern, Summer 2017
						</Typography>
						<Typography variant="body1" >
						Stockmusic.net is a royalty-free music platform where thousands of users go to purchase music for commercials, business presentations, and those alike. 
						Working primarily on the backend, I wrote many PHP artisan commands that served the purpose of shortening the workload to access and manipulate data in 
						the database. This included commands to automatically transcode original music with the watermark tracks, retrieve details of a specific track, 
						and retrieve customer information all with certain specifications.
						</Typography>
					</CardContent>
					</div>
				</Card>
				<Card className="jobcard" style={style.jobcard}>
					<div style={style.detail} >
					<CardMedia>
						<img style={style.img} src="./favicon.ico" alt="microsoft logo" />
					</CardMedia>
					<CardContent>
						<Typography variant="headline" component="h1">
						Escalation Quality Analyst, Summer 2016
						</Typography>
						<Typography variant="body1">
						Description
						</Typography>

					</CardContent>
					</div>
				</Card>
				{/*</GridListTile>
				<GridListTile>*/}
				{/*<Card >
					<CardContent>
						<Typography variant="headline" component="h2">
						Background 2
						</Typography>
					</CardContent>
				</Card>*/}
				{/*</GridListTile>
			</GridList>*/}
				<Typography variant="display2" component="h1" style={style.display2}>
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
				</Card>
			</Paper>
			</div>
		)
	}

}

export default Experience;