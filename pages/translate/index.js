import { useRouter } from "next/router";
import TranslationEditor from "../../components/TranslationEditor";

export default function index() {
  const router = useRouter();
  const { trackId } = router.query;
  return (
    <div>
      <TranslationEditor />
    </div>
  );
}
