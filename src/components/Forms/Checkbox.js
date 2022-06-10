export default function Checkbox(props) {
  const { inputParams, changeHandler } = props;

  return (
    <input
      type="checkbox"
      id={inputParams.id}
      value={inputParams.value}
      onChange={(e) => changeHandler(e.target.checked)}
    />
  );
}
