import React from 'react';
import { Paper, List, Divider, ListItem, ListItemText } from '@material-ui/core';

const TodoList = ({ todos }) => {
    return (
        <Paper>
            <List>
                { todos.map( todo =>
                
                    <> 
                    {console.log(todo)}
                        <ListItem>
                            <ListItemText>{ todo.task }</ListItemText> 
                        </ListItem>
                        <Divider/>
                    </>
                )} 
            </List>
        </Paper>
    )
}

export default TodoList;
