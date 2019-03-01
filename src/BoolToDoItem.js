import React, {Component} from 'react';
import {
    ListItem,
    ListItemText,
    Checkbox
} from '@material-ui/core';

class BoolTodoItem extends Component {
    
    render() {
        const { todo } = this.props;
        return(
            <ListItem>
                <Checkbox
                tabIndex={-1}
                disableRipple
                />
                <ListItemText primary={`Line item`} />
            </ListItem>
        );
    }
}

export default BoolTodoItem;