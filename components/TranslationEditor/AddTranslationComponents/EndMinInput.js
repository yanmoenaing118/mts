import { useDispatch, useSelector } from "react-redux";
import { setInput } from "./../../../store/songs";

export default function EndMinInput() {
  const dispatch = useDispatch();
  const endMin = useSelector((state) => state.songs.input.endMin);

  return (
    <input
      type="number"
      min={0}
      max={4}
      placeholder="min"
      value={endMin}
      onChange={(e) => {
        dispatch(
          setInput({
            inputType: "endMin",
            value: e.target.value,
          })
        );
      }}
    />
  );
}
