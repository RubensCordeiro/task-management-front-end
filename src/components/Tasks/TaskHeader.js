import { useNavigate } from "react-router-dom";

function TaskHeader() {
  const nav = useNavigate();

  function stylePage(page) {
    return window.location.href.includes(page)
      ? "text-teal-600 border-b border-teal-600"
      : "";
  }

  function styleMainPage() {
    return stylePage("urgent") ||
      stylePage("late") ||
      stylePage("today") ||
      stylePage("tomorrow") ||
      stylePage("next_week") ||
      stylePage("finished")
      ? ""
      : "text-teal-600 border-b border-teal-600";
  }

  function goToPage(link) {
    nav(link);
    window.location.reload();
  }

  return (
    <div className="flex flex-col align-center justify-center">
      <div className="flex flex-col content-center justify-center">
        <p className="self-center">Hello, User</p>
      </div>
      <ul className="flex flex-wrap gap-x-8 justify-center content-center py-1 border-t border-b border-teal-600 mt-2">
        <li
          className={`cursor-pointer hover:text-teal-700 font-medium ${styleMainPage()}`}
          onClick={() => goToPage("/tasks")}
        >
          <p>All</p>
        </li>
        <li
          className={`cursor-pointer hover:text-teal-700 font-medium ${stylePage(
            "urgent"
          )}`}
          onClick={() => goToPage("/tasks/urgent")}
        >
          <p>Urgent</p>
        </li>
        <li
          className={`cursor-pointer hover:text-teal-700 font-medium ${stylePage(
            "late"
          )}`}
          onClick={() => goToPage("/tasks/late")}
        >
          <p>Late</p>
        </li>
        <li
          className={`cursor-pointer hover:text-teal-700 font-medium ${stylePage(
            "today"
          )}`}
          onClick={() => goToPage("/tasks/today")}
        >
          <p>Today</p>
        </li>
        <li
          className={`cursor-pointer hover:text-teal-700 font-medium ${stylePage(
            "tomorrow"
          )}`}
          onClick={() => goToPage("/tasks/tomorrow")}
        >
          <p>Tomorrow</p>
        </li>
        <li
          className={`cursor-pointer hover:text-teal-700 font-medium ${stylePage(
            "next_week"
          )}`}
          onClick={() => goToPage("/tasks/next_week")}
        >
          <p>Next Week</p>
        </li>
        <li
          className={`cursor-pointer hover:text-teal-700 font-medium ${stylePage(
            "finished"
          )}`}
          onClick={() => goToPage("/tasks/finished")}
        >
          <p>Finished</p>
        </li>
      </ul>
    </div>
  );
}

export default TaskHeader;
