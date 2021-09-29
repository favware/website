import GridContainer from '@Mui/GridContainer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const IndexPage: NextPage = () => {
  const calculateAge = (birthday: Date) => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      <NextSeo />
      <Container maxWidth="lg" disableGutters>
        <GridContainer spacing={5} direction="row" justifyContent="space-between" alignContent="stretch" alignItems="center">
          <Grid item xs={12}>
            <Typography color="textPrimary" align="center" variant="h4" component="h1" gutterBottom paragraph>
              Software Engineer focusing on TypeScript
            </Typography>
            <Typography color="textPrimary" align="center" variant="h4" component="h1" gutterBottom paragraph>
              (NodeJS and Web) and Java
            </Typography>
            <Typography color="textPrimary" align="center" variant="h6">
              Scroll down to see my projects
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textPrimary" gutterBottom paragraph align="center" variant="h5">
              About me
            </Typography>
            <Typography color="textPrimary" gutterBottom paragraph align="left" variant="body1">
              Greetings, My name is Jeroen Claassens (a.k.a. Favna) and I manage Favware
            </Typography>
            <Typography color="textPrimary" gutterBottom paragraph align="left" variant="body1">
              Currently {calculateAge(new Date('1995-02-21'))} years old I am a developer hailing from The Netherlands. I have been a tech enthusiast
              for as long as I can remember. While attending high school my first choice of optional subjects was Informatics and this quickly showed
              to be my calling. After I graduated from high school I had no seconds thoughts about my next step - Software Engineering at a
              university. The university of choice ended up being The Hague University of Applied Sciences. After 5 years attending this university I
              obtained my Bachelor of IT in the summer of 2019. At the time of writing I am working for CGI Inc. in The Netherlands as a Frontend
              Software Engineer.
            </Typography>
            <Typography color="textPrimary" gutterBottom paragraph align="left" variant="body1">
              In my free time I have delved into a whole slew of small projects and some of these are used very actively! Notable mentions are my
              Discord bot "Ribbon" built with NodeJS and a whole slew of NodeJS based libraries. Some of these libraries have their groundwork in
              JavaScript, however since learning TypeScript I have converted them to this language as these days I have a strong preference for
              TypeScript and its static type checking. I have also learned C# as I have been delving into the Unity3D Game Engine for the Game Design
              minor I have followed as part of my Software Engineering major.
            </Typography>
            <Typography color="textPrimary" gutterBottom paragraph align="left" variant="body1">
              I still have a very broad future ahead of me and I expect that CGI will help me achieve many of my dreams. That said, however, playing
              games has always been my biggest hobby and now that I have had a taste of creating games I really feel like it would be a perfect match
              for me. However, I have also grown a passion for the frontend side of software engineering which is why I feel right at home where I
              found my first job after graduation.
            </Typography>
          </Grid>
        </GridContainer>
      </Container>
    </>
  );
};

export default IndexPage;
