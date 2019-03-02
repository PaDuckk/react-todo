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

  constructor(props){
    super(props)
    const date = new Date();
    this.state = {
      selectDate: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
      todos: [
        { id: 0, type: 'bool', text: ' 리액트 소개', checked: false, group:'todo', date:'2019-3-1', alarm: false },
        { id: 1, type: 'bool', text: ' 리액트 소개', checked: false, group:'todo', date:'2019-3-1', alarm: false },
        { id: 2, type: 'bool', text: ' 리액트 소개', checked: false, group:'todo', date:'2019-3-2', alarm: false },
        { id: 3, type: 'bool', text: ' 리액트 소개', checked: false, group:'공부', date:'2019-3-3', alarm: false },
        { id: 4, type: 'bool', text: ' 리액트 소개', checked: false, group:'공부', date:'2019-3-4', alarm: false },
        { id: 5, type: 'bool', text: ' 리액트 소개', checked: false, group:'공부', date:'2019-3-4', alarm: false },
        { id: 6, type: 'bool', text: '집가기', checked: false, group:'todo', date:'2019-3-4', alarm: false },
        { id: 7, type: 'bool', text: '리액트 공부', checked: false, group:'공부', date:'2019-3-4', alarm: false },
        { id: 8, type: 'bool', text: '영어', checked: false, group:'공부', date:'2019-3-4', alarm: false },
        { id: 9, type: 'bool', text: '숨쉬기', checked: false, group:'운동', date:'2019-3-4', alarm: false },
        { id: 10, type: 'bool', text: ' 걷기', checked: false, group:'운동', date:'2019-3-4', alarm: false }
      ]
    }
  }

  handleTodoToggle = (i) => {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.todos[i].checked = !stateCopy.todos[i].checked;
    this.setState(stateCopy);
  }

  handleEditClick = (i,newText) => {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.todos[i].text = newText;
    this.setState(stateCopy);
  }

  handleDateClick = (date) => {
    console.log(date);
    this.setState({
      selectDate : date
    });
  }
  render() {
    const { classes } = this.props;
    const filterdByDateTodo = this.state.todos.filter(todo => {
      console.log(this.state.selectDate,'1')
      return todo.date === this.state.selectDate;
    });
    console.log(filterdByDateTodo)
    return (
      <div className={classes.root}>
        { /* main content*/ }
        <CssBaseline />

        { /* App Bar*/ }
        <DrawerAppBar 
        todos={this.state.todos} 
        handleDateClick={this.handleDateClick.bind(this)}
        />
        
        { /* main content*/ }
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <TodoView 
            todos={filterdByDateTodo}
            handleTodoToggle={this.handleTodoToggle.bind(this)}
            handleEditClick={this.handleEditClick.bind(this)}
            />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
