import React from 'react';

import useClass from 'classnames';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => <main className={useClass('o-layout')}>{children}</main>;

export default Layout;
