import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Grid, { GridProps } from '@material-ui/core/Grid';
import React, { memo, PropsWithChildren } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(9)
    }
  })
);

export default memo(({ children, ...props }: PropsWithChildren<GridProps>) => {
  const classes = useStyles();

  return (
    <Grid
      container
      classes={{ root: classes.root }}
      spacing={1}
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
      {...props}
    >
      {children}
    </Grid>
  );
});
