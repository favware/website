import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { appBarRef } from '@Pres/Layout';
import React, { PropsWithChildren } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `calc(100vh - (${appBarRef.current?.clientHeight || 88}px + ${theme.spacing(6)}px))`,
      overflowY: 'hidden'
    },
    text: {
      lineHeight: theme.spacing(0.2),
      textAlign: 'center'
    }
  })
);

interface ErrorProps {
  /** @default false */
  includeMaybe?: boolean;
}

export default ({ includeMaybe = false }: PropsWithChildren<ErrorProps>) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container justify="center" alignContent="stretch" alignItems="center" classes={{ root: classes.root }}>
          <Grid item>
            <Typography variant="h3" color="initial" classes={{ root: classes.text }}>
              Oopsie woopsie, the site is bwoken ^w^ We awe wowking vewy hawd to sowve it.
              {includeMaybe && ' Maybe you can check anyothew page?'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
