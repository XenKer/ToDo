import React from 'react';
import data from '../data.json'

// const ToDo = ({ todo }) => {
//   return (
//     <div>
//       {todo.task}
//     </div>
//   );
// };


//map through tasks
const ToDoList = ({ toDoList, handleLineThrough, handleClear }) => {
  return (
    <div>
      {toDoList.map(todo => {
        return (
          <div
            key={todo.id}
            className={`font-medium ${todo.complete ? "line-through" : ""} cursor-pointer`}
            onClick={() => handleLineThrough(todo.id)} 
          >
            {todo.task}
          </div>
        );
      })} <br/>
      <button
      onClick={handleClear}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-300"
    >
        Clear!
      </button>
    </div>
  );
};

export default ToDoList;

