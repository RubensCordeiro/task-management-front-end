function CheckBox(props) {
  const { fieldId, inputType, labelText } = props;

  return (
    <fieldset className="flex items-center justify-start gap-x-2">
      <label htmlFor={fieldId} className="text-center">
        {labelText}
      </label>
      <input type={inputType} id={fieldId} className="cursor-pointer" />
    </fieldset>
  );
}

export default CheckBox;
