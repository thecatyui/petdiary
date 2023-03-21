import React from 'react';

import useClass from 'classnames';

import UserCircle from '@/public/icons/user-circle.svg';

import './index.scss';

type IconsProps = {
  [key: string]: React.ReactNode;
};

const icons: IconsProps = {
  userCircle: <UserCircle />,
};

const names = Object.keys(icons) as string[];

type IconProps = {
  name: (typeof names)[number];
};

const Icon = ({ name }: IconProps) => <i className={useClass('a-icon')}>{icons[name]}</i>;

export default Icon;
