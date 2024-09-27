import type { StorybookConfig } from "@storybook/react-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../shared/**/*.stories.tsx",
    "../shared/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
