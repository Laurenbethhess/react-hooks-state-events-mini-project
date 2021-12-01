import React from "react";

function Task({task, handleDelete}) {


  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => handleDelete(task.text)} className="delete">X</button>
    </div>
  );
}

export default Task;




// import React from "react";

// function Task({task}) {

//   function handleClick(event) {
//     event.target.parentElement.remove()
//   }
//   return (
//     <div className="task">
//       <div className="label">{task.category}</div>
//       <div className="text">{task.text}</div>
//       <button onClick = {handleClick} className="delete">X</button>
//     </div>
//   );
// }

// export default Task;