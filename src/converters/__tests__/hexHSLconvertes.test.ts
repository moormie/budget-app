import { hexToHSL, HSLToHex } from "../hexHSLconverter";

describe("convert hsl and hex", () => {
  it("converts hex to hsl", () => {
    expect(hexToHSL("#ff0000")).toStrictEqual({ h: 0, s: 100, l: 50 });
    expect(hexToHSL("#fff")).toStrictEqual({ h: 0, s: 0, l: 100 });
    expect(hexToHSL("#000000")).toStrictEqual({ h: 0, s: 0, l: 0 });
    expect(hexToHSL("#006600")).toStrictEqual({ h: 120, s: 100, l: 20 });
    expect(hexToHSL("#003399")).toStrictEqual({ h: 220, s: 100, l: 30 });
    expect(hexToHSL("#ff00ff")).toStrictEqual({ h: 300, s: 100, l: 50 });
    expect(hexToHSL("#ff")).toStrictEqual({ h: 0, s: 0, l: 0 });
  });
  it("converts hsl to hex", () => {
    expect(HSLToHex({ h: 0, s: 0, l: 100 })).toBe("#ffffff");
    expect(HSLToHex({ h: 0, s: 0, l: 0 })).toBe("#000000");
    expect(HSLToHex({ h: 120, s: 100, l: 20 })).toBe("#006600");
    expect(HSLToHex({ h: 105, s: 100, l: 50 })).toBe("#40ff00");
    expect(HSLToHex({ h: 220, s: 100, l: 30 })).toBe("#003399");
    expect(HSLToHex({ h: 250, s: 100, l: 30 })).toBe("#1a0099");
    expect(HSLToHex({ h: 330, s: 100, l: 30 })).toBe("#99004d");
    expect(HSLToHex({ h: -1, s: 100, l: 30 })).toBe("#000000");
  });
});
