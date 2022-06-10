export default function InlineFieldset(props) {
  const { label, children } = props;
  return (
    <fieldset className="py-2 flex items-center justify-center gap-x-2">
      <label htmlFor={label} className="text-center">
        {label}
      </label>
      {children}
    </fieldset>
  );
}
