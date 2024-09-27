import { vars } from "@hanarepo/token/vars";
import type { Meta, StoryObj } from "@storybook/react/*";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  tags: ["autodocs"],
  component: Typography,
  title: "Components/Typography",
  argTypes: {
    variant: {
      description: "typography variant를 설정합니다.",
      control: {
        type: "select",
        options: Object.keys(vars.typography),
      },
    },
    colorToken: {
      description: "typography color를 설정합니다.",
      control: {
        type: "select",
        options: Object.keys(vars.color),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "body1",
    colorToken: "black",
    children: "Typography",
    as: "p",
    sx: {},
    textAlign: "left",
  },
};
