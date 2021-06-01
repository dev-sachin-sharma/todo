import React, { useState, useEffect } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const localCheck = JSON.parse(localStorage.getItem("todoArray"));

  if (!localCheck) {
    const setArray = [];
    localStorage.setItem("todoArray", JSON.stringify(setArray));
  }

  useEffect(() => {}, [todo]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    let todoArray = JSON.parse(localStorage.getItem("todoArray"));
    const object = {
      todo,
    };
    todoArray.push(object);
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
    setTodo("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Todo App</div>
      <div className={styles.addingContainer}>
        <input type="text" onChange={handleChange} value={todo} />
        <button onClick={addTodo}>+</button>
      </div>
      {localCheck && localCheck.length > 0 && (
        <div className="todoContainer">
          {localCheck.map((data) => (
            <div className={styles.todoItem}>{data.todo}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
