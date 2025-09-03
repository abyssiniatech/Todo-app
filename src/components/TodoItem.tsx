"use client";
import { Todo } from "../types/todo";
import styles from "../styles/TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className={styles.checkbox}
      />
      <span className={todo.completed ? styles.completed : ""}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className={styles.delete}>
        ❌
      </button>
    </li>
  );
}
