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
const ToDoList = ({ toDoList }) => {
  return (
    <div>
      {toDoList.map(todo => {
        return (
            <div key={todo.id}>         
           {todo.task}
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
