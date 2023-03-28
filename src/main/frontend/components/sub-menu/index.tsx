import React from 'react';

import useClass from 'classnames';

type SubMenuProps = {
  children?: React.ReactNode;
};

const SubMenu: React.FC<SubMenuProps> = ({ children }) => <div className={useClass('o-subMenu')}>{children}</div>;

export default SubMenu;
