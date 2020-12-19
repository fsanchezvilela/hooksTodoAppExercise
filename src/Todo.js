import React, { useContext } from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { TodosContext } from './context/todos.context';

const Todo = ({ id, task, completed }) => {
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed || false}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => toggle()}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
