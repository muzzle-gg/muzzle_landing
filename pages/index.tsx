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
        <title>Muzzle | Removing Recoil From The Gaming World</title>
        <meta
          name="title"
          content="Muzzle | Removing Recoil From The Gaming World"
        />
        <meta
          name="description"
          content="We are on a mission to create a global gaming community where gamers can interact with each other, create a gaming-based profile, apply to tournaments and stay updated with all the buzz in the community."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muzzle.co.in/" />
        <meta
          property="og:title"
          content="Muzzle | Removing Recoil From The Gaming World"
        />
        <meta
          property="og:description"
          content="We are on a mission to create a global gaming community where gamers can interact with each other, create a gaming-based profile, apply to tournaments and stay updated with all the buzz in the community."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kunaaaaalll/image/upload/v1640761285/Muzzle/muzzle_og_yteaue.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://muzzle.co.in/" />
        <meta
          property="twitter:title"
          content="Muzzle | Removing Recoil From The Gaming World"
        />
        <meta
          property="twitter:description"
          content="We are on a mission to create a global gaming community where gamers can interact with each other, create a gaming-based profile, apply to tournaments and stay updated with all the buzz in the community."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/kunaaaaalll/image/upload/v1640761285/Muzzle/muzzle_og_yteaue.png"
        />
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
