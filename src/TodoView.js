import React, { Component } from 'react';
import {List, Typography} from '@material-ui/core';
import TodoGroup from './TodoGroup';

class TodoView extends Component {
    render() {
        const { handleEditClick, todos, handleTodoToggle } = this.props;
        const groupNames = []
        const groups = todos.reduce((groups, todo) => {
            const group = todo.group; 
            if (!groups.hasOwnProperty(group)) {
                groups[group] = [todo];
                groupNames.push(group);
            } else {
                groups[group].push(todo);
            }
            return groups;
          },[]);
        return (
            <div>
                {groupNames.map( groupName =>{
                    return (
                    <TodoGroup 
                    key={groups[groupName]}
                    todos={groups[groupName]}
                    handleTodoToggle={handleTodoToggle}
                    handleEditClick={handleEditClick}
                    /> 
                )})}
            </div>
        );
    }
}

export default TodoView;