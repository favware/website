/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link';
import React, { forwardRef } from 'react';
import { Typography } from '@material-ui/core';

interface NextComposedProps {
  as?: any;
  href: any;
  className?: string;
  prefetch?: boolean;
}

export default forwardRef<any, NextComposedProps>(({ as, href, prefetch, ...other }, ref) => (
  <NextLink href={href} prefetch={prefetch} as={as}>
    <Typography component="span" variant="body2" color="textPrimary">
      <a ref={ref} {...other} />
    </Typography>
  </NextLink>
));
