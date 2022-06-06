import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="mt-2 px-4 py-2 bg-zinc-100 rounded-sm overflow-y-auto mx-auto flex flex-col items-center content-center">
      <button className="py-2 px-4 bg-teal-700 rounded text-white border border-transparent-700 mb-2 hover:bg-zinc-50 hover:text-teal-700 hover:border hover:border-teal-700 transition linear duration-150">
        <p className="text-sm">New Task</p>
      </button>
      <TaskItem detailed={false} />
      <TaskItem detailed={false} />
      <TaskItem detailed={false} />
      <TaskItem detailed={false} />
      <TaskItem detailed={false} />
    </div>
  );
}

export default TaskList;
