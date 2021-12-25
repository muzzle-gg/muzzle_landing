export const calcTransformByExtremes = (
  element: HTMLElement,
  extremes: {
    min: number;
    max: number;
  }
) => {
  const top = element?.getBoundingClientRect().top;
  const bottom = element?.getBoundingClientRect().bottom;
  const screenHeight = window.innerHeight;

  if (!top || !bottom || top > screenHeight) {
    return extremes.min;
  }

  const elementHeight = bottom - top;

  if (bottom < 0) {
    return extremes.max;
  }

  console.log(
    extremes.min +
      (extremes.max - extremes.min) *
        ((screenHeight - top) / (screenHeight + elementHeight))
  );
  return (
    extremes.min +
    (extremes.max - extremes.min) *
      ((screenHeight - top) / (screenHeight + elementHeight))
  );
};
