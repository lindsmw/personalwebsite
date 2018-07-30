import React, { Component } from 'react';
import { Card, CardContent, CardMedia, CardHeader, Typography, GridList, GridListTile, Paper } from '@material-ui/core';

const style = {
	card: {
		maxWidth:700,
		// height: 400,
		margin: 35,
		padding: 20,
		display: 'inline-block',
		background:'#9E9E9E',
	},
	detail: {
		display: 'flex'
	},
	img: {
		width: 400,
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
				<Card className="jobcard" style={style.card}>
					<div style={style.detail} >
					<CardMedia>
						<img style={style.img} src="./stockmusic.png" alt="stockmusic logo" />
					</CardMedia>
					<CardContent style={style.content}>
						<Typography variant="headline" component="h1">
						Software Engineer Intern, Summer 2017
						</Typography>
						<Typography variant="body1" >
						Description
						</Typography>
					</CardContent>
					</div>
				</Card>
				<Card className="jobcard" style={style.card}>
					<div style={style.detail} >
					<CardMedia>
						<img style={style.img} src="./microsoft.png" alt="microsoft logo" />
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
			</Paper>
			</div>
		)
	}

}

export default Experience;