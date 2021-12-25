import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./UpperSec.module.css";

import { images, content } from "../../../utils/constants/StaticData";
import { importAll } from "./../../../utils/helpers/ImportAll";
import { elementsStylesExtremes } from "./helpers/stylesExtrems";
import UseScrollStates from "../../../utils/helpers/UseScrollStates";
import { calcTransformByExtremes } from "../../../utils/helpers/CalcTransformByExtremes";

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
  const elemetsRefArr = useRef([]);

  const [yScrollSate] = UseScrollStates();
  const [elementsStyleStates, setElementsStyleStates] = useState(
    Array(7)
      .fill({})
      .map((_, index) => {
        return {
          transform: `translateY(${elementsStylesExtremes[index].translateY.min}%)translateX(${elementsStylesExtremes[index].translateX.min}%)rotate(${elementsStylesExtremes[index].rotate.min}deg)`,
        };
      })
  );

  useEffect(() => {
    let tmpElementsStyleStates = [...elementsStyleStates];

    for (let i = 0; i < elemetsRefArr.current.length; i++) {
      const elem = elemetsRefArr.current[i];
      tmpElementsStyleStates[i] = {
        transform: `translateY(${calcTransformByExtremes(
          elem,
          elementsStylesExtremes[i].translateY
        )}%)translateX(${calcTransformByExtremes(
          elem,
          elementsStylesExtremes[i].translateX
        )}%)rotate(${calcTransformByExtremes(
          elem,
          elementsStylesExtremes[i].rotate
        )}deg)`,
      };
    }
    setElementsStyleStates(tmpElementsStyleStates);
  }, [yScrollSate]);

  const imagesNameArrayList = Object.keys(importedImages).map(
    (images, index) => {
      return (
        <div
          key={index}
          className={`${styles[`${imagesNameArray[index]}Wrapper`]} ${
            styles.ImagesWrapper
          }`}
          ref={(el) => (elemetsRefArr.current[index] = el as never)}
          style={elementsStyleStates[index]}
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
