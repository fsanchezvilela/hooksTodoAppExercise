import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from "./hooks/useInputState";

const TodoForm = ({ addTodo }) => {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper>
            <form onSubmit={event => {
                event.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default TodoForm;
