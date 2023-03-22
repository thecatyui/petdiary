import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '../icon';
import Input from '../input';
import Form from ".";

export default {
  title: 'Pet Diary/M/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  submitText: 'submit',
  cancelText: 'cancel',
  children: (
    <>
      <Input type={'text'} placeholder='input ID' icon={<Icon name='userCircle' />} />
      <Input type={'password'} placeholder='input Password' icon={<Icon name='lock' />} />
    </>
  ),
};
