import { Meta, StoryObj } from "@storybook/react";
import { Flex } from '../utils';
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  tags: ["autodocs"],
  component: Checkbox,
  title: "components/Checkbox",
  argTypes: {
    isIndeterminate: {
      type: "boolean",
    },
    checked: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
  } 
};

export const Checkboxes = () => {
  return (
    <Flex.Column gap={5}>
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox checked disabled />
    </Flex.Column>
  );
}

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    isIndeterminate : false,
    disabled: false,
  },

  render: (props) => <Checkbox {...props} />,
};

export const CheckboxWithLabel: Story = {
  args: {
    ...Default.args,
  },

  render: (args) => (
    <Flex.Column gap={5}>
      <Checkbox.Label label="Checkbox" {...args} />

      <Checkbox.Label label='Checkbox'>
        <Checkbox {...args} />
      </Checkbox.Label>

      <Checkbox.Label label='Checkbox' iconPosition='right'>
        <Checkbox {...args} />
      </Checkbox.Label>
    </Flex.Column>
  ),
}

export default meta;
