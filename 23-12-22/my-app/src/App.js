import React, {useState, useEffect, useRef, useCallback} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import {MdEdit, MdDelete} from 'react-icons/md';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [userInput, setUseInput] = useState('');
  const [todoIndex, setTodoIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [editing, setEditing] = useState(false);

  const ref = useRef(null);

  const addTodoHandler = useCallback(() => {
    const prevTodos = [...todos];

    if(userInput === '') {
      return;
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: userInput
      };

      const newTodos = prevTodos.concat(newTodo);

      setTodos(newTodos)
    }

    setUseInput('');
  }, [todos, userInput]);

  const editTodoHandler = useCallback((index) => {
    setTodoIndex(index);
    setEditing(true);
  }, []);

  const saveEditTodoHandler = useCallback((id) => {
    setEditing(false);
    setTodoIndex(null);

    const prevTodos = [...todos];

    const newTodos = prevTodos.map((todo) => {
      if(todo.id === id) {
        if(editText !== '') {
          todo.text = editText;
        } else {
          return todo;
        }
      }
      return todo;
    });

    setTodos(newTodos);
  }, [editText, todos]);

  const deleteTodoHandler = useCallback((id) => {
    const prevTodos = [...todos];
    const newTodos = prevTodos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  },
  [todos]
  );

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <span>Total tasks: {todos.length}</span>
        <div className='input-container'>
          <input 
            type='text' 
            value={userInput} 
            onChange={(e) => setUseInput(e.target.value)}
            ref={ref}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        {todos.length === 0 && <h2>Start adding some tasks...</h2>}
        <div className='todos-container-parent'>
          {todos.map((todo, index) => (
            <div key={todo.id} className='todos-container-child'>
            {editing && todoIndex === index ? (
              <div>
                <input type='text' defaultValue={todo.text} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={() => saveEditTodoHandler(todo.id)}>Save</button>
              </div>
            ) 
            :
            <>
            <div><h3>{todo.text}</h3></div>
            <div>
              <MdEdit 
                className='icon' 
                onClick={() => editTodoHandler(index)}
              />
              <MdDelete 
                className='icon' 
                onClick={ () => deleteTodoHandler(todo.id)}
              />
            </div>
            </>
            }
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
