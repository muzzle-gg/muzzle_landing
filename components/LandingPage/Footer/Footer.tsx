import styles from "./Footer.module.css";

import Image from "next/image";
import { images } from "../../../utils/constants/StaticData";

const Footer = () => {
  const socialMediaIconsList = Object.keys(images.socialMediaIcons).map(
    (item, index) => {
      return (
        <div className={styles.SocialMediaWrapper}>
          <Image
            key={index}
            src={
              images.socialMediaIcons[
                item as keyof typeof images.socialMediaIcons
              ]
            }
            className={styles.SocialMediaIcon}
            alt="facebook"
            layout="responsive"
          />
        </div>
      );
    }
  );

  return (
    <div className={styles.FooterContainer}>
      <p className={styles.ComingText}>coming</p>
      <p className={styles.SoonText}>soon</p>
      <p className={styles.SocialMediaText}>
        meanwhile you can check out
        <br />
        our social media handles :
      </p>
      <div className={styles.SocialMediaContainer}>{socialMediaIconsList}</div>
    </div>
  );
};

export default Footer;
