import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '.';
import './index.scss';

export default {
  title: 'Pet Diary/O/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
