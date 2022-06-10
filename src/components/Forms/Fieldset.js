export default function Fieldset(props) {
  const { label, children, error } = props;
  return (
    <fieldset className="flex flex-col items-center justify-start gap-x-2">
      <label htmlFor={label} className="text-center">
        {label}
      </label>
      {children}
      {error && (
        <span className="mt-1 text-sm text-red-700 font-bold self-start px-2">
          {error}
        </span>
      )}
    </fieldset>
  );
}
