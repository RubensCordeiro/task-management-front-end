import { useState } from "react";

function FormInput(props) {
  const { type, id, styles, validationFunction, invalidityStateLifter } = props;

  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [wasInputTouched, setWasInputTouched] = useState(false);

  function inputValueHandler(e) {
    setIsInputValid(validationFunction(e.target.value));
    setInputValue(e.target.value);
    invalidityStateLifter(validationFunction(e.target.value));
  }

  function inputStyles() {
    if (!validationFunction) return "";
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
