export default function Fieldset(props) {
  const { label, children, errors } = props;

  const errorList =
    errors &&
    errors.map((error) => {
      return (
        <span
          className="mt-1 text-sm text-red-700 font-bold self-start px-2"
          key={error}
        >
          {error}
        </span>
      );
    });

  return (
    <fieldset className="flex flex-col items-center justify-start gap-x-2">
      <label htmlFor={label} className="text-center">
        {label}
      </label>
      {children}
      {errorList}
    </fieldset>
  );
}
