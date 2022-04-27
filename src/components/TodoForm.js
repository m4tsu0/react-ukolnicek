import React, { useState, useEffect, useRef } from 'react'; //autoamticky vybere formu
import {FormControl, InputGroup, Button, Stack } from 'react-bootstrap';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);//autoamticky vybere formu

  useEffect(() => {
    inputRef.current.focus();//autoamticky vybere formu
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

 const handleSubmit = e => {
    e.preventDefault(); //zabrani refreshi po zadani
    

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), //kazdy ukol ma random id at nejsou stejny
      text: input
    });
    setInput('');
  };

  return (
    <>
      <Stack gap = {5}>
        <InputGroup onSubmit={handleSubmit} 
                className="mx-auto" 
                class="form-control text-center"
                size="lg"
                style={{ width: '90%', height: '100%'}}
         >
      
        <FormControl
          placeholder='Add a todo'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}  //autoamticky vybere a "klikne" na formu
        />

        <Button onClick={handleSubmit} class='add-todo' variant='dark'>
          Add todo
        </Button>

        </InputGroup>
        <nadpisy className='nadpisy'>
          <text className='nadpis-ukol'>Ukol</text>
          <text className = 'nadpis-cas'>Cas</text>
          <text className='nadpis-akce'>Akce</text>
        </nadpisy>
      </Stack>
    </>
  );
}

export default TodoForm;