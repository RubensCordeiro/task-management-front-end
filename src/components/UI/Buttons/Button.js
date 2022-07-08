export default function Button(props) {
  const { children, type, onClick } = props;

  if (type === 'confirm') {
    return (
      <button
        className={`py-2 px-4 bg-red-800 rounded text-white border border-transparent-700 hover:bg-zinc-50 hover:text-red-700 hover:border hover:border-red-700 transition linear duration-150 w-32 mx-auto`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else if (type === 'cancel') {
    return (
      <button
        className={`py-2 px-4 bg-teal-800 rounded text-white border border-transparent-700 hover:bg-zinc-50 hover:text-teal-700 hover:border hover:border-teal-700 transition linear duration-150 w-32 mx-auto`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
