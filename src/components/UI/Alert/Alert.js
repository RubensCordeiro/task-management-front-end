import Backdrop from "../Backdrop/Backdrop";
export default function Alert(props) {
  const { message } = props;
  return (
    <Backdrop>
      <div className="px-16 py-2 bg-zinc-100 rounded-sm overflow-y-auto mx-auto flex flex-col items-center content-center">
        <span className="text-red-800 font-bold">X</span>
        <p>{message}</p>
      </div>
    </Backdrop>
  );
}
