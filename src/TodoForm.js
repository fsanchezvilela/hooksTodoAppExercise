import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import { TodosContext } from './context/todos.context';

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = useContext(TodosContext);
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          margin="normal"
          label="Add New Todo"
          fullWidth
          value={value}
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
