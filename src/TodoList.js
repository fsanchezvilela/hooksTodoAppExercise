import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider, } from '@material-ui/core';

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
    return (
        <Paper>
            <List>
                { todos.map( todo =>
                
                    <> 
                        <Todo 
                            task={todo.task} 
                            key={todo.id} 
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            id = {todo.id}
                            />
                        <Divider/>
                    </>
                )} 
            </List>
        </Paper>
    )
}

export default TodoList;
