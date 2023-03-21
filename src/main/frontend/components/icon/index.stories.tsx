import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from ".";

export default {
  title: 'Pet Diary/A/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'userCircle',
};
