---
to: components/<%= name %>/index.tsx
---
import React from 'react';
import useClass from 'classnames';

type <%= h.capitalize(name) %>Props = {
    children: React.ReactNode;
}

const <%= h.capitalize(name) %>:React.FC<<%= h.capitalize(name) %>Props> = ({ children }) => {
  return (
    <div className={useClass('<%= type %>-<%= name %>')}>{children}</div>
  )
}

export default <%= h.capitalize(name) %>;


