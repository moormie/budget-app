import { ThemeProvider } from "styled-components";
import { myTheme } from "../src/theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <Story />
    </ThemeProvider>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  backgrounds: {
    default: "light",
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphonexr",
  },
};

import "./styles.css";
