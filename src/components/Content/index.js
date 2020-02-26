import React from 'react';

import './index.sass'

export default function (props) {
  const children = props.children
  return (
    <main>
      {children}
    </main>
  );
}
