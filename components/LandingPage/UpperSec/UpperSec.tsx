import styles from "./UpperSec.module.css";
import Image from "next/image";

import { images, content } from "../../../utils/constants/StaticData";
import { importAll } from "./../../../utils/helpers/ImportAll";

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

type Props = {
  content: Array<any>;
  isVertical: boolean;
};

const ContentList: any = ({ content, isVertical }: Props) => {
  return (
    <div
      className={styles.TitleWrapper}
      style={
        isVertical
          ? {
              flexDirection: "column",
            }
          : {
              flexDirection: "row",
            }
      }
    >
      {content.map((item, index) => {
        return (
          <>
            {Array.isArray(item) ? (
              ContentList({ content: item, isVertical: false })
            ) : (
              <p className={`${styles.Title}`} key={index}>
                {item}
              </p>
            )}
          </>
        );
      })}
    </div>
  );
};

const UpperSec = () => {
  const imagesNameArrayList = Object.keys(importedImages).map(
    (images, index) => {
      return (
        <div
          key={index}
          className={`${styles[`${imagesNameArray[index]}Wrapper`]} ${
            styles.ImagesWrapper
          }`}
        >
          <Image
            src={importedImages[images as keyof typeof importedImages]}
            alt="image"
            className={`${styles.Image}`}
            layout="responsive"
            quality={100}
            objectFit="contain"
          />
        </div>
      );
    }
  );

  return (
    <div className={styles.Wrapper}>
      <div className={styles.SubWrapper}>
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
        <div>
          <ContentList
            content={content.landingPage.upperContainer.title}
            isVertical={true}
          />
        </div>
        <div className={styles.ComingSoonWrapper}>
          {content.landingPage.upperContainer.subTitle}
          <hr className={styles.Line} />
        </div>
        {imagesNameArrayList}
      </div>
    </div>
  );
};

export default UpperSec;
