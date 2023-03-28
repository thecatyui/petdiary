import React from 'react';

import useClass from 'classnames';

type SideMenuProps = {
  children?: React.ReactNode;
};

const SideMenu: React.FC<SideMenuProps> = ({ children }) => (
  <div className={useClass('o-sideMenu')}>
    <div className={useClass('o-sideMenu__inner')}>
      {children}
      <ul>
        <li>menu 1</li>
        <li>menu 2</li>
        <li>menu 3</li>
        <li>menu 4</li>
        <li>menu 5</li>
        <li>menu 6</li>
      </ul>
    </div>
  </div>
);

export default SideMenu;
