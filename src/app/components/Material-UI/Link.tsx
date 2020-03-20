import MuiLink from '@material-ui/core/Link';
import NextComposed from '@Next/NextComposed';
import clsx from 'clsx';
import { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef, PropsWithChildren } from 'react';
import { UrlObject } from 'url';

interface LinkProps extends NextLinkProps {
  activeClassName?: string;
  as?: any;
  className?: string;
  href: string | UrlObject;
  innerRef?: any;
  naked?: boolean;
  onClick?: any;
  prefer?: boolean;
}

export default forwardRef<any, PropsWithChildren<LinkProps>>(
  ({ href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other }) => {
    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProps, {
      [activeClassName]: router.pathname === pathname && activeClassName
    });

    if (naked) {
      return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
    }

    return <MuiLink className={className} ref={innerRef} href={href as string} {...other} />;
  }
);
