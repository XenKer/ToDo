import React, { useState } from 'react';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import ToDoList from './components/ToDoList';

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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(weeklyTasks).map((day, index) => (
          <div key={day}>
            <h2 className="text-2xl font-bold mt-4 mb-2">
              {getDayWithOffset(index)}
            </h2>
            <ToDoList
              toDoList={weeklyTasks[day]}
              handleLineThrough={(id) => handleLineThrough(day, id)}
              handleClear={() => handleClear(day)}
              handleDelete={(id) => handleDelete(day, id)}
            />
            <TaskAdder
              addTask={(taskInput) => addTask(day, taskInput)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
