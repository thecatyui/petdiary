import React from 'react';

import useClass from 'classnames';

import './index.scss';

type InputProps = {
  placeholder?: string;
  text?: string;
};

const Input: React.FC<InputProps> = ({ text, placeholder }) => (
  <label className={useClass('a-input')}>
    <input className={useClass('a-input', '_box')} placeholder={placeholder} defaultValue={text} />
  </label>
);

export default Input;
