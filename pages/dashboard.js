import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Player from "../components/Player";
import Tracks from "../components/Dashboard/Tracks";
import { BrowserRouter } from "react-router-dom";
export default function index() {
  return (
    <BrowserRouter>
      <Head>
        <title>Yan Moe Naing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard>
        <h2>Home</h2>
        <Tracks />
      </Dashboard>
      <Player />
    </BrowserRouter>
  );
}
