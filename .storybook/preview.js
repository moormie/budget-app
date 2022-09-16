import { ThemeProvider } from "styled-components";
import { myTheme } from "../src/theme";

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
};

import "./styles.css";
