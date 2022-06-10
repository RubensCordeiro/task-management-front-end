export default function Button(props) {
  const { children, type } = props;
  return (
    <button
      className="py-2 px-4 bg-teal-800 rounded text-white border border-transparent-700 hover:bg-zinc-50 hover:text-teal-700 hover:border hover:border-teal-700 transition linear duration-150 w-32 mx-auto"
      type={type}
    >
      {children}
    </button>
  );
}
