import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: 'green',
    },
});


class Header extends Component {
    

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
            <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Spencer Faust
          </Typography>
                </Toolbar>
            </AppBar>
            </React.Fragment >
        );
    }
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
