import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import Head from "next/head";
import UpperSec from "../components/LandingPage/UpperSec";
import LowerSec from "./../components/LandingPage/LowerSec/index";
import Footer from "../components/LandingPage/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.Wrapper}>
      <Head>
        <title>Muzzle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        <UpperSec />
        <LowerSec />
      </main>

      <footer className={styles.Footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
