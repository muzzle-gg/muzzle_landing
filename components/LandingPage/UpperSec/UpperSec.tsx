import styles from "./UpperSec.module.css";
import Image from "next/image";

import { images } from "./../../StaticData";
import importAll from "./../../../utils/importAll";

const imagesNameArray = [
  "Cross",
  "Joystick",
  "Joystick2",
  "Keyboard",
  "Mouse",
  "PlayIcon",
  "Vr",
];

const importedImages = importAll(
  require.context(
    "../../../assets/landing/UpperContainer",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const UpperSec = () => {
  const imagesNameArrayList = imagesNameArray.map((images, index) => {
    return (
      <div className={`${styles[`${images}Wrapper`]} ${styles.ImagesWrapper}`}>
        <Image
          key={index}
          src={importedImages[`${images}.svg`].default}
          alt="image"
          className={`${styles.Image}`}
          layout="responsive"
          quality={100}
          objectFit="contain"
        />
      </div>
    );
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LogoWrapper}>
        <Image
          src={images.logo}
          alt="logo"
          className={styles.Logo}
          quality={100}
          objectFit="contain"
          layout="responsive"
        />
      </div>
      {imagesNameArrayList}
    </div>
  );
};

export default UpperSec;
