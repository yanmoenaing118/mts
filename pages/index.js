import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}
