import HomeProjectCardData from '@Config/HomeProjectCardData';
import { createSeoProps } from '@Config/next-seo.config';
import { createStyles, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@Mui/Container';
import ProjectCard from '@Mui/ProjectCard';
import { NextSeo } from 'next-seo';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    bodyTypography: {
      width: '70vw'
    }
  })
);

export default () => {
  const classes = useStyles();

  const calculateAge = (birthday: Date) => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      <NextSeo {...createSeoProps({ title: 'Index' })} />
      <Container spacing={6}>
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom paragraph>
            Software Engineer focusing on TypeScript
          </Typography>
          <Typography align="center" variant="h4" gutterBottom paragraph>
            (NodeJS and Web) and Java
          </Typography>
          <Typography align="center" variant="h6">
            Scroll down to see my projects
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom paragraph align="center" variant="h5">
            About me
          </Typography>
          <Typography classes={{ root: classes.bodyTypography }} gutterBottom paragraph align="left" variant="body1">
            Greetings, My name is Jeroen Claassens (a.k.a. Favna) and I manage Favware
          </Typography>
          <Typography classes={{ root: classes.bodyTypography }} gutterBottom paragraph align="left" variant="body1">
            Currently {calculateAge(new Date('1995-02-21'))} years old I am a developer hailing from The Netherlands. I have been a tech enthusiast
            for as long as I can remember. While attending high school my first choice of optional subject was Informatics and this quickly showed to
            be my calling. After I graduated from high school I had no seconds thoughts about my next step - Software Engineering at a University. The
            university of choice ended up being The Hague University of Applied Sciences. After 5 years attending this university I obtained my
            Bachelor of IT in the summer of 2019. At the time of writing I am working for CGI Inc. in The Netherlands as a Frontend Software Engineer
          </Typography>
          <Typography classes={{ root: classes.bodyTypography }} gutterBottom paragraph align="left" variant="body1">
            In my free time I have delved in a whole slew of small projects and some of these are used very actively! Notable mentions are my Discord
            bot "Ribbon" build with NodeJS and a whole slew of NodeJS based libraries. Some of these libraries had their groundwork in JavaScript
            however I have since learning TypeScript adopted them to this language as these days I have a strong preference for TypeScript and its
            static type checking. I have also learned C# as I have been delving into the Unity3D Game Engine for the Game Design minor I have followed
            as part of my Software Engineering major.
          </Typography>
          <Typography classes={{ root: classes.bodyTypography }} gutterBottom paragraph align="left" variant="body1">
            I still have a very broad future ahead of me and I expect that CGI will help me achieve many of my dreams. That said however, playing
            games has always been my biggest hobby and now that I have had a taste of creating games I really feel like it would be a perfect match
            for me. However, I have also grown a passion for the frontend side of software engineering which is why I feel right at home where I found
            my first job after graduation.
          </Typography>
        </Grid>
        <Container item direction="row" alignContent="space-around" alignItems="stretch" justify="space-around">
          {HomeProjectCardData.map(({ textContent, logo, logoAlt, actions, cardHeaderProps, ...rest }, index) => (
            <Grid item key={index}>
              <ProjectCard textContent={textContent} logo={logo} logoAlt={logoAlt} actions={actions} cardHeaderProps={cardHeaderProps} {...rest} />
            </Grid>
          ))}
        </Container>
      </Container>
    </>
  );
};
