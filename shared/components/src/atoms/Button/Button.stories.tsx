import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  tags: ["autodocs"],
  component: Button,
  title: "Components/Button",
  argTypes: {
    variant: {
      description: "버튼의 variant를 설정합니다.",
      options: ["primary", "secondary", "critical"],
      control: { type: "radio" },
    },
    size: {
      description: "버튼의 크기를 설정합니다.",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    title: {
      description: "버튼의 텍스트를 설정합니다.",
      control: { type: "text" },
    },
    disabled: {
      description: "버튼의 비활성화 여부를 설정합니다.",
      control: { type: "boolean" },
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
    size: "medium",
    onClick: () => alert("Button clicked"),
  },
};
