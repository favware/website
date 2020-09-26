import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import MUITooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltip: {
      backgroundColor: theme.palette.text.primary,
      boxShadow: theme.shadows[5],
      color: theme.palette.getContrastText(theme.palette.text.primary),
      fontSize: '0.8rem'
    },
    box: {
      padding: theme.spacing(1)
    }
  })
);

const Tooltip = ({ title, placement, enterDelay, children, ...props }: TooltipProps) => {
  const classes = useStyles();

  return (
    <MUITooltip
      title={<Box className={classes.box}>{title}</Box>}
      placement={placement ?? 'right'}
      enterDelay={enterDelay ?? 300}
      TransitionComponent={Zoom}
      {...props}
      classes={{ tooltip: clsx(classes.tooltip, props.classes?.tooltip) }}
    >
      {children}
    </MUITooltip>
  );
};

export default Tooltip;
