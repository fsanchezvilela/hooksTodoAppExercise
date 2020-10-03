import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@material-ui/core';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo,index) => (
          <>
            <Todo
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              id={todo.id}
            />
            {index < todos.length - 1 && <Divider /> }
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
