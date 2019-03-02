import React, {Component} from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText
    } from '@material-ui/core';

class TodoListItem extends Component {
    render() {
        const {date, handleDateClick} = this.props;
        return (
            <ListItem 
            key={date}
            button
            onClick={() => handleDateClick(date)}
            >
                <ListItemText>{date}</ListItemText>
            </ListItem>
        )
    }
}


export default TodoListItem;
