import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider, ListItem, ListItemText } from '@material-ui/core';

const TodoList = ({ todos }) => {
    return (
        <Paper>
            <List>
                { todos.map( todo =>
                
                    <> 
                        <Todo task={todo.task} key={todo.id} completed={todo.completed}/>
                        <Divider/>
                    </>
                )} 
            </List>
        </Paper>
    )
}

export default TodoList;
