import styles from "./Content.module.css";

import { lowerSecInfo as contentData } from "../../../../utils/constants/StaticData";

type ContentProps = {
  currentActiveIndex: number;
};

export default function Content({ currentActiveIndex }: ContentProps) {
  return (
    <div className={styles.Wrapper}>
      {contentData.map((data, index) => {
        return (
          <div
            className={styles.Content}
            key={index}
            style={
              currentActiveIndex === index
                ? {
                    opacity: 1,
                    pointerEvents: "all",
                  }
                : {
                    opacity: 0,
                    pointerEvents: "none",
                  }
            }
          >
            <h3 className={styles.ContentTitle}>{data.title}</h3>
            <div className={styles.ContentDesc}>{data.description}</div>
          </div>
        );
      })}
    </div>
  );
}
