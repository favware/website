import ListItem from '@material-ui/core/ListItem';
import ListItemIcon, { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import React from 'react';
import { Else, If, Then } from 'react-if';
import Tooltip from './Tooltip';

export interface ListItemProps extends ListItemIconProps {
  text: string;
  linkTo: string;
  selected: boolean;
  openState: boolean;
}

export default ({ children, selected, text, linkTo, openState }: ListItemProps) => (
  <Link href={linkTo}>
    <ListItem button key={text} selected={selected} onClick={() => console.log('test')}>
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
