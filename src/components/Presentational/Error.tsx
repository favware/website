import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { appBarRef } from '@Pres/Layout';
import React, { FC } from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: `calc(100vh - (${appBarRef.current?.clientHeight || 88}px + ${theme.spacing(6)}))`,
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

const ErrorPage: FC<ErrorProps> = ({ includeMaybe = false }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignContent="stretch" alignItems="center" classes={{ root: classes.root }}>
          <Grid item>
            <Typography variant="h3" color="textPrimary" classes={{ root: classes.text }}>
              Oopsie woopsie, the site is bwoken ^w^ We awe wowking vewy hawd to sowve it.
              {includeMaybe && ' Maybe you can check anyothew page?'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ErrorPage;
