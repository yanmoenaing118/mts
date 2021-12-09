import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Player from "../components/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Dashboard/Home";
import Explore from "../components/Dashboard/Explore";
import Artists from "../components/Dashboard/Artists";
import DramaOsts from "../components/Dashboard/DramaOsts";
export default function index() {
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
      <Player />
    </BrowserRouter>
  );
}
