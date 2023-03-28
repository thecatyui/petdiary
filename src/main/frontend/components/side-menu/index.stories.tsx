import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidemenu from '.';
import './index.scss';

export default {
  title: 'Pet Diary/O/Sidemenu',
  component: Sidemenu,
} as ComponentMeta<typeof Sidemenu>;

const Template: ComponentStory<typeof Sidemenu> = (args) => <Sidemenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
