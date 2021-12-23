import styles from "./Footer.module.css";

import Image from "next/image";
import facebookLogo from "../../../assets/landing/icons/facebook.svg";
import instagramLogo from "../../../assets/landing/icons/instagram.svg";
import twitterLogo from "../../../assets/landing/icons/twitter.svg";
import linkedinLogo from "../../../assets/landing/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <p className={styles.ComingText}>coming</p>
      <p className={styles.SoonText}>soon</p>
      <p className={styles.SocialMediaText}>
        meanwhile you can check out
        <br />
        our social media handles :
      </p>
      <div className={styles.SocialMediaContainer}>
        <Image
          className={styles.SocialMediaIcon}
          src={facebookLogo}
          alt="facebook"
        />
        <Image
          src={instagramLogo}
          alt="instagram"
          className={styles.SocialMediaIcon}
        />
        <Image
          src={linkedinLogo}
          alt="linkedin"
          className={styles.SocialMediaIcon}
        />
        <Image
          src={twitterLogo}
          alt="twitter"
          className={styles.SocialMediaIcon}
        />
      </div>
    </div>
  );
};

export default Footer;
