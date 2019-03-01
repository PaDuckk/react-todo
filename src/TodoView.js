import React, { Component } from 'react';
import {List, Typography} from '@material-ui/core';
import TodoGroup from './TodoGroup';

class TodoView extends Component {
    render() {
        const { todos } = this.props;
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
          console.log(groupNames);

        return (
            <div>
                {groupNames.map( groupName => <TodoGroup todos={groups[groupName]}/> )}
            </div>
        );
    }
}

export default TodoView;