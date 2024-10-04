import { useState } from "react";
// 定义一个接口，用于接收addTodo函数
interface AddTodoProps {
  addTodo: (text: string) => void;
}
// 定义一个函数组件，接收addTodo函数作为props
function AddTodos({ addTodo }: AddTodoProps) {
  // 使用useState钩子，定义一个text状态，用于存储输入框的值
  const [text, setText] = useState("");
  // 定义一个handleSubmit函数，用于处理表单提交事件
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 阻止表单默认提交行为
    e.preventDefault();
    // 如果输入框的值为空，则直接返回
    if (text.trim().length === 0) return;
    // 调用addTodo函数，将输入框的值作为参数传入
    addTodo(text);
    // 将输入框的值清空
    setText("");
    // console.log(text);
  };
  // 返回一个包含表单的div元素
  return (
    <div className="add-todos">
      <form onSubmit={handleSubmit}>
        <input
          // 输入框的值与text状态绑定
          type="text"
          value={text}
          // 当输入框的值发生变化时，更新text状态
          onChange={(e) => setText(e.target.value)}
        />
        <button>新建事项</button>
      </form>
    </div>
  );
}
// 导出AddTodos组件
export default AddTodos;
