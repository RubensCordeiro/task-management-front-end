export default function Textarea(props) {
  const { inputParams, changeHandler } = props;
  return (
    <textarea
      name={inputParams.name}
      id={inputParams.id}
      value={inputParams.value}
      onChange={(e) => changeHandler(e.target.value)}
      className="bg-zinc-100 border border-zinc-400 rounded-sm py-2 px-2 text-sm shadow-sm w-full h-24"
    ></textarea>
  );
}
