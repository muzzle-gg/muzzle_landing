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
    return extremes.min;
  }

  const elementHeight = bottom - top;

  if (bottom < 0) {
    return extremes.max;
  }
  return (
    extremes.min +
    (extremes.max - extremes.min) *
      ((screenHeight - top) / (screenHeight + elementHeight))
  );
};
