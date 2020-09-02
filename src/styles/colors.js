export const CSS_COLOR_NAMES = [
  '#8DB6C7',
  '#C1B38E',
  '#D1C6BF',
  '#CA9F92',
  '#F9CD97',
  '#E3D9B0',
  '#B1C27A',
  '#B2E289',
  '#9FA3E3',
  '#7095E1',
  '#C993D4',
  '#81SFB5',
  '#E49969',
];

export const randomColor = () => {
  return CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];
};
