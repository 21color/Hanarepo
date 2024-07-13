import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    buttonType: "primary",
    title: "버튼",
    disabled: false,
  },
};
