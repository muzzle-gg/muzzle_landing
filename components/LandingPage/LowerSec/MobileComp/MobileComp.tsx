import Image from "next/image";
import type { AppProps /*, AppContext */ } from "next/app";

import styles from "./MobileComp.module.css";

import CameraDot from "../../../../assets/landing/MobileCamDot.svg";

import { importAll } from "../../../../utils/helpers/ImportAll";

const Screens = importAll(
  require.context(
    "../../../../assets/landing/Screens",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

type Props = {
  currentActiveIndex: number;
};

function MobileComp({ currentActiveIndex }: Props) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Screen}>
        <div className={styles.ScreenStack}>
          {Object.keys(Screens).map((key: string, index: number) => {
            return (
              <div
                className={styles.ScreenImg}
                key={index}
                style={
                  currentActiveIndex === index
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      }
                }
              >
                <Image
                  src={Screens[key as keyof typeof Screens]}
                  layout="fill"
                  objectFit="cover"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "1";
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.CameraDot}>
          <Image src={CameraDot} layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default MobileComp;
