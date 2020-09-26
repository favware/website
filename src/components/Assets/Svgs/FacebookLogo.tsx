import React, { PropsWithChildren } from 'react';

const FacebookLogo = (props: PropsWithChildren<unknown>) => (
  <svg viewBox="0 0 400 400" {...props}>
    <style>{'.facebook_svg__st1{display:inline}.facebook_svg__st3{fill:#fff}.facebook_svg__st4{fill:#3d5a98}'}</style>
    <g>
      <circle cx={200} cy={200} r={200} className="facebook_svg__st4" />
      <path
        d="M323.5 350.9c8.5 0 15.3-7.5 15.3-16.7V65.7c0-9.2-6.9-16.7-15.3-16.7h-247c-8.5 0-15.3 7.5-15.3 16.7v268.6c0 9.2 6.9 16.7 15.3 16.7h247z"
        className="facebook_svg__st4"
      />
      <path
        d="M218.3 328.1V211.2h36.1l5.4-45.6h-41.5v-29.1c0-13.2 3.4-22.2 20.8-22.2h22.2V73.7c-3.8-.6-17-1.8-32.3-1.8-32 0-53.9 21.2-53.9 60.2v33.6h-36.2v45.6H175v116.9h43.3z"
        className="facebook_svg__st3"
      />
    </g>
  </svg>
);

export default FacebookLogo;
