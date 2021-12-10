import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Player from "../components/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Dashboard/Home";
import Explore from "../components/Dashboard/Explore";
import Artists from "../components/Dashboard/Artists";
import DramaOsts from "../components/Dashboard/DramaOsts";
import { useSelector } from "react-redux";
import TranslationEditor from "../components/TranslationEditor";
import Setting from "../components/Setting";
export default function index() {
  const isPlayerOpen = useSelector((state) => state.player.showPlayer);
  const playerSrc = useSelector((state) => state.player.src);

  const isEditorOpen = useSelector((state) => state.editor.show);
  const isSettingOpen = useSelector((state) => state.setting.show);

  return (
    <BrowserRouter>
      <Head>
        <title>Yan Moe Naing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard>
        <Routes>
          <Route path="dashboard" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="artists" element={<Artists />} />
          <Route path="drama-osts" element={<DramaOsts />} />
        </Routes>
      </Dashboard>
      {isSettingOpen && <Setting />}
      {isEditorOpen && <TranslationEditor />}
      {isPlayerOpen && <Player src={playerSrc} />}
    </BrowserRouter>
  );
}
