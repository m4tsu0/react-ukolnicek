import React from 'react';

import { Button, Stack } from 'react-bootstrap';

const Todo = ({ todos, completeTodo, removeTodo,/* updateTodo */}) => {

  return todos.map((todo, index) => (    
    <div //checkne jestli je ukol dokoncen
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div //bez tohohle jsou jen tlacitka
      >
        {todo.text} 
      </div>
      
        <div className='icons'>
          <Stack direction="horizontal" gap={1}>

            {new Date().toLocaleString()} 

              <Button
                onClick={() => removeTodo(todo.id)} //odstrani
                className="btn btn-secondary"
                >
               Odstranit
              </Button>

              <Button
                className="btn btn-dark"
                key={todo.id} 
               onClick={() => completeTodo(todo.id)} //preskrtne
                >
                Dokonceno 
              </Button>
          </Stack> 
        </div>
    </div>
  ));

};


export default Todo;