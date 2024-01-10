import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from "@mui/material/Avatar";

export const About = () => {
  return (
    <Container>
      <Grid container >
        <Grid item xs={6}>
          <Box
            component="img"
            sx={{
              width: 0.8,
            }}
            alt="Picture"
            src='/picture.png'
          />
          {/* <img src='/picture.png' alt="Picture" /> */}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3"> Angela Bi </Typography>
          <br/>
          <Typography> Hello! I'm a junior at UC Berkeley majoring in Data Science and minoring in Political Economy. </Typography>
          <br/>
          <Typography> I'm currently interested in exploring the intersection between my interests in social sciences and coding through data science, software engineering, and machine learning positions. </Typography>
          <br/>
          <Typography> During my free time, I illustrate for the Daily Californian, play volleyball, and pet my cat Waffles! </Typography>
          <br/>
          <ButtonGroup>
            <Button href="mailto:angelabi2003@berkeley.edu" startIcon={<Avatar src={"/button/email.png"} variant='square'/>}></Button>
            <Button href='https://github.com/angela-bi' startIcon={<Avatar src={"/button/github.png"} variant='square'/>}></Button>
            <Button href='https://www.linkedin.com/in/angela-lulu-bi/' startIcon={<Avatar src={"/button/linkedin.png"} variant='square'/>}></Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About