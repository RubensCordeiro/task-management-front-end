import TaskForm from "../components/Forms/TaskForm";
import GlobalContainer from "../components/UI/Layout/GlobalContainer";
function NewTaskPage() {
  return (
    <GlobalContainer>
      <p className="mb-2 w-full text-center">Create a new Task</p>
      <TaskForm />
    </GlobalContainer>
  );
}

export default NewTaskPage;
