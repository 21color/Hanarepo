import { Meta, StoryObj } from "@storybook/react";
import Textfield from "./index";

const meta: Meta<typeof Textfield> = {
  component: Textfield,
  title: "Components/Textfield",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["outlined", "filled", "standard"],
      },
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
  },
};
