import React, { useState } from 'react';
import Header from './components/Header';
import data from './data.json';
import ToDoList from './components/ToDoList';
import TaskAdder from './components/TaskAdder';

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

  const addTask = (taskInput) => {
    let alreadyTasks = [...toDoList];
    alreadyTasks.push({id: toDoList.length + 1, task: taskInput, complete: false})
    setToDoList(alreadyTasks);
  }

  return (
    <div>
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleLineThrough={handleLineThrough}
        handleClear={handleClear}
        handleDelete={handleDelete}
      />
      <TaskAdder 
        addTask = {addTask}
      />

    </div>
  );
}

export default App;
