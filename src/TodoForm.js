import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from "./hooks/useInputState";

const TodoForm = ({ addTodo }) => {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{ margin: "1rem 0", padding:"0 1rem" }}>
            <form onSubmit={event => {
                event.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField margin="normal" label="Add New Todo" fullWidth value={value} onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default TodoForm;
