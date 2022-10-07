import { DefaultTheme, Keyframes, keyframes } from "styled-components";

interface Color {
  grape: string;
  red: string;
  orange: string;
  yellow: string;
  yellowGreen: string;
  green: string;
  brown: string;
  gray: string;
}

interface MyTheme extends DefaultTheme {
  borderRadius: string;
  animation: {
    show: Keyframes;
    hide: Keyframes;
  };
  colors: {
    lightGray: string;
    gray: string;
    pastel: {};
    grape: string;
    red: string;
    orange: string;
    yellow: string;
    yellowGreen: string;
    green: string;
    brown: string;
    dark: Color;
  };
}

const show = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }`;

const hide = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }`;

export const myTheme: MyTheme = {
  borderRadius: "18px",
  animation: {
    show,
    hide,
  },
  colors: {
    lightGray: "#f2f2f2",
    gray: "#e0e0e0",
    pastel: {
      orange: "#ffc886",
      pink: "#cc85aa",
      green: "#8cd98c",
      turquoise: "#60cfd1",
      blue: "#7dd3fb",
    },
    grape: "#665075",
    red: "#C75554",
    orange: "#DF810B",
    yellow: "#D9B35B",
    yellowGreen: "#B2BC76",
    green: "#778C62",
    brown: "#71533d",
    dark: {
      grape: "#42314d",
      red: "#903d3c",
      orange: "#a4600d",
      yellow: "#9f8039",
      yellowGreen: "#8c974c",
      green: "#566b40",
      brown: "#3c2b1f",
      gray: "#a6a6a6",
    },
  },
};
