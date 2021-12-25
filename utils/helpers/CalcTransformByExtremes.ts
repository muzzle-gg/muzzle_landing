export const calcTransformByExtremes = (
  elementUseRef: React.RefObject<HTMLElement>,
  extremes: {
    min: number;
    max: number;
  }
) => {
  const top = elementUseRef.current?.getBoundingClientRect().top;
  const bottom = elementUseRef.current?.getBoundingClientRect().bottom;
  const screenHeight = window.innerHeight;

  if (!top || !bottom || top > screenHeight) {
    console.log(0);
    return extremes.min;
  }

  const elementHeight = bottom - top;

  if (bottom < 0) {
    console.log(1);
    return extremes.max;
  }
  console.log((screenHeight - top) / (screenHeight + elementHeight));
  return (
    extremes.min +
    (extremes.max - extremes.min) *
      ((screenHeight - top) / (screenHeight + elementHeight))
  );
};
