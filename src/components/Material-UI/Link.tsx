import { createStyles, makeStyles } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import NextComposed from '@Next/NextComposed';
import clsx from 'clsx';
import { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef, PropsWithChildren } from 'react';
import { UrlObject } from 'url';

interface LinkProps extends NextLinkProps {
  /** The href to navigate to */
  href: string | UrlObject;
  /** Class to apply when this route is the current route */
  activeClassName?: string;
  /** Additional classes to apply to each Link */
  className?: string;
  /** Additional Style properties to apply */
  style?: CSSProperties;
  /**
   * Whether this link goes to an external page, or to a registerd Router page
   * @default true
   */
  nextPage?: boolean;
  /** Action to trigger when clicking this link, will trigger along with the navigation */
  onClick?: (...args: unknown[]) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      cursor: 'pointer'
    }
  })
);

export default forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  ({ href, activeClassName = 'active', className: classNameFromProps, nextPage = false, ...other }, ref) => {
    const router = useRouter();
    const classes = useStyles();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameFromProps, classes.link, {
      [activeClassName]: router.pathname === pathname && activeClassName
    });

    if (nextPage) {
      return <NextComposed className={className} ref={ref} href={href} {...other} />;
    }

    return <MuiLink target="_blank" rel="noreferer" className={className} ref={ref} href={href as string} {...other} />;
  }
);
