export default function Input(props) {
  const { inputParams, error, changeHandler, blurHandler } = props;
  const errorStyles = error ? "bg-red-50 border-red-700 border-2" : "";

  return (
    <input
      type={inputParams.type}
      id={inputParams.id}
      placeholder={inputParams.placeholder}
      className={`focus:outline-0 bg-zinc-100 border border-zinc-400 rounded-sm py-2 px-2 text-sm shadow-sm w-full ${errorStyles}`}
      value={inputParams.value}
      onChange={(e) => changeHandler(e.target.value)}
      onBlur={blurHandler}
    />
  );
}
