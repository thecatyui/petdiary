import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './index';

export default {
  title: 'Pet Diary/A/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'value',
  placeholder: 'input text',
  label: 'label',
};
