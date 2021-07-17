import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div>
        <li>
          <button onClick={() =>{props.onSelect(props.id)}}>❌</button>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default ToDoLists;
