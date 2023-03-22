import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from ".";

export default {
  title: 'Pet Diary/O/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

