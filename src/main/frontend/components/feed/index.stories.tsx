import { ComponentStory, ComponentMeta } from '@storybook/react';

import Feed from ".";
import './index.scss';

export default {
  title: 'Pet Diary/O/Feed',
  component: Feed,
} as ComponentMeta<typeof Feed>;

const Template: ComponentStory<typeof Feed> = (args) => <Feed {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

