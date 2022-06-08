import FormInput from "./FormInput";

function CheckBox(props) {
  const { fieldId, inputType, labelText } = props;

  return (
    <fieldset className="flex items-center justify-start gap-x-2">
      <label htmlFor={fieldId} className="text-center">
        {labelText}
      </label>
      <FormInput type={inputType} id={fieldId} styles="cursor-pointer" />
    </fieldset>
  );
}

export default CheckBox;
