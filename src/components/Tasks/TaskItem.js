function TaskItem(props) {
  const { task, detailed } = props;
  const taskDate = new Date(task.due_date);
  const today = new Date();

  return (
    <div className="w-full md:w-3/4 px-4 py-4 bg-zinc-50 border border-zinc-300 rounded cursor-pointer hover:shadow-lg transition duration-200 linear mb-4">
      <div className="flex justify-between content-center items-center">
        <p className="font-bold">{task.title}</p>
        <p className="text-sm">{taskDate.toLocaleDateString("pt-br")}</p>
      </div>
      <div className=" py-2">
        <p className="text-base font-bold">Summary:</p>
        <p className="text-justify text-sm py-2">{task.summary}</p>
      </div>
      <div className="flex content-center items-center justify-center gap-x-8 border-y border-zinc-500">
        <ul className="flex gap-x-8 items-center content-center justify-center py-2 w-full text-xs">
          <li className="px-2 py-1 rounded-sm border border-zinc-700 text-center">
            {task.urgent && "High Urgency"}
            {task.urgent || "Low Urgency"}
          </li>
          <li className="px-2 py-1 rounded-sm border border-zinc-700 text-center">
            In Progress
          </li>
          <li className="px-2 py-1 rounded-sm border border-zinc-700 text-center">
            {taskDate <= today && "In time"}
            {taskDate > today && "Late"}
          </li>
        </ul>
      </div>
      {detailed && (
        <div className="mt-3">
          <ul className="flex content-center items-center justify-center gap-x-8">
            <li className="hover:text-teal-700 cursor-pointer font-medium">
              Edit Task
            </li>
            <li className="hover:text-red-700 cursor-pointer font-medium">
              Delete Task
            </li>
            <li className="hover:text-teal-700 cursor-pointer font-medium">
              Mark as finished
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
