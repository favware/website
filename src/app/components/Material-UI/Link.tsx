import MuiLink from '@material-ui/core/Link';
import NextComposed from '@Next/NextComposed';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';

interface LinkProps {
  activeClassName: string;
  as: any;
  className: string;
  href: any;
  innerRef: any;
  naked: boolean;
  onClick: any;
  prefer: boolean;
}

export default forwardRef<any, LinkProps>(({ href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other }) => {
  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return <MuiLink className={className} ref={innerRef} href={href} {...other} />;
});
