import React from 'react';

const ToDoList = ({ toDoList, handleLineThrough, handleClear, handleDelete }) => {
  return (
    <div>
      {toDoList.map(todo => {
        return (
          <div key={todo.id} className={`flex items-center mb-2`}>
            <div
              className={`font-medium cursor-pointer ${todo.complete ? "line-through" : ""}`}
              onClick={() => handleLineThrough(todo.id)}
            >
              {todo.task}
            </div>
            <button
              className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md shadow-md focus:outline-none focus:ring focus:ring-red-300"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <br />
      <button
        onClick={handleClear}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-300"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
