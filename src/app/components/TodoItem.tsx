// 导入Todo类型
import { Todo } from "../types";

// 定义TodoItemProps接口，包含todo、deleteTodo和toggleTodo三个属性
interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

// 定义TodoItem组件，接收TodoItemProps类型的props
const TodoItem = ({ todo, deleteTodo, toggleTodo }: TodoItemProps) => {
  // 返回一个li元素，包含一个span元素和一个删除按钮
  return (
    <li>
      <span
        // 根据todo的completed属性，设置span元素的textDecoration样式
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => toggleTodo(todo.id)}>切换</button>
      <button onClick={() => deleteTodo(todo.id)}>删除</button>
    </li>
  );
};

// 导出TodoItem组件
export default TodoItem;
