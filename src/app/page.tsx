"use client";
import { useState } from "react";
import AddTodos from "./components/AddTodos";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import { Todo } from "./types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div>
      <h1>TodoList</h1>
      <AddTodos addTodo={addTodo} />
      <TodoFilters
        setFilter={setFilter} // 定义一个名为currentFilter的变量
        currentFilter={filter}
      />
      <TodoList
        todos={getFilteredTodos()}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}
