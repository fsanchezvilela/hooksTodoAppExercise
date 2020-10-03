import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';

const EditTodoForm = ({ editTodo, id, task, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
};

export default EditTodoForm;