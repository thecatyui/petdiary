import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '@/components/image';

import '../index.scss';
import Login from ".";

export default {
  title: 'Pet Diary/O/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const WithLogo = Template.bind({});
WithLogo.args = {
  logo: <Image src={'/public/logos/dummy-logo.png'} alt={''} />,
  idText: 'input ID',
  pwText: 'input PW',
  submitText: 'submit',
  cancelText: 'cancel',
};

export const NoLogo = Template.bind({});
NoLogo.args = {
  idText: 'input ID',
  pwText: 'input PW',
  submitText: 'submit',
  cancelText: 'cancel',
};
