import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { 
        Typography , Paper, 
        AppBar, Toolbar, 
        Grid 
} from "@material-ui/core";

const TodoApp = props => {
    const initialTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: true },
        { id: 3, task: "Grow Beard", completed: false }
    ];

    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        console.log(newTodoText);
        setTodos([...todos,{id: 4, task: newTodoText,}])
    }
    return (
        <Paper style={{
            padding:0,
            margin:0,
            height: "100vh",
            backgroundColor: "#fafafa",
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height:"64px"}}>
                <Toolbar>
                    <Typography color='inherit'>
                        TODOS WITH HOOKS
                    </Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={ addTodo }/>
            <TodoList todos={todos}/>
        </Paper>
    )
}

export default TodoApp
