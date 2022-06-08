function FormSubmitButton(props) {
  const { children } = props;
  return (
    <button className="mt-2 py-2 px-4 max-w-36 mx-auto bg-teal-800 rounded text-white border border-transparent-700 hover:bg-zinc-50 hover:text-teal-700 hover:border hover:border-teal-700 transition linear duration-150 text-sm">
      {children}
    </button>
  );
}

export default FormSubmitButton;
