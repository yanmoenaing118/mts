import { useDispatch, useSelector } from "react-redux";
import { setInput } from "./../../../store/songs";

export default function StartMinInput() {
  const dispatch = useDispatch();
  const startMin = useSelector((state) => state.songs.input.startMin);

  return (
    <input
      type="number"
      min={0}
      max={4}
      placeholder="min"
      value={startMin}
      onChange={(e) =>
        dispatch(
          setInput({
            inputType: "startMin",
            value: e.target.value,
          })
        )
      }
    />
  );
}
