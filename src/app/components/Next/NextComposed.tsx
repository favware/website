/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link';
import React, { forwardRef } from 'react';

interface NextComposedProps {
  as?: any;
  href: any;
  className?: string;
  prefetch?: boolean;
}

export default forwardRef<any, NextComposedProps>(({ as, href, prefetch, ...other }, ref) => (
  <NextLink href={href} prefetch={prefetch} as={as}>
    <a ref={ref} {...other} />
  </NextLink>
));
