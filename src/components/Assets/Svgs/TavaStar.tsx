import React, { PropsWithChildren } from 'react';

const TavaStar = (props: PropsWithChildren<unknown>) => (
  <svg viewBox="0 0 247.82 247.82" {...props}>
    <circle cx={123.91} cy={123.91} r={123.91} fill="#fed137" />
    <path
      fill="#fff"
      d="M123.89 42.01l26.6 53.93 59.54 8.65-43.07 41.94 10.17 59.29-53.24-27.99-53.2 27.99 10.13-59.29-43.03-41.94 59.5-8.65 26.6-53.93z"
    />
  </svg>
);

export default TavaStar;
