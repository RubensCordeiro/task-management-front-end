import FieldSet from "./Fieldset";
import CheckBox from "./CheckBox";
import FormSubmitButton from "./FormSubmitButton";
import SelectFieldset from "./SelectFieldset";
import { useState } from "react";
import { useNavigate } from "react-router";

import TaskService from "../../services/TaskService";

function TaskForm() {
  const [titleValid, setTitleValid] = useState(false);
  const [dueDateValid, setDueDateValid] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [urgency, setUrgency] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const buttonDisabled = titleValid & dueDateValid ? false : true;

  const navigate = useNavigate();

  const isInputEmpty = (input) => input.length > 0;

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJfaWQiOjJ9fQ.-CUJfiV9Qak_8ICWejNe44arw3qChMkAj0s68AFbp8g";

  async function createTask(task, authToken) {
    const response = await TaskService.createTask(task, authToken);
  }

  function submitHandler(e) {
    e.preventDefault();
    const task = {
      title,
      summary,
      due_date: dueDate,
      urgent: urgency,
      description,
      priority: priority || "low",
    };
    createTask(task, authToken);
    // navigate("/tasks");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="mt-2 bg-zinc-50 p-4 rounded-sm border border-zinc-400 shadow-lg max-w-xl mx-auto flex flex-col gap-y-2"
    >
      <FieldSet
        fieldId="task-title"
        inputType="text"
        labelText="Task title"
        validationFunction={isInputEmpty}
        invalidityStateLifter={(e) => setTitleValid(e)}
        placeholder={"Task Title"}
        inputValueSet={(e) => setTitle(e)}
      />
      <FieldSet
        fieldId="task-summary"
        inputType="text"
        labelText="Summary"
        inputValueSet={(e) => setSummary(e)}
      />
      <FieldSet
        fieldId="due_date"
        inputType="date"
        labelText="Due date"
        validationFunction={isInputEmpty}
        invalidityStateLifter={(e) => setDueDateValid(e)}
        inputValueSet={(e) => setDueDate(e)}
      />
      <FieldSet
        fieldId="description"
        inputType="textarea"
        labelText="Description"
        inputValueSet={(e) => setDescription(e)}
      />
      <div className="flex items-center justify-center gap-x-8 mt-1">
        <CheckBox
          fieldId="task-urgency"
          inputType="checkbox"
          labelText="Urgent?"
          inputValueSet={(e) => setUrgency(e)}
        />
        <SelectFieldset
          fieldId={"priorities"}
          labelText={"Priority"}
          optionItems={["Low", "Medium", "High"]}
          inputValueSet={(e) => setPriority(e)}
        ></SelectFieldset>
      </div>
      {buttonDisabled || <FormSubmitButton>Create Task</FormSubmitButton>}
    </form>
  );
}

export default TaskForm;
