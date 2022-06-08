import { useState } from "react";

function FormInput(props) {
  const {
    type,
    id,
    styles,
    validationFunction,
    invalidityStateLifter,
    inputValueSet,
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [wasInputTouched, setWasInputTouched] = useState(false);

  function inputValueHandler(e) {
    setInputValue(e.target.value || e.target.checked);
    inputValueSet(e.target.value || e.target.checked);
    if (!validationFunction || !invalidityStateLifter) return;
    const validationResult = validationFunction(e.target.value);
    setIsInputValid(validationResult);
    invalidityStateLifter(validationResult);
  }

  function inputStyles() {
    if (!validationFunction || !invalidityStateLifter) return "";
    const invalidityCheck = !isInputValid && wasInputTouched;
    return invalidityCheck ? "bg-red-100 border border-red-800" : "";
  }

  return (
    <input
      type={type}
      id={id}
      className={styles + " " + inputStyles()}
      onChange={inputValueHandler}
      onBlur={() => setWasInputTouched(true)}
      value={inputValue}
    />
  );
}

export default FormInput;
