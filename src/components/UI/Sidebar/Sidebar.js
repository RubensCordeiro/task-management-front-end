import Backdrop from "../Backdrop/Backdrop";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";

export default function Sidebar(props) {
  const { onHideSidebar, visible } = props;
  const nav = useNavigate();
  const { authenticated } = useContext(authContext);

  function goToPage(link) {
    nav(link);
    // window.location.reload();
  }

  return (
    <>
      {visible && <Backdrop onCancel={onHideSidebar} />}
      <aside
        className={`absolute top-0 w-48 -left-48 h-screen bg-zinc-100 border-r border-zinc-400 rounded-sm z-50 ${visible ? "translate-x-48" : "translate-x-0"
          } transition linear duration-300`}
      >
        <ul className="flex flex-col items-start py-8 gap-y-2 text-lg">
          <li
            className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
            onClick={() => goToPage("/")}
          >
            <p>Home</p>
          </li>
          {
            authenticated && <>
              <li
                className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
                onClick={() => goToPage("/tasks")}
              >
                <p>All</p>
              </li>
              <li
                className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
                onClick={() => goToPage("/tasks/urgent")}
              >
                <p>Urgent</p>
              </li>
              <li
                className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
                onClick={() => goToPage("/tasks/late")}
              >
                <p>Late</p>
              </li>
              <li
                className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
                onClick={() => goToPage("/tasks/today")}
              >
                <p>Today</p>
              </li>
              <li
                className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
                onClick={() => goToPage("/tasks/tomorrow")}
              >
                <p>Tomorrow</p>
              </li>
              <li
                className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
                onClick={() => goToPage("/tasks/next_week")}
              >
                <p>Next Week</p>
              </li>
              <li
                className="cursor-pointer hover:bg-zinc-300 hover:shadow-lg font-medium w-full px-4 py-2"
                onClick={() => goToPage("/tasks/finished")}
              >
                <p>Finished</p>
              </li>
            </>
          }
        </ul>
      </aside>
    </>
  );
}
