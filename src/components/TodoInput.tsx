"use client";
import { useState, FormEvent } from "react";
import styles from "../styles/TodoInput.module.css";
interface TodoInputProps {
  addTodo: (text: string) => void;
}
export default function TodoInput({ addTodo }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
}
