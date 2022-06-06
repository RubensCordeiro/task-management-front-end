import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="mt-2 p-4 bg-zinc-100 rounded-sm overflow-y-auto mx-auto flex flex-col gap-y-8 items-center content-center">
      <TaskItem detailed={false} />
      <TaskItem detailed={false} />
      <TaskItem detailed={false} />
      <TaskItem detailed={false} />
      <TaskItem detailed={false} />
    </div>
  );
}

export default TaskList;
