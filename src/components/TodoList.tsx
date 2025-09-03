"use client";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";
import styles from  "../styles/TodoList.module.css";
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
}

export default function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }: TodoListProps) {
  return (
    <ul className={styles.list}>
      <AnimatePresence>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}








