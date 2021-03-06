import { useDispatch, useSelector } from "react-redux";
import { setInput } from "./../../../store/editor";

export default function StartSecInput() {
  const dispatch = useDispatch();
  const startSec = useSelector((state) => state.editor.input.startSec);
  console.log(startSec);
  return (
    <input
      type="number"
      min={0}
      max={60}
      placeholder="sec"
      value={startSec}
      onChange={(e) => {
        dispatch(
          setInput({
            inputType: "startSec",
            value: e.target.value,
          })
        );
      }}
    />
  );
}
