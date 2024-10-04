// 导入TodoItem组件
import TodoItem from "./TodoItem";
// 导入Todo类型
import { Todo } from "../types";

// 定义TodoListProps接口，包含todos、deleteTodo、toggleTodo三个属性
interface TodoListProps {
  todos: Array<Todo>;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

// 定义TodoList组件，接收TodoListProps类型的props
const TodoList = ({ todos, deleteTodo, toggleTodo }: TodoListProps) => {
  // 返回一个ul元素，包含todos数组中的每个todo元素
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

// 导出TodoList组件
export default TodoList;
