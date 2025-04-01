
import { useState } from 'react';
import './App.css';
import InputContainer from './components/inputContainer';
import ItemsCointainer from './components/ItemsContainer';
import Count from './components/count';

function App() {
  const [todos,setTodos]=useState([])

  const addNewTodo=(newTodo)=>{
    setTodos([...todos,newTodo])
  }
  const deleteTodo=(itemToBeDeleted)=>{
    const filtereredTodo=todos.filter((item)=>item !==itemToBeDeleted)
    setTodos(filtereredTodo)
  }
  return (
    <div className="App">
     <h1>My ToDo</h1>
     <Count itemsCount={todos.length}/>
     <InputContainer addNewTodo={addNewTodo}/>
     <ItemsCointainer todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
