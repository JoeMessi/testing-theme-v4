import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from './icon';
import { SvgIconsMap } from '../../iconography/icons';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    iconName: {
      option: SvgIconsMap,
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const BaseIcon = Template.bind({});
BaseIcon.args = {
  iconName: 'Add',
};
