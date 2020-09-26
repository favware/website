import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card, { CardProps as MUICardProps } from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@Mui/Link';
import Tooltip from '@Mui/Tooltip';
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 530,
      height: '100%',
      maxHeight: '100%'
    },
    avatar: {
      backgroundColor: 'transparent'
    }
  })
);

export interface CardAction {
  to: string;
  tooltipTitle: string;
  icon: ReactElement;
  external?: boolean;
}

export interface CardProps extends MUICardProps {
  textContent: ReactNode;
  /** The name of an icon in `/images/`. Only name of the file required, `.png` extension added automatically */
  logo: string | JSX.Element;
  logoAlt: string;
  cardHeaderProps: {
    title: ReactNode;
    subheader: ReactNode;
  };
  actions: CardAction[];
}

const ProjectCard = ({ textContent, logo, logoAlt, cardHeaderProps, actions, ...props }: PropsWithChildren<CardProps>) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...props}>
      <CardHeader
        {...cardHeaderProps}
        avatar={
          <Avatar aria-label={logoAlt} alt={logoAlt} src={typeof logo === 'string' ? `/images/${logo}.png` : undefined} className={classes.avatar}>
            {typeof logo === 'string' ? logoAlt : logo}
          </Avatar>
        }
        titleTypographyProps={{
          variant: 'h6'
        }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {textContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {actions.map(({ icon, to, tooltipTitle, external = false }, index) => (
          <Box key={index} component="div">
            <Link href={to} nextPage={!external}>
              <Tooltip title={tooltipTitle} placement="bottom">
                <IconButton aria-label={tooltipTitle}>{icon}</IconButton>
              </Tooltip>
            </Link>
          </Box>
        ))}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
