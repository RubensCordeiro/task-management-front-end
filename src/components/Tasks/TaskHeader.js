import { Link } from "react-router-dom";

function TaskHeader() {
  return (
    <div className="flex flex-col align-center justify-center">
      <div className="flex flex-col content-center justify-center">
        <p className="self-center">Hello, User. You have X tasks</p>
      </div>
      <ul className="flex flex-wrap gap-x-8 justify-center content-center py-1 border-t border-b border-teal-600 mt-2">
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          <Link to="/tasks/1">All</Link>
        </li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          <Link to="/tasks/urgent/1">Urgent</Link>
        </li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          <Link to="/tasks/late/1">Late</Link>
        </li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          <Link to="/tasks/today/1">Today</Link>
        </li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          <Link to="/tasks/tomorrow/1">Tomorrow</Link>
        </li>
        <li className="cursor-pointer hover:text-teal-700 font-medium">
          <Link to="/tasks/next_week/1">Next Week</Link>
        </li>
      </ul>
    </div>
  );
}

export default TaskHeader;
