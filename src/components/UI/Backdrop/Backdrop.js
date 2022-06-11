export default function Backdrop(props) {
  const { children, onCancel } = props;
  return (
    <>
      {" "}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-zinc-800 z-50 bg-opacity-80 z-40"
        onClick={onCancel}
      ></div>
      {children}
    </>
  );
}
