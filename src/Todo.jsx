import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const Todo = () => {
  const [inputList, setInputList] = useState(" ");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(" ");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="add todo"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItem}> + </button>

          <ol>
            {/* <li>{inputList}</li>*/}
            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
