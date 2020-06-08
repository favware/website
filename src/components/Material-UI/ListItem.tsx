import { createStyles, makeStyles, Theme } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon, { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@Mui/Link';
import isBrowser from '@Utils/isBrowser';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export interface ListItemProps extends ListItemIconProps {
  text: string;
  linkTo: string;

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
      paddingLeft: enableExtraPadding ? theme.spacing(2.25) : theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: enableExtraPadding ? theme.spacing(1.3) : theme.spacing(1)
      }
    })
  })
);

export default ({ children, text, linkTo, enableExtraPadding = false, onClick }: ListItemProps) => {
  const classes = useStyles({ enableExtraPadding });
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(false);
    const currentPath = window.location.pathname;

    if (linkTo === currentPath) setSelected(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkTo, isBrowser ? window.location.pathname : null]);

  return (
    <Link href={linkTo} nextPage>
      <ListItem button key={text} selected={selected} classes={{ root: clsx(classes.root, classes.extraPadding) }} onClick={onClick}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};
