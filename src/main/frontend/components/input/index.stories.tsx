import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from '../icon';
import Input from './index';
import './index.scss';

export default {
  title: 'Pet Diary/A/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  text: 'value',
  placeholder: 'input text',
  label: 'label',
  icon: <Icon name='userCircle' />,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'password',
  icon: <Icon name='lock' />,
};

export const Date = Template.bind({});
Date.args = {
  type: 'date',
  placeholder: '',
};
