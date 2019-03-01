import React, {Component} from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText
    } from '@material-ui/core';

class TodoListItem extends Component {
    render() {
        const {date} = this.props;
        return (
            <ListItem button>
                <ListItemText>{date}</ListItemText>
            </ListItem>
        )
    }
}


export default TodoListItem;
