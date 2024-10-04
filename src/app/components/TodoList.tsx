import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
  todos: Array<Todo>;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList = ({ todos, deleteTodo, toggleTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
