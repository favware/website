import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import React from 'react';

export default ({ children, title, ...props }: TooltipProps) => (
  <Tooltip title={title} TransitionComponent={Zoom} placement="right" {...props}>
    {children}
  </Tooltip>
);
