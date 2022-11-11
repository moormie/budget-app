import { ThemeProvider } from "styled-components";
import { myTheme } from "../src/theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import {
  mockInitialState,
  Mockstore,
} from "../src/features/MockStore/MockStore";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <Mockstore initialState={mockInitialState} theme={myTheme}>
        <Story />
      </Mockstore>
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
