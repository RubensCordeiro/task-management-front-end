import { useState } from "react";
import { useParams } from "react-router";
import TaskForm from "../components/Forms/TaskForm";
import TaskService from "../services/TaskService";
import GlobalContainer from "../components/UI/Layout/GlobalContainer";
import { useEffect } from "react";

const authToken = `Bearer ${localStorage.getItem("authToken")}`;

export default function EditTaskPage() {
  const { taskId } = useParams();
  const [task, setTask] = useState("");

  async function getTask(taskId, authToken) {
    const response = await TaskService.getTask(taskId, authToken);
    setTask(response);
  }

  useEffect(() => {
    getTask(taskId, authToken);
  }, [taskId]);

  return (
    <GlobalContainer>
      {task.error && (
        <p className="mb-2 text-center p-4 bg-red-200 rounded-sm">
          {task.error}
        </p>
      )}
      {!task.error && (
        <>
          <p className="mb-2 w-full text-center">Edit yout task</p>
          <TaskForm baseTask={task} />
        </>
      )}
    </GlobalContainer>
  );
}
