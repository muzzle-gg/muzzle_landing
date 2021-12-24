import Image from "next/image";

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

function MobileComp() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Screen}>
        <div className={styles.ScreenStack}>
          {Object.keys(Screens).map((key: string, index: number) => {
            return (
              <div className={styles.ScreenImg} key={index}>
                <Image
                  src={Screens[key as keyof typeof Screens]}
                  layout="fill"
                  width={"100%"}
                  height={"100%"}
                  objectFit="cover"
                  onLoad={(e) => {
                    console.log(e.target);
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
