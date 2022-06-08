import TaskForm from "../components/Forms/TaskForm";

function NewTaskPage() {
  return (
    <section className="mt-8">
      <p className="mb-2 w-full text-center">Create a new Task</p>
      <TaskForm />
    </section>
  );
}

export default NewTaskPage;
