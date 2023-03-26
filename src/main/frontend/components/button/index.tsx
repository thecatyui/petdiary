import React from 'react';

import useClass from 'classnames';

type ButtonProps = {
  type: 'submit' | 'button';
  text: string;
};

const Button: React.FC<ButtonProps> = ({ type, text }) => (
  <button type={type} className={useClass('a-button')}>
    {text}
  </button>
);

export default Button;
