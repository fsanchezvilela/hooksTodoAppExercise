import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@material-ui/core';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <List>
            <Todo
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              id={todo.id}
            />
            <Divider />
          </List>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
