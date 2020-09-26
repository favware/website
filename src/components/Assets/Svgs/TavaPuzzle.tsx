import React, { PropsWithChildren } from 'react';

const TavaPuzzle = (props: PropsWithChildren<unknown>) => (
  <svg viewBox="0 0 247.82 247.82" {...props}>
    <circle cx={123.91} cy={123.91} r={123.91} fill="#fed137" />
    <path
      fill="#fff"
      d="M199.91 124.75s-26.43 20.64-25.72 26.65c.65 5.46 10.57 4.11 16.34 9.57 13.66 12.94-7.08 31.48-19.71 20.83a21.94 21.94 0 01-4.5-6.76c-1.25-3.12-1.09-10.15-5.63-10.7-5.59-.67-36.78 35.29-36.78 35.29s-31.64-25-33-29.06c-1.47-4.41 6.52-4.9 10.45-6.42 2.7-1 6.18-2.79 7.88-5.07 11-14.71-11.47-32-22.94-19.84-6.62 7.05-2.08 19.45-9.06 17.52-6.15-1.7-29.37-32-29.37-32s26.11-17.95 25.71-24c-.35-5.39-8.8-5.27-11.82-6.76-4.81-2.36-8.34-5.75-8.44-13.51-.21-16.75 22.59-17.95 28.17-3.97 1.74 4.31 1 9.26 5.07 10.13 6.23 1.35 37.35-38.47 37.35-38.47s32.06 27.67 32.1 32.09-11.23 2.79-15.77 7.32c-10.79 10.79-.15 32.06 18.26 22.26a13.78 13.78 0 005.39-7.62c.91-3.51.72-9.86 4.51-10.13 4.95-.36 31.51 32.65 31.51 32.65z"
    />
  </svg>
);

export default TavaPuzzle;
