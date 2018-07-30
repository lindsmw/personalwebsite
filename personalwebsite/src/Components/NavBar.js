import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styles from '../CSS/NavBar.css';

/*
#FE6B8B #FF8E53
**/

class NavBar extends Component {
	render () {
    return(
        <div>
        <AppBar className="appbar" position="static" style={{/*backgroundColor:"#C5E1A5"*/ background:'linear-gradient(45deg, #B2DFDB 30%, #66BB6A 90%)'}} >
            <Toolbar className="toolbar">
                <Typography variant="display3" component="h1" className="appbar-title" /*variant="title" color="inherit"*/>
                MARGARET LINDSAY
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
}
export default NavBar;