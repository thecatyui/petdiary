import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';
import './index.scss';

export default {
  title: 'Pet Diary/A/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  text: 'Button',
};
