import React, { useState } from 'react'

function TaskAdder({addTask}) {

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
    <div>
        <form onSubmit={handleSubmit}>
            <input value={taskInput} type="text" onChange={handleInput} placeholder='Add a task'></input>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default TaskAdder