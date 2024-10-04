// 定义一个接口，用于描述TodoFiltersProps组件的属性
interface TodoFiltersProps {
  setFilter: (filter: string) => void; // 用于切换过滤器的函数
  currentFilter: string; // 当前选中的过滤器
}

// 定义一个函数组件，用于渲染过滤器按钮
function TodoFilters({ setFilter, currentFilter }: TodoFiltersProps) {
  return (
    <div>
      {/* 点击按钮时，调用setFilter函数，将过滤器设置为"all" */}
      <button
        onClick={() => setFilter("all")}
        style={{
          fontWeight: currentFilter === "all" ? "bold" : "normal",
        }}
      >
        All
      </button>
      {/* 点击按钮时，调用setFilter函数，将过滤器设置为"active" */}
      <button
        onClick={() => setFilter("active")}
        style={{
          fontWeight: currentFilter === "active" ? "bold" : "normal",
        }}
      >
        Active
      </button>
      {/* 点击按钮时，调用setFilter函数，将过滤器设置为"completed" */}
      <button
        onClick={() => setFilter("completed")}
        style={{
          fontWeight: currentFilter === "completed" ? "bold" : "normal",
        }}
      >
        Completed
      </button>
    </div>
  );
}

// 导出TodoFilters组件
export default TodoFilters;
