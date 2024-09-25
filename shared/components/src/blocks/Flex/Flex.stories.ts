import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./index";

const meta: Meta<typeof Flex> = {
  tags: ["autodocs"],
  component: Flex,
  title: "Layout/Flex",
  argTypes: {
    gap: {
      description: "Flex 사이의 간격을 설정합니다.",
      control: { type: "number" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    gap: 10,
  },
};
