import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Grid, { GridProps } from '@material-ui/core/Grid';
import React, { FC, memo } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(9)
    }
  })
);

const GridContainer: FC<GridProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      classes={{ root: classes.root }}
      spacing={1}
      direction="row"
      justifyContent="space-between"
      alignContent="stretch"
      alignItems="center"
      {...props}
    >
      {children}
    </Grid>
  );
};

export default memo(GridContainer);
