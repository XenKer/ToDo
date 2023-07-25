import React, { useState } from 'react';
import Header from './components/Header';
import data from './data.json';
import ToDoList from './components/ToDoList';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleLineThrough = (id) => {
    let mappedStriking = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mappedStriking);
  };

  const handleClear = () => {
    let cleared = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(cleared);
  };

  const handleDelete = (id) => {
    let filteredList = toDoList.filter(task => task.id !== id);
    setToDoList(filteredList);
  };

  return (
    <div>
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleLineThrough={handleLineThrough}
        handleClear={handleClear}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
