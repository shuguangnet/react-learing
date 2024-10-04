interface TodoFiltersProps {
  setFilter: (filter: string) => void; // 用于切换过滤器的函数
  currentFilter: string; // 当前选中的过滤器
}

function TodoFilters({ setFilter, currentFilter }: TodoFiltersProps) {
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        style={{
          fontWeight: currentFilter === "all" ? "bold" : "normal",
        }}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        style={{
          fontWeight: currentFilter === "active" ? "bold" : "normal",
        }}
      >
        Active
      </button>
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

export default TodoFilters;
