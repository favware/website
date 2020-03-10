import { createStyles, makeStyles, Theme } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon, { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import Tooltip from './Tooltip';

export interface ListItemProps extends ListItemIconProps {
  text: string;
  linkTo: string;
  openState: boolean;

  enableExtraPadding?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(0),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(1)
      }
    },
    extraPadding: ({ enableExtraPadding }: Pick<ListItemProps, 'enableExtraPadding'>) => ({
      paddingLeft: enableExtraPadding ? theme.spacing(2.75) : theme.spacing(2)
    })
  })
);

export default ({ children, text, linkTo, openState, enableExtraPadding = false }: ListItemProps) => {
  const classes = useStyles({ enableExtraPadding });
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (linkTo === currentPath) setSelected(true);
  }, [linkTo]);

  return (
    <Link href={linkTo}>
      <ListItem button key={text} selected={selected} classes={{ root: clsx(classes.root, classes.extraPadding) }}>
        <If condition={openState}>
          <Then>
            <ListItemIcon>{children}</ListItemIcon>
          </Then>
          <Else>
            <Tooltip title={text}>
              <ListItemIcon>{children}</ListItemIcon>
            </Tooltip>
          </Else>
        </If>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};
