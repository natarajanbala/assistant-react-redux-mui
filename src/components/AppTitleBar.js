import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppTitleBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h1" component="h2">
                    Assistant
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppTitleBar;