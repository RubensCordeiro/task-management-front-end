import TaskItem from "./TaskItem";
import TaskService from "../../services/TaskService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function TaskList(props) {
  const { taskFilter } = props;
  const [tasks, setTasks] = useState([]);
  const { page } = useParams();

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJfaWQiOjJ9fQ.-CUJfiV9Qak_8ICWejNe44arw3qChMkAj0s68AFbp8g";

  async function loadTasks(taskFilter, page, authToken) {
    const pageFilter = taskFilter || "all";
    const token = authToken;
    const pageNumber = page || "1";
    const response = await TaskService.loadTasks(pageFilter, pageNumber, token);
    setTasks(response);
  }

  useEffect(() => {
    loadTasks(taskFilter, page, authToken);
  }, [taskFilter, page]);

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
    <div className="mt-2 px-4 py-2 bg-zinc-100 rounded-sm overflow-y-auto mx-auto flex flex-col items-center content-center">
      <button className="py-2 px-4 bg-teal-800 rounded text-white border border-transparent-700 mb-2 hover:bg-zinc-50 hover:text-teal-700 hover:border hover:border-teal-700 transition linear duration-150">
        <p className="text-sm">New Task</p>
      </button>
      {tasks.length > 0 && taskList}
      {tasks.length === 0 && <p>No tasks here.</p>}
    </div>
  );
}

export default TaskList;
