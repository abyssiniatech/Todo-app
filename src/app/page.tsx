
"use client";
import { useState } from "react";
import
import { Todo } from "../types/todo";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Footer from "../components/Footer";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

 
  const updateTodo = (id: string, text: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      )
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}   
      />
      <Footer />
    </main>
  );
}
