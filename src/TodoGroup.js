import React, { Component } from 'react';
import {List, Typography} from '@material-ui/core';
import BoolTodoItem from './BoolToDoItem';

class TodoGroup extends Component {
    render() {
        // console.log(this.props.todos,this.props.todos.group )
        const { handleEditClick, todos, handleTodoToggle} = this.props;
        return (
            <div>
                <Typography variant="h4">{todos[0].group}</Typography>
                <List>
                    {todos.map(todo => {
                       return <BoolTodoItem
                              key={todo.id} 
                              todo={todo} 
                              handleTodoToggle={handleTodoToggle}
                              handleEditClick={handleEditClick}
                              />
                    })}
                </List>
            </div>
        );
    }
}

export default TodoGroup;