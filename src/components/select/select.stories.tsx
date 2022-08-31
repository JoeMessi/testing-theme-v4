import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectInputProps, SelectInput } from './select';

export default {
  title: 'SelectInput',
  component: SelectInput,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    // options: {
    //   options: ['a', 'b'],
    //   control: { type: 'select' },
    // },
    // onChange: {
    //   action: 'clicked',
    // },
    variant: {
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<SelectInputProps> = (args) => <SelectInput {...args} />;

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  label: 'Age',
  options: ['10', '20', '30'],
};
