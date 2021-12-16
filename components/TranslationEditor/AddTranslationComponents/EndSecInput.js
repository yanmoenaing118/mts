import { useDispatch, useSelector } from "react-redux";
import { setInput } from "./../../../store/editor";
export default function EndSecInput() {
  const dispatch = useDispatch();
  const endSec = useSelector((state) => state.editor.input.endSec);
  console.log(endSec);
  return (
    <input
      type="number"
      min={0}
      max={60}
      placeholder="sec"
      value={endSec}
      onChange={(e) => {
        dispatch(
          setInput({
            inputType: "endSec",
            value: e.target.value,
          })
        );
      }}
    />
  );
}
