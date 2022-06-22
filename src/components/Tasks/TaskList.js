import TaskItem from "./TaskItem";
import TaskService from "../../services/TaskService";
import Pagination from "../UI/Pagination/Pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskList(props) {
  const { taskFilter } = props;
  const [tasks, setTasks] = useState([]);
  const [nextPageTasks, setNextPageTask] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const authToken = `Bearer ${localStorage.getItem("authToken")}`;

  async function loadTasks(taskFilter, page, authToken) {
    const pageFilter = taskFilter || "all";
    const token = authToken;
    const pageNumber = page || 1;
    const response = await TaskService.loadTasks(pageFilter, pageNumber, token);
    const nextPageTasks = await TaskService.loadTasks(
      pageFilter,
      parseInt(pageNumber) + 1,
      token
    );
    setTasks(response);
    setNextPageTask(nextPageTasks);
  }

  useEffect(() => {
    loadTasks(taskFilter, pageNumber, authToken);
  }, [taskFilter, pageNumber]);

  const taskList = tasks.map((task) => (
    <Link
      to={`/tasks/task/${task.id}`}
      className="w-full flex items-center content-center justify-center"
      key={task.id + task.user_id}
    >
      <TaskItem detailed={false} task={task} />
    </Link>
  ));

  return (
    <div className="mt-2 px-4 py-2 bg-zinc-100 rounded-sm overflow-y-auto mx-auto flex flex-col items-center content-center gap-y-4">
      <button className="py-2 px-4 bg-teal-800 rounded text-white border border-transparent-700 mb-2 hover:bg-zinc-50 hover:text-teal-700 hover:border hover:border-teal-700 transition linear duration-150">
        <Link to="/tasks/new">
          <p className="text-sm">New Task</p>
        </Link>
      </button>
      {tasks.length > 0 && (
        <>
          <Pagination
            currentPage={pageNumber}
            nextPageTasks={nextPageTasks}
            onChangePage={(page) => setPageNumber(page)}
            taskFilter={taskFilter}
          />
          {taskList}
          <Pagination
            currentPage={pageNumber}
            nextPageTasks={nextPageTasks}
            onChangePage={(page) => setPageNumber(page)}
            taskFilter={taskFilter}
          />
        </>
      )}
      {tasks.length === 0 && <p>No tasks here.</p>}
    </div>
  );
}

export default TaskList;
