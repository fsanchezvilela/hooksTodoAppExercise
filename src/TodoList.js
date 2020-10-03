import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@material-ui/core';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    todos.length > 0 && 
    <Paper>
      <List>
        {todos.map((todo,index) => (
          <div key={todo.id}>
            <Todo
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {index < todos.length - 1 && <Divider /> }
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
