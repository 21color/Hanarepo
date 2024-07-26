import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "critical"],
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    title: "Click me",
    disabled: false,
    fontSize: 16,
    fontWeight: 400,
  },
};
