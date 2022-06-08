import TaskItem from "../components/Tasks/TaskItem";
import TaskHeader from "../components/Tasks/TaskHeader";
import { useParams } from "react-router";
import TaskService from "../services/TaskService";
import { useEffect, useState } from "react";

function TaskDetailsPage() {
  const [task, setTask] = useState("");
  const { taskId } = useParams();

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJfaWQiOjJ9fQ.-CUJfiV9Qak_8ICWejNe44arw3qChMkAj0s68AFbp8g";

  async function getTask(taskId, authToken) {
    const response = await TaskService.getTask(taskId, authToken);
    setTask(response);
  }

  useEffect(() => {
    getTask(taskId, authToken);
  }, [taskId]);

  return (
    <section>
      <TaskHeader />
      <div className="mt-2 px-4 py-2 bg-zinc-100 rounded-sm overflow-y-auto mx-auto flex flex-col items-center content-center">
        {!task && <p>Loading...</p>}
        {task.error && (
          <p className="text-zinc-900 font-semibold">{task.error}</p>
        )}
        {task.title && <TaskItem task={task} detailed={true} />}
      </div>
    </section>
  );
}

export default TaskDetailsPage;