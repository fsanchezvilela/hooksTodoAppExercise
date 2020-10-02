import React from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';


const Todo = ({ task,  completed, removeTodo, id, toggleTodo }) => {
    return (
        <div>
       
            <ListItem>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                <ListItemText style={ { textDecoration: completed ? "line-through" : "none" } }>
                    { task }
                </ListItemText> 
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                        <Delete />
                    </IconButton>
                    <IconButton aria-label="Edit">
                        <Edit/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}

export default Todo
