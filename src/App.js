import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import data from './data.json'
import ToDoList from './components/ToDoList';

function App() {
  const [toDoList, setToDoList] = useState(data);

  return (
    <div>
      <Header/>
      <ToDoList toDoList={toDoList}/>
      
    </div>
    
  )
}

export default App;
