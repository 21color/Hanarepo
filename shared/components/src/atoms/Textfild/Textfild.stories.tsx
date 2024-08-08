import { Meta, StoryObj } from "@storybook/react";
import Textfild from "./index";

const meta: Meta<typeof Textfild> = {
  component: Textfild,
  title: "Components/Textfild",
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

type Story = StoryObj<typeof Textfild>;

export const Default: Story = {
  args: {
    label: "Name",
    value: "",
    onChange: (value) => {
      console.log(value);
    },
    placeholder: "Enter your name",
    variant: "standard",
    vaildate: false,
    helperText: "This field is required",
  },
};
