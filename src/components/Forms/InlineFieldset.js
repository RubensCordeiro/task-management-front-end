function InlineFieldSet(props) {
  const { fieldId, inputType, labelText } = props;

  return (
    <fieldset className="flex items-center justify-start gap-x-2">
      <label htmlFor={fieldId} className="text-center">
        {labelText}
      </label>
      {inputType !== "textarea" && (
        <input
          type={inputType}
          id={fieldId}
          className="bg-zinc-100 border border-zinc-400 rounded-sm py-1 px-2 text-sm shadow-sm w-full"
        />
      )}
      {inputType === "textarea" && (
        <textarea
          id="task-description"
          className="bg-zinc-100 border
          border-zinc-400 rounded-sm py-1 px-2 text-sm shadow-sm w-full h-16"
        />
      )}
    </fieldset>
  );
}

export default InlineFieldSet;
