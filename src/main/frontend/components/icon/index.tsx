import React from 'react';

import useClass from 'classnames';

import Lock from '@/public/icons/lock.svg';
import Paw from '@/public/icons/paw.svg';
import Schedule from '@/public/icons/schedule.svg';
import UserCircle from '@/public/icons/user-circle.svg';

type IconsProps = {
  [key: string]: React.ReactNode;
};

const icons: IconsProps = {
  userCircle: <UserCircle />,
  lock: <Lock />,
  schedule: <Schedule />,
  paw: <Paw />,
};

const names = Object.keys(icons) as string[];

type IconProps = {
  name: (typeof names)[number];
};

const Icon = ({ name }: IconProps) => <i className={useClass('a-icon')}>{icons[name]}</i>;

export default Icon;
