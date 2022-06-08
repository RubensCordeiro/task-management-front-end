import FieldSet from "./Fieldset";
import InlineFieldSet from "./InlineFieldset";
import CheckBox from "./CheckBox";
import FormSubmitButton from "./FormSubmitButton";

function TaskForm() {
  return (
    <form className="mt-2 bg-zinc-50 p-4 rounded-sm border border-zinc-400 shadow-lg max-w-xl mx-auto flex flex-col gap-y-2">
      <FieldSet fieldId="task-title" inputType="text" labelText="Task title" />
      <FieldSet fieldId="task-summary" inputType="text" labelText="Summary" />
      <FieldSet fieldId="due_date" inputType="date" labelText="Due date" />
      <FieldSet
        fieldId="description"
        inputType="textarea"
        labelText="Description"
      />
      <div className="flex items-center justify-center gap-x-8 mt-1">
        <CheckBox
          fieldId="task-urgency"
          inputType="checkbox"
          labelText="Urgent?"
        />
        <InlineFieldSet
          fieldId="task-priority"
          inputType="text"
          labelText="Priority"
        />
      </div>
      <FormSubmitButton>Create Task</FormSubmitButton>
    </form>
  );
}

export default TaskForm;
