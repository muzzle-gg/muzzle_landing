import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./LowerSec.module.css";

import Waves from "../../../assets/landing/Waves.png";

import MobileComp from "./MobileComp/MobileComp";
import Dots from "./Dots";
import UseScrollStates from "../../../utils/helpers/UseScrollStates";
import useMediaQuery from "./../../../utils/helpers/UseMediaQuery";
import { calcTransformByExtremes } from "./../../../utils/helpers/CalcTransformByExtremes";
import Content from "./Content";

const dotsPosExtremes = {
  min: 50,
  max: -100,
};

const mobileCompPosExtremes = {
  min: 15,
  max: -25,
};

const wavesPosExtremes = {
  blur: {
    min: 1,
    max: 40,
  },
  translateY: {
    min: 0,
    max: -40,
  },
};

const contentPosExtremes = {
  min: 8,
  max: -20,
};

const LowerSec = () => {
  const dotsWrapperRef = useRef<HTMLDivElement>(null);
  const mobileCompWrapperRef = useRef<HTMLDivElement>(null);
  const wavesWrapperRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const [yScrollSate] = UseScrollStates();
  const [, screenHight] = useMediaQuery();

  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const [elementsStyleStates, setElementsStyleStates] = useState({
    dots: {
      transform: `translateY(${dotsPosExtremes.min}%)`,
    },
    mobileComp: {
      transform: `translateY(${mobileCompPosExtremes.min}%)`,
    },
    waves: {
      transform: `translateY(${wavesPosExtremes.translateY.min}%)`,
      filter: `blur(${wavesPosExtremes.blur.min}px)`,
    },
    content: {
      transform: `translateY(${contentPosExtremes.min}%)`,
    },
  });

  useEffect(() => {
    let tempElementTransformStates = { ...elementsStyleStates };
    tempElementTransformStates.dots = {
      transform: `translateY(${calcTransformByExtremes(
        dotsWrapperRef.current!,
        dotsPosExtremes
      )}%)`,
    };

    tempElementTransformStates.mobileComp = {
      transform: `translateY(${calcTransformByExtremes(
        mobileCompWrapperRef.current!,
        mobileCompPosExtremes
      )}%)`,
    };

    tempElementTransformStates.waves = {
      transform: `translateY(${calcTransformByExtremes(
        wavesWrapperRef.current!,
        wavesPosExtremes.translateY
      )}%)`,
      filter: `blur(${calcTransformByExtremes(
        wavesWrapperRef.current!,
        wavesPosExtremes.blur
      )}px)`,
    };

    tempElementTransformStates.content = {
      transform: `translateY(${calcTransformByExtremes(
        contentWrapperRef.current!,
        contentPosExtremes
      )}%)`,
    };

    setElementsStyleStates(tempElementTransformStates);
  }, [yScrollSate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActiveIndex((prev) => {
        if (prev === 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentActiveIndex(index);
  };

  return (
    <div className={styles.Wrapper}>
      <div
        className={styles.WavesSec}
        ref={wavesWrapperRef}
        style={elementsStyleStates.waves}
      >
        <div className={styles.WavesInner}>
          <Image src={Waves} layout="fill" priority alt="" />
        </div>
      </div>
      <div className={styles.MobileSec}>
        <div
          className={styles.DotsSec}
          ref={dotsWrapperRef}
          style={elementsStyleStates.dots}
        >
          <Dots
            currentActiveIndex={currentActiveIndex}
            totalNoOfDots={3}
            onClickFunc={handleDotClick}
          />
        </div>
        <div
          className={styles.MobileCompSec}
          ref={mobileCompWrapperRef}
          style={elementsStyleStates.mobileComp}
        >
          <MobileComp currentActiveIndex={currentActiveIndex} />
        </div>
      </div>
      <div
        className={styles.ContentSec}
        ref={contentWrapperRef}
        style={elementsStyleStates.content}
      >
        <Content currentActiveIndex={currentActiveIndex} />
      </div>
    </div>
  );
};

export default LowerSec;
