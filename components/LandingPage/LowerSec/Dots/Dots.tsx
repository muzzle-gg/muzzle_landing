import styles from "./Dots.module.css";

type Props = {
  currentActiveIndex: number;
  totalNoOfDots: number;
  onClickFunc: (index: number) => void;
};

const Dots = ({ currentActiveIndex, totalNoOfDots, onClickFunc }: Props) => {
  return (
    <div className={styles.Wrapper}>
      {Array.from(Array(totalNoOfDots).keys()).map(
        (key: number, index: number) => {
          return (
            <div
              className={styles.Dot}
              key={index}
              onClick={() => {
                onClickFunc(index);
              }}
            >
              <div
                className={styles.DotInner}
                style={
                  currentActiveIndex === index
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      }
                }
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Dots;
