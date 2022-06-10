export default function InlineInput(props) {
  const { inputParams, changeHandler } = props;

  return (
    <input
      type={inputParams.type}
      id={inputParams.id}
      placeholder={inputParams.placeholder}
      className="bg-zinc-100 border border-zinc-400 rounded-sm py-1 px-2 text-sm shadow-sm"
      value={inputParams.value}
      onChange={(e) => changeHandler(e.target.checked)}
    />
  );
}
