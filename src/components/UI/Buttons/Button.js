export default function Button(props) {
  const { children, type, color, onClick } = props;
  return (
    <button
      className={`py-2 px-4 bg-${color}-800 rounded text-white border border-transparent-700 hover:bg-zinc-50 hover:text-${color}-700 hover:border hover:border-${color}-700 transition linear duration-150 w-32 mx-auto`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
