import React, { useState } from 'react';

function TaskAdder({ addTask }) {
  const [taskInput, setTaskInput] = useState('');

  const handleInput = (e) => {
    setTaskInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) {
      return;
    }
    addTask(taskInput);
    setTaskInput('');
  };

  return (
    <div className="my-4">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          value={taskInput}
          type="text"
          onChange={handleInput}
          placeholder='Add a task'
          className="border border-gray-300 rounded px-3 py-2 mr-2 w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default TaskAdder;
