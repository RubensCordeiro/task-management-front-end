export default function InlineSelect(props) {
  const { inputParams, changeHandler } = props;

  const selectOptions = inputParams.options.map((selectOption) => {
    return (
      <option value={selectOption.toLowerCase()} key={`pr-${selectOption}`}>
        {selectOption}
      </option>
    );
  });

  return (
    <select
      name={inputParams.name}
      id={inputParams.id}
      className="bg-zinc-100 border border-zinc-400 rounded-sm py-1 px-2 text-sm shadow-sm"
      value={inputParams.value}
      onChange={(e) => changeHandler(e.target.value)}
    >
      {selectOptions}
    </select>
  );
}
