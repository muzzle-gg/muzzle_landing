import Image from "next/image";

import styles from "./Footer.module.css";

import { images, socialMediaLinks } from "../../../utils/constants/StaticData";

const Footer = () => {
  const socialMediaIconsList = Object.keys(images.socialMediaIcons).map(
    (item, index) => {
      return (
        <a
          href={`${socialMediaLinks[item as keyof typeof socialMediaLinks]}`}
          className={styles.SocialMediaWrapper}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={
              images.socialMediaIcons[
                item as keyof typeof images.socialMediaIcons
              ]
            }
            className={styles.SocialMediaIcon}
            alt={item}
            layout="responsive"
          />
        </a>
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
