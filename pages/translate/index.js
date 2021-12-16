import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import TranslationEditor from "../../components/TranslationEditor";
import { selectASong } from "../../store/songs";

export default function index() {
  const router = useRouter();
  const { trackId } = router.query;

  const track = useSelector((state) => selectASong(state, trackId));
  console.log(track);
  return (
    <div>
      <TranslationEditor track={track} />
    </div>
  );
}
