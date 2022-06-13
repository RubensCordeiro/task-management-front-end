import Backdrop from "../Backdrop/Backdrop";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const { onHideSidebar } = props;
  return (
    <>
      <Backdrop onCancel={onHideSidebar} />
      <aside className="absolute top-0 left-0 w-48 h-screen bg-zinc-100 border-r border-zinc-400 rounded-sm z-50">
        <ul className="flex flex-col items-start py-8 gap-y-2 text-lg">
          <li
            className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
            onClick={onHideSidebar}
          >
            <Link to="/tasks/1">All tasks</Link>
          </li>
          <li
            className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
            onClick={onHideSidebar}
          >
            <Link to="/tasks/urgent/1">Urgent tasks</Link>
          </li>
          <li
            className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
            onClick={onHideSidebar}
          >
            <Link to="/tasks/late/1">Late tasks</Link>
          </li>
          <li
            className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
            onClick={onHideSidebar}
          >
            <Link to="/tasks/today/1">Today tasks</Link>
          </li>
          <li
            className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
            onClick={onHideSidebar}
          >
            <Link to="/tasks/tomorrow/1">Tomorrow tasks</Link>
          </li>
          <li
            className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
            onClick={onHideSidebar}
          >
            <Link to="/tasks/next_week/1">Next Week tasks</Link>
          </li>
          <li
            className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
            onClick={onHideSidebar}
          >
            <Link to="/tasks/finished/1">Finished tasks</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
