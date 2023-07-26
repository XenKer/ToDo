import React, { useState } from 'react';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import ToDoList from './components/ToDoList';
import TaskAdder from './components/TaskAdder';

function App() {
  const initialData = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  const [weeklyTasks, setWeeklyTasks] = useState(initialData);

  const handleLineThrough = (day, id) => {
    const updatedTasks = { ...weeklyTasks };
    updatedTasks[day] = updatedTasks[day].map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task };
    });
    setWeeklyTasks(updatedTasks);
  };

  const handleClear = (day) => {
    const updatedTasks = { ...weeklyTasks };
    updatedTasks[day] = updatedTasks[day].filter(task => !task.complete);
    setWeeklyTasks(updatedTasks);
  };

  const handleDelete = (day, id) => {
    const updatedTasks = { ...weeklyTasks };
    updatedTasks[day] = updatedTasks[day].filter(task => task.id !== id);
    setWeeklyTasks(updatedTasks);
  };

  const addTask = (day, taskInput) => {
    const updatedTasks = { ...weeklyTasks };
    const alreadyTasks = [...updatedTasks[day]];
    alreadyTasks.push({ id: updatedTasks[day].length + 1, task: taskInput, complete: false });
    updatedTasks[day] = alreadyTasks;
    setWeeklyTasks(updatedTasks);
  }

  const getDayWithOffset = (offset) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const targetDate = new Date(currentDate);
    targetDate.setDate(targetDate.getDate() + offset);
    return days[targetDate.getDay()] + " - " + targetDate.toLocaleDateString();
  };

  const addTask = (taskInput) => {
    let alreadyTasks = [...toDoList];
    alreadyTasks = [...alreadyTasks, {id: toDoList.length+1, task: taskInput, complete:false}]
    setToDoList(alreadyTasks);
  }

  return (
    <div className="min-h-screen bg-gray-100">
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
