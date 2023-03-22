import React from 'react';

import useClass from 'classnames';

import Button from '../button';
import './index.scss';

type FormProps = {
  children: React.ReactNode;
  submitText: string;
  cancelText?: string;
};

const Form: React.FC<FormProps> = ({ children, submitText, cancelText }) => (
  <form className={useClass('m-form')}>
    {children}
    <div className={useClass('m-form_buttons')}>
      <Button type='submit' text={submitText} />
      {cancelText && <Button type='button' text={cancelText} />}
    </div>
  </form>
);

export default Form;
