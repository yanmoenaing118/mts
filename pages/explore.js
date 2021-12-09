import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Player from "../components/Player";

export default function Explore() {
  return (
    <>
      <Head>
        <title>Yan Moe Naing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard>
        <h2>Explore</h2>
      </Dashboard>
      <Player />
    </>
  );
}
