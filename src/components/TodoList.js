import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {Stack} from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) { //aby se vesel text kdyz jsou mezery
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };



  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };



  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  
  return (
    <>
      <p></p>
        <ukolnicek className='ukolnicek'>Ukolnicek</ukolnicek>
        <Stack gap ={5}/>
      <p></p>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      
    </>
  );
}

export default TodoList;