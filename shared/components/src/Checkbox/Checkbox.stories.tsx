import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  tags: ["autodocs"],
  component: Checkbox,
  title: "components/checkbox",
  argTypes: {

  } 
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    isIndeterminate : false,
    onChange : () => alert("Checkbox clicked"),
    onChangeChecked : () => alert("Checkbox clicked"),
  },

  render: (props) => <Checkbox {...props} />,
};

export default meta;
