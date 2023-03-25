import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '.';
import '../index.scss';

export default {
  title: 'Pet Diary/A/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const UserCircle = Template.bind({});
UserCircle.args = {
  name: 'userCircle',
};

export const Lock = Template.bind({});
Lock.args = {
  name: 'lock',
};

export const Schedule = Template.bind({});
Schedule.args = {
  name: 'schedule',
};
