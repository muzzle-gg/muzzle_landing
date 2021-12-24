export const importAll = (r: any) => {
  let images: any[] = [];
  r.keys().map((item: any, index: number) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};
