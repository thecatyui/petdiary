import React from 'react';

import useClass from 'classnames';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => (
  <header className={useClass('o-header')}>
    {children}
    <div className={useClass('o-header_logo')}>
      <h1>LOGO</h1>
    </div>
    <ul className={useClass('o-header_menu')}>
      <li>Profile</li>
      <li>Setting</li>
    </ul>
  </header>
);

export default Header;
