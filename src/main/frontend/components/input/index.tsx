import React from 'react';

import useClass from 'classnames';

type InputProps = {
  type: 'text' | 'password' | 'date';
  placeholder?: string;
  text?: string;
  label?: string;
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ type, text, placeholder, label, icon }) => (
  <label className={useClass('a-input', { 'has-icon': icon })}>
    <span className={useClass('a-input_label')}>{label}</span>
    <span className={useClass('a-input_container')}>
      {icon && <span className='a-input_icon'>{icon}</span>}
      <input
        className={useClass('a-input_box')}
        type={type}
        placeholder={placeholder}
        defaultValue={text}
      />
    </span>
  </label>
);

export default Input;
