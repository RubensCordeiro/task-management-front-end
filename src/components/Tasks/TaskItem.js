function TaskItem(props) {
  const { detailed } = props;
  return (
    <div className="w-full md:w-3/4 px-4 py-4 bg-zinc-50 border border-zinc-300 rounded cursor-pointer hover:shadow-lg transition duration-200 linear mb-4">
      <div className="flex justify-between content-center items-center">
        <p className="font-bold">Task Title</p>
        <p className="text-sm">Due: 01/01/2023</p>
      </div>
      <div className=" py-2">
        <p className="text-base font-bold">Summary:</p>
        <p className="text-justify text-sm py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi totam
          in eveniet. Expedita, illum natus.
        </p>
      </div>
      <div className="flex content-center items-center justify-center gap-x-8 border-y border-zinc-500">
        <ul className="flex gap-x-8 items-center content-center justify-center py-2 w-full text-xs">
          <li className="px-2 py-1 rounded-sm border border-zinc-700 text-center">
            Low urgency
          </li>
          <li className="px-2 py-1 rounded-sm border border-zinc-700 text-center">
            In Progress
          </li>
          <li className="px-2 py-1 rounded-sm border border-zinc-700 text-center">
            On time
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
