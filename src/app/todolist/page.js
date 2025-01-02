'use client'
import { useState } from 'react';
import styles from './todolist.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../redux/todoslice';
export default function page() {

  const [todo,setTodo] = useState("");
  const todoList = useSelector((data) => data.todoData.todos); 
  const dispatch = useDispatch();
  console.log(todoList)
  return (
    <>
      <div className={styles['todo-Container']}>
        <div className={styles["todo-header"]}>
          <h1>To-Do List</h1>
        </div>
        <div className={styles["todo-input"]}>
          <input type="text" placeholder="Add a new task..." value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button onClick={() => dispatch(addTodos(todo))}>Add</button>
        </div>
        <ul className={styles["todo-list"]}>
          {todoList.map((elem) =>(
          
          <li key={elem.id}>
            <span>{elem.name}</span>
            <button>&times;</button>
          </li>
          )
          )}
        </ul>
      </div>
    </>
  );
}
