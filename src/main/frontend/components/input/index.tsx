import useClass from 'classnames';
import React from 'react';

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
