import { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography";
import { Flex } from "../utils";
import { Card } from "./Card";

import Hana from "../../../public/assets/hana.png";

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
        <Card.Header title="이하나 입니다." subtitle="개발을 하고있어요" />

        <Card.Content>
          <Flex>
            <Typography colorToken="textSub" variant="body1">
              <img src={Hana} alt="Hana" />
            </Typography>
          </Flex>
        </Card.Content>
      </Card>
    );
  },
};
