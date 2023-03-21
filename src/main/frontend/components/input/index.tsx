import React from 'react';

import useClass from 'classnames';

import './index.scss';

type InputProps = {
  placeholder?: string;
  text?: string;
  label?: string;
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ text, placeholder, label, icon }) => (
  <label className={useClass('a-input', { 'has-icon': icon })}>
    <span className={useClass('a-input_label')}>{label}</span>
    <span className={useClass('a-input_container')}>
      {icon && <span className='a-input_icon'>{icon}</span>}
      <input className={useClass('a-input_box')} placeholder={placeholder} defaultValue={text} />
    </span>
  </label>
);

export default Input;
