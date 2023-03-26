import React from 'react';

import useClass from 'classnames';

import Form from '@/components/form';
import Icon from '@/components/icon';
import Input from '@/components/input';

type LoginProps = {
  logo: React.ReactNode;
  submitText: string;
  cancelText: string;
  idText: string;
  pwText: string;
};

const Login: React.FC<LoginProps> = ({ logo, submitText, cancelText, idText, pwText }) => (
  <div className={useClass('o-login', { 'has-logo': logo })}>
    {logo && (
      <div className='o-login__logo'>
        <div className='o-logo__logo-image'>{logo}</div>
      </div>
    )}
    <div className={useClass('o-login__form')}>
      <Form submitText={submitText} cancelText={cancelText}>
        <Input type={'text'} placeholder={idText} icon={<Icon name='userCircle' />} />
        <Input type={'password'} placeholder={pwText} icon={<Icon name='lock' />} />
      </Form>
    </div>
  </div>
);

export default Login;
