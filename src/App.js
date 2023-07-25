import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import data from './data.json'
import ToDoList from './components/ToDoList';

function App() {
  const [toDoList, setToDoList] = useState(data);
  

  const handleLineThrough = (id) => {
    let mappedStriking = toDoList.map(task => {
      return task.id == id ? {...task, complete: !task.complete} :{...task};
    })
    setToDoList(mappedStriking);
  }

  const handleClear = () => {
    let cleared = toDoList.filter(task => {
      return !task.complete;
    })
    setToDoList(cleared)
  }

  return (
    <div>
      <Header/>
      <ToDoList toDoList={toDoList} handleLineThrough={handleLineThrough} handleClear={handleClear}/>
      
    </div>
    
  )
}

export default App;
