import { Meta, StoryObj } from "@storybook/react";
import Textfield from "./index";

const meta: Meta<typeof Textfield> = {
  tags: ["autodocs"],
  component: Textfield,
  title: "Components/Textfield",
  argTypes: {
    variant: {
      description: "텍스트 필드의 variant를 설정합니다.",
      options: ["standard", "outlined", "filled"],
      control: { type: "radio" },
    },
    label: {
      description: "텍스트 필드의 라벨을 설정합니다.",
      control: { type: "text" },
    },
    value: {
      description: "텍스트 필드의 값입니다.",
      control: { type: "text" },
    },
    placeholder: {
      description: "텍스트 필드의 placeholder를 설정합니다.",
      control: { type: "text" },
    },
    validate: {
      description: "텍스트 필드의 validation 여부를 설정합니다.",
      control: { type: "boolean" },
    },
    helperText: {
      description: "텍스트 필드의 validation 텍스트를 설정합니다.",
      control: { type: "text" },
    },
    type: {
      description: "텍스트 필드의 type을 설정합니다.",
      options: ["text", "email", "password", "number", "tel", "search"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textfield>;

export const Default: Story = {
  args: {
    label: "Name",
    value: "",
    onChange: (value) => {
      console.log(value);
    },
    placeholder: "Enter your name",
    variant: "standard",
    validate: false,
    helperText: "This field is required",
    type: "text",
  },
};
