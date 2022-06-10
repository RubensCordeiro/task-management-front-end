import { useState } from "react";
import Checkbox from "./Checkbox";
import Fieldset from "./Fieldset";
import Textarea from "./Textarea";
import Input from "./Input";
import InlineFieldset from "./InlineFieldset";
import InlineSelect from "./InlineSelect";
import Button from "../UI/Buttons/Button";
import useErrors from "../../hooks/useErrors";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState(false);
  const [priority, setPriority] = useState("low");
  const { setError, removeError, getErrorMessage, hasError } = useErrors();

  function handleTitleChange(value) {
    setTitle(value);

    if (!value) {
      setError({ field: "title", message: "Title must not be empty." });
    } else {
      removeError("title");
    }
  }

  function handleTitleBlur() {
    if (!title) {
      setError({ field: "title", message: "Title must not be empty." });
    }
  }

  function handleDateChange(value) {
    setDueDate(value);

    if (!value) {
      setError({ field: "date", message: "Date must not be empty." });
    } else {
      removeError("date");
    }
  }

  function handleDateBlur() {
    if (!dueDate) {
      setError({ field: "date", message: "Date must not be empty." });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form
      className="mt-2 bg-zinc-50 p-4 rounded-sm border border-zinc-400 shadow-lg max-w-xl mx-auto flex flex-col gap-y-2"
      onSubmit={handleSubmit}
    >
      <Fieldset label={"Title"} error={getErrorMessage("title")}>
        <Input
          inputParams={{
            type: "text",
            id: "Title",
            placeholder: "Your task title",
            value: title,
          }}
          error={hasError("title")}
          changeHandler={(e) => handleTitleChange(e)}
          blurHandler={handleTitleBlur}
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
      <Fieldset label={"Due-Date"} error={getErrorMessage("date")}>
        <Input
          inputParams={{
            type: "date",
            id: "Due-Date",
            value: dueDate,
          }}
          error={hasError("date")}
          changeHandler={(e) => handleDateChange(e)}
          blurHandler={handleDateBlur}
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
      <Button type={"submit"}>Create task</Button>
    </form>
  );
}

export default TaskForm;
