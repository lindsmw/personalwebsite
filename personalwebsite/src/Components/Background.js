import React, { Component } from 'react';
import { Card, CardContent, Typography, GridList, GridListTile } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Background extends Component {

	render() {
	const { classes } = this.props;

		return(
			<div>
			<GridList className={"backgroundGrid"} cellHeight={160} rows={2}>
				<GridListTile >
				<Card>
					<CardContent>
						<Typography variant="headline" component="h2">
						Background
						</Typography>
					</CardContent>
				</Card>
				</GridListTile>
				<GridListTile>
				<Card >
					<CardContent>
						<Typography variant="headline" component="h2">
						Background 2
						</Typography>
					</CardContent>
				</Card>
				</GridListTile>
			</GridList>
			</div>
		)
	}

}

export default Background;