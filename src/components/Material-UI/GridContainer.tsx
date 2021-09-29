import Grid, { GridProps } from '@mui/material/Grid';
import React, { FC, memo } from 'react';

const GridContainer: FC<GridProps> = ({ children, ...props }) => (
  <Grid container spacing={1} direction="row" justifyContent="space-between" alignContent="stretch" alignItems="center" {...props}>
    {children}
  </Grid>
);

export default memo(GridContainer);
