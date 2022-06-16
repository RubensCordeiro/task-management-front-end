import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Checkbox from "./Checkbox";
import Fieldset from "./Fieldset";
import Textarea from "./Textarea";
import Input from "./Input";
import InlineFieldset from "./InlineFieldset";
import InlineSelect from "./InlineSelect";
import Button from "../UI/Buttons/Button";
import useErrors from "../../hooks/useErrors";
import TaskService from "../../services/TaskService";
import InputHandler from "../../utils/InputHandler";

function TaskForm(props) {
  const { baseTask } = props;
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState(false);
  const [priority, setPriority] = useState("low");
  const { setError, hasError, getErrorMessages } = useErrors();
  const nav = useNavigate();

  const buttonAvailable =
    !hasError("title") &
    !hasError("date") &
    (title?.length > 0) &
    (dueDate?.length > 0);

  function handleTitleChange(title) {
    setTitle(title);
    InputHandler.emptyFieldErrorHandler({
      inputValue: title,
      setErrorFunction: setError,
      fieldName: "title",
      errorMessage: "Title must not be empty",
      errorExists: hasError("title"),
    });
  }

  function handleDateChange(date) {
    setDueDate(date);
    InputHandler.emptyFieldErrorHandler({
      inputValue: dueDate,
      setErrorFunction: setError,
      fieldName: "date",
      errorMessage: "Date must not be empty",
      errorExists: hasError("date"),
    });
  }

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJfaWQiOjJ9fQ.-CUJfiV9Qak_8ICWejNe44arw3qChMkAj0s68AFbp8g";

  async function createtask(task, authToken) {
    await TaskService.createTask(task, authToken);
    alert("Task Created successfully");
    nav("/tasks/1");
  }

  async function editTask(taskId, task, authToken) {
    await TaskService.editTask(taskId, task, authToken);
    alert("Task editted successfully");
    nav("/tasks/1");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const task = {
      title,
      summary,
      due_date: dueDate,
      description,
      urgent: urgency,
      priority,
    };

    if (!baseTask) {
      createtask(task, authToken);
    } else {
      editTask(baseTask.id, task, authToken);
    }
  }

  useEffect(() => {
    setTitle(baseTask?.title || "");
    setSummary(baseTask?.summary || "");
    setDueDate(
      (baseTask?.due_date &&
        new Date(baseTask?.due_date).toISOString().split("T")[0]) ||
        ""
    );
    setDescription(baseTask?.description || "");
    setPriority(baseTask?.priority || "low");
    setUrgency(baseTask?.urgent || false);
  }, [
    baseTask?.title,
    baseTask?.summary,
    baseTask?.due_date,
    baseTask?.description,
    baseTask?.urgent,
    baseTask?.priority,
  ]);

  return (
    <>
      <form
        className="mt-2 bg-zinc-50 p-4 rounded-sm border border-zinc-400 shadow-lg max-w-xl mx-auto flex flex-col gap-y-2"
        onSubmit={handleSubmit}
      >
        <Fieldset label={"Title"} errors={getErrorMessages("title")}>
          <Input
            inputParams={{
              type: "text",
              id: "Title",
              placeholder: "Your task title",
              value: title,
            }}
            error={hasError("title")}
            changeHandler={(title) => handleTitleChange(title)}
            blurHandler={() =>
              InputHandler.blurHandler({
                inputValue: title,
                setErrorFunction: setError,
                fieldName: "title",
                errorMessage: "Title must not be empty",
                errorExists: hasError("title"),
              })
            }
          />
        </Fieldset>
        <Fieldset label={"Summary"}>
          <Input
            inputParams={{
              type: "text",
              id: "Summary",
              placeholder: "Task Summary",
              value: summary,
            }}
            changeHandler={(e) => setSummary(e)}
          />
        </Fieldset>
        <Fieldset label={"Due-Date"} errors={getErrorMessages("date")}>
          <Input
            inputParams={{
              type: "date",
              id: "Due-Date",
              value: dueDate,
            }}
            error={hasError("date")}
            changeHandler={(date) => handleDateChange(date)}
            blurHandler={() =>
              InputHandler.blurHandler({
                inputValue: dueDate,
                setErrorFunction: setError,
                fieldName: "date",
                errorMessage: "Date must not be empty",
                errorExists: hasError("date"),
              })
            }
          />
        </Fieldset>
        <Fieldset label={"Description"}>
          <Textarea
            inputParams={{
              name: "Description",
              id: "Description",
              value: description,
            }}
            changeHandler={(e) => setDescription(e)}
          />
        </Fieldset>
        <div className="flex gap-x-4 items-center justify-center gap-x-16">
          <InlineFieldset label={"Urgency"}>
            <Checkbox
              inputParams={{
                id: "urgent",
                value: urgency,
                checked: baseTask?.urgent || false,
              }}
              changeHandler={(e) => setUrgency(e)}
            />
          </InlineFieldset>
          <InlineFieldset label={"Priority"}>
            <InlineSelect
              inputParams={{
                name: "Priority",
                id: "Priority",
                options: ["Low", "Medium", "High"],
                value: priority,
              }}
              changeHandler={(e) => setPriority(e)}
            />
          </InlineFieldset>
        </div>
        {buttonAvailable ? (
          <Button type={"submit"} color="teal">
            {baseTask ? "Edit Task" : "Create Task"}
          </Button>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default TaskForm;
