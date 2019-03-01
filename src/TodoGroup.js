import React, { Component } from 'react';
import {List, Typography} from '@material-ui/core';
import BoolTodoItem from './BoolToDoItem';

class TodoGroup extends Component {
    render() {
        // console.log(this.props.todos,this.props.todos.group )
        const {todos} = this.props;
        return (
            <div>
                <Typography variant="h4">{todos[0].group}</Typography>
                <List>
                    {todos.map(todo => {
                       return <BoolTodoItem todo={todo}/>
                    })}
                </List>
            </div>
        );
    }
}

export default TodoGroup;