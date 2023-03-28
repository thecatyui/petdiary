---
to: components/<%= name %>/index.stories.tsx
---
import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= h.capitalize(name) %> from './';
import './index.scss';

export default {
  title: 'Pet Diary/<%= h.capitalize(type) %>/<%= h.capitalize(name) %>',
  component: <%= h.capitalize(name) %>,
} as ComponentMeta<typeof <%= h.capitalize(name) %>>;

const Template: ComponentStory<typeof <%= h.capitalize(name) %>> = (args) => <<%= h.capitalize(name) %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

