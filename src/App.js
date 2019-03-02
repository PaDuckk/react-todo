import React, { Component } from 'react';
import DrawerAppBar from './DrawerAppBar';
import TodoView from './TodoView';
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

  state = {
    todos: [
      { id: 0, type: 'bool', text: ' 리액트 소개', checked: false, group:'todo', date:'2019-03-01', alarm: false },
      { id: 1, type: 'bool', text: ' 리액트 소개', checked: false, group:'todo', date:'2019-03-01', alarm: false },
      { id: 2, type: 'bool', text: ' 리액트 소개', checked: false, group:'todo', date:'2019-03-02', alarm: false },
      { id: 3, type: 'bool', text: ' 리액트 소개', checked: false, group:'공부', date:'2019-03-03', alarm: false }
    ]
  }

  handleTodoToggle = (i) => {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.todos[i].checked = !stateCopy.todos[i].checked;
    this.setState(stateCopy);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        { /* main content*/ }
        <CssBaseline />

        { /* App Bar*/ }
        <DrawerAppBar todos={this.state.todos} />
        
        { /* main content*/ }
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <TodoView 
            todos={this.state.todos}
            handleTodoToggle={this.handleTodoToggle.bind(this)}
            />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
