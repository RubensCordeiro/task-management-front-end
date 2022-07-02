import TaskItem from "../components/Tasks/TaskItem";
import TaskHeader from "../components/Tasks/TaskHeader";
import { useParams } from "react-router";
import TaskService from "../services/TaskService";
import { useEffect, useState } from "react";
import GlobalContainer from "../components/UI/Layout/GlobalContainer";

function TaskDetailsPage() {
  const [task, setTask] = useState("");
  const { taskId } = useParams();

  const authToken = `Bearer ${localStorage.getItem("authToken")}`;

  async function getTask(taskId, authToken) {
    const response = await TaskService.getTask(taskId, authToken);
    setTask(response);
  }

  useEffect(() => {
    getTask(taskId, authToken);
  }, [taskId, authToken]);

  return (
    <GlobalContainer>
      <TaskHeader />
      <div className="mt-2 px-4 py-4 bg-zinc-100 rounded-sm overflow-y-auto mx-auto flex flex-col items-center content-center">
        {!task && <p>Loading...</p>}
        {task.error && (
          <p className="text-zinc-900 font-semibold">{task.error}</p>
        )}
        {task.title && <TaskItem task={task} detailed={true} />}
      </div>
    </GlobalContainer>
  );
}

export default TaskDetailsPage;
