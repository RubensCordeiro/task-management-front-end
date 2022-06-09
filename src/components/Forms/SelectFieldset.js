import { useState } from "react";

function SelectFieldset(props) {
  const { fieldId, labelText, optionItems, inputValueSet } = props;
  const [selectInput, setSelectInput] = useState("");

  function selectChangeHandler(e) {
    setSelectInput(e.target.value.toLowerCase());
    inputValueSet(e.target.value.toLowerCase());
  }

  return (
    <fieldset className="flex items-center justify-start gap-x-2">
      <label htmlFor={fieldId}>{labelText}</label>
      <select
        name={fieldId}
        id={fieldId}
        className="px-2 text-left rounded-sm cursor-pointer"
        onChange={selectChangeHandler}
      >
        {optionItems.map((optionItem) => {
          return (
            <option key={fieldId + optionItem} value={optionItem}>
              {optionItem}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
}

export default SelectFieldset;
