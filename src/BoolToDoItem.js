import React, {Component} from 'react';
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Checkbox,
    IconButton,
    Input
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

class BoolTodoItem extends Component {
    state = {
        value: this.props.todo.text,
        isEdit: false
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    handleEditClick = (e) => {
        
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    render() {
        const { handleEditClick, todo, handleTodoToggle } = this.props;

        if (this.state.isEdit) {
            return (
                <ListItem divider>
                    <Input
                    fullWidth
                    disableUnderline
                    autoFocus
                    value={this.state.value}
                    onChange={this.handleChange}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onKeyPress={(e)=> {
                        if (e.key === 'Enter') {
                            handleEditClick(todo.id , this.state.value);
                            this.handleEditClick();
                        }
                    }}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={this.handleEditClick}>
                            <CancelIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )
        } else {
            return  (
                <ListItem divider button onClick={() =>{ handleTodoToggle(todo.id)}}>
                    <Checkbox
                    tabIndex={-1}
                    checked={todo.checked}
                    disableRipple
                    />
                    <ListItemText primary={todo.text} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={this.handleEditClick}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )
        }
    }
}

export default BoolTodoItem;