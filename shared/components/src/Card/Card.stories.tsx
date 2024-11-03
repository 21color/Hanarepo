import { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { Flex } from "../utils";
import { Typography } from "../Typography";

const meta: Meta<typeof Card> = {
  tags: ["autodocs"],
  component: Card,
  title: "components/Card",
  argTypes: {
    size: {
      description: "카드의 크기를 설정합니다.",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    children: {
      
      description: "카드의 자식요소가 설정됩니다.",
    },
    sx: {
      description: "카드의 sx props 을 설정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    size: "medium",
    children: "Card content",
  },

  render: (args) => {
    return (
      <Card {...args}>
        <Card.Header title="제목입니다." subtitle="부제목입니다." />

        <Card.Content>
          <Flex>
            <Typography colorToken="info" variant="body1">
              내용입니다.
            </Typography>
          </Flex>
        </Card.Content>
      </Card>
    );
  },
};
