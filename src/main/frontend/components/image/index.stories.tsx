import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '.';
import '../index.scss';

export default {
  title: 'Pet Diary/A/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} alt='dummy alt' />;

export const Primary = Template.bind({});
Primary.args = {
  src: '/public/logos/dummy-logo.png',
  alt: 'dummy alt',
};
