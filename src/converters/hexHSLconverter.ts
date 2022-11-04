interface HSL {
  h: number;
  s: number;
  l: number;
}

export const hexToHSL = (H: string): HSL => {
  // Convert hex to RGB first
  let r: number = 0;
  let g: number = 0;
  let b: number = 0;

  if (H.length === 4) {
    r = Number(`0x${H[1]}${H[1]}`);
    g = Number(`0x${H[2]}${H[2]}`);
    b = Number(`0x${H[3]}${H[3]}`);
  } else if (H.length === 7) {
    r = Number(`0x${H[1]}${H[2]}`);
    g = Number(`0x${H[3]}${H[4]}`);
    b = Number(`0x${H[5]}${H[6]}`);
  }
  // Then to HSL

  let h: number = 0;
  let s: number = 0;
  let l: number = 0;

  r /= 255;
  g /= 255;
  b /= 255;

  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;

  if (delta === 0) {
    h = 0;
  } else if (cmax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
};

export const HSLToHex = (hsl: HSL) => {
  let { h, s, l } = hsl;

  s /= 100;
  l /= 100;

  const c: number = (1 - Math.abs(2 * l - 1)) * s;
  const x: number = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m: number = l - c / 2;
  let r: number | string = 0;
  let g: number | string = 0;
  let b: number | string = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length === 1) {
    r = "0" + r;
  }
  if (g.length === 1) {
    g = "0" + g;
  }
  if (b.length === 1) {
    b = "0" + b;
  }

  return "#" + r + g + b;
};
