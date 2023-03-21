import React from 'react';

import useClass from 'classnames';

import './index.scss';

type InputProps = {
  placeholder?: string;
  text?: string;
  label?: string;
};

const Input: React.FC<InputProps> = ({ text, placeholder, label }) => (
  <label className={useClass('a-input')}>
    <span className={useClass('a-input_label')}>{label}</span>
    <input className={useClass('a-input_box')} placeholder={placeholder} defaultValue={text} />
  </label>
);

export default Input;
