import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./index";
import { Button } from "../../Button/Button";

const meta: Meta<typeof Flex> = {
  tags: ["autodocs"],
  component: Flex,
  title: "components/utils/Flex",
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    _hover: {
      backgroundColor: "gray",
      color: "white",
    },
  },

  render: (arg) => (
    <Flex {...arg}>
      <div>Flex 컴포넌트는 display: flex 속성을 적용합니다.</div>
      <Flex gap={20} padding={20}>
        <Button variant="primary" title="Primary" />
        <Button variant="secondary" title="Secondary" />
      </Flex>
    </Flex>
  ),
};

export const Column: Story = {
  args: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    _hover: {
      backgroundColor: "gray",
      color: "white",
    },
  },

  render: (arg) => (
    <Flex.Column gap={10} {...arg}>
      <div>
        Flex Column 컴포넌트는 display: flex, flex-direction: column 속성을
        적용합니다.
      </div>
      <Flex.Column gap={20} padding={20}>
        <Button variant="primary" title="Primary" />
        <Button variant="secondary" title="Secondary" />
      </Flex.Column>
    </Flex.Column>
  ),
};
