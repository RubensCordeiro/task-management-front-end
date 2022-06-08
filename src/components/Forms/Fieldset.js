import { useState } from "react";
import FormInput from "./FormInput";

function FieldSet(props) {
  const {
    fieldId,
    inputType,
    labelText,
    validationFunction,
    invalidityStateLifter,
    placeholder,
    inputValueSet,
  } = props;

  const [description, setDescription] = useState("");
  function textInputHandler(e) {
    setDescription(e.target.value);
    inputValueSet(e.target.value);
  }

  return (
    <fieldset className="flex flex-col items-center justify-start gap-x-2">
      <label htmlFor={fieldId} className="text-center">
        {labelText}
      </label>
      {inputType !== "textarea" && (
        <FormInput
          type={inputType}
          id={fieldId}
          styles="bg-zinc-100 border border-zinc-400 rounded-sm py-1 px-2 text-sm shadow-sm w-full"
          validationFunction={validationFunction}
          invalidityStateLifter={invalidityStateLifter}
          placeholder={placeholder}
          inputValueSet={inputValueSet}
        />
      )}
      {inputType === "textarea" && (
        <textarea
          id={fieldId}
          className="bg-zinc-100 border
          border-zinc-400 rounded-sm py-1 px-2 text-sm shadow-sm w-full h-16"
          onChange={textInputHandler}
          value={description}
        />
      )}
    </fieldset>
  );
}

export default FieldSet;
