function TaskHeader() {
  return (
    <div className="flex flex-col align-center justify-center">
      <div className="flex flex-col content-center justify-center">
        <p className="self-center">Hello, User. You have X tasks</p>
      </div>
      <ul className="flex flex-wrap gap-x-8 justify-center content-center py-1 border-t border-b border-teal-600 mt-2">
        <li className="cursor-pointer hover:text-teal-700 font-medium">All</li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          Urgent
        </li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">Late</li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          Today
        </li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          Tomorrow
        </li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          Next week
        </li>
      </ul>
    </div>
  );
}

export default TaskHeader;
