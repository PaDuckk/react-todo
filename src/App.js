import React, { Component } from 'react';
import DrawerAppBar from './DrawerAppBar';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        { /* main content*/ }
        <CssBaseline />

        { /* App Bar*/ }
        <DrawerAppBar />
        
        { /* main content*/ }
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
