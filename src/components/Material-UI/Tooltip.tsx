import Box from '@mui/material/Box';
import MUITooltip, { TooltipProps } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    tooltip: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
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
