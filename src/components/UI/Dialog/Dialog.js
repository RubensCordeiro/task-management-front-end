import Backdrop from "../Backdrop/Backdrop";
import Button from "../Buttons/Button";

export default function Dialog(props) {
  const { onConfirm, onCancel, confirmLabel, cancelLabel } = props;
  return (
    <Backdrop onCancel={onCancel}>
      <div className="fixed top-0 left-1/2 mt-16 transform -translate-x-1/2 bg-zinc-100 pt-2 pb-2 px-8 rounded-sm shadow flex flex-col justify-center content-center items-center gap-y-2 self-start z-50">
        <p className="font-bold text-lg text-red-800">Are you sure?</p>
        <div className="flex gap-x-2">
          <Button color="red" onClick={onConfirm} type='confirm'>
            {confirmLabel}
          </Button>
          <Button color="teal" onClick={onCancel} type='cancel'>
            {cancelLabel}
          </Button>
        </div>
      </div>
    </Backdrop>
  );
}
