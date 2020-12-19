import React, { useContext } from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@material-ui/core';
import { TodosContext } from './context/todos.context';

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  return (
    todos.length > 0 && (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <div key={todo.id}>
              <Todo {...todo} key={todo.id} />
              {index < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    )
  );
};

export default TodoList;
