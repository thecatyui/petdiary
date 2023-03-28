import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubMenu from '.';
import './index.scss';

export default {
  title: 'Pet Diary/O/SubMenu',
  component: SubMenu,
} as ComponentMeta<typeof SubMenu>;

const Template: ComponentStory<typeof SubMenu> = (args) => <SubMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
