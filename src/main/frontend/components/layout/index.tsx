import React from 'react';

import useClass from 'classnames';

type LayoutProps = {
  leftSidebar: React.ReactNode;
  rightSidebar: React.ReactNode;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ leftSidebar, rightSidebar, children }) => (
  <main className={useClass('o-layout')}>
    {leftSidebar}
    <div className={useClass('o-layout__mainContents')}>
      <div className={useClass('o-layout__mainContents-inner')}>{children}</div>
    </div>
    {rightSidebar}
  </main>
);

export default Layout;
