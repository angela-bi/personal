import { ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Link from '@mui/material/Link';
import { Container } from '@mui/system'
import React from 'react'
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const info = blue[700]

export const Projects = () => {
  return (
    <Container>
      <Typography variant='h4'> Projects </Typography>
      <br/>
      <Grid container >
        <Grid item xs={4}>
        <br/> <br/>
          <ButtonBase sx={{ width: 0.8}}>
            <Img alt="Mal Demo" src='/projects/mal-demo.gif' />
          </ButtonBase>
        </Grid> 
        <Grid item xs={8}>
          <Typography variant='h6'> MyAnimeTaste: React App </Typography>
          <Typography color="textSecondary"> React.js, MongoDB, Material UI, Axios, AWS, Express</Typography>
          <List>
            <ListItemText> Built a <Link href='https://github.com/angela-bi/mal-recommend-react' color={info}>React application</Link> that allows users of anime-rating website MyAnimeList to view their friends' top-rated anime. </ListItemText>
            <ListItemText> Devised a pipeline that fetches data from MyAnimeList’s REST API. Working on incorporating data storage incorporating AI-powered recommendations. </ListItemText>
          </List>
          <br/>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={4}>
        <br/>
        <ButtonBase sx={{ width: 0.8}}>
            <Img alt="BYOW Demo" src='/projects/byow_demo.gif' />
          </ButtonBase>
        </Grid> 
        <Grid item xs={8}>
          <Typography variant='h6'> Tora's Adventures: 2D Tile-based Game </Typography>
          <Typography color="textSecondary"> Java, JUnit, IntelliJ, Procreate </Typography>
          <List>
            <ListItemText> Implemented a 2D tile-based world exploration engine centered around a cat exploring an apartment complex. </ListItemText>
            <ListItemText> Constructed 10+ class components with 2000+ lines of code over the course of two months, including comprehensive unit testing, random world generation, saving and loading, and interactive hand-drawn animations. </ListItemText>
          </List>
          <br/>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={4}>
        <br/> <br/>
        <ButtonBase sx={{ width: 0.8}}>
            <Img alt="Housing Demo" src='/projects/housing_demo.gif' />
          </ButtonBase>
        </Grid> 
        <Grid item xs={8}>
          <Typography variant='h6'> Predicting Housing Prices in Cook County </Typography>
          <Typography color="textSecondary"> Scikit-learn, Pandas, Seaborn </Typography>
          <List>
            <ListItemText> Coded a pipeline that normalized features and fit a linear model to Chicago’s Cook County housing records, a dataset of 500k+ properties and 70+ quantitative and qualitative variables. </ListItemText>
            <ListItemText> Utilized One-Hot encoding, Regex to isolate categorical variable attributes from written descriptions of properties, yielding extremely competitive results on a held-out test set. </ListItemText>
          </List>
          <br/>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={4}>
        <br/> <br/>
        <ButtonBase sx={{ width: 0.8}}>
            <Img alt="Recommend Poster" src='/projects/recommend_poster.png' />
          </ButtonBase>
        </Grid> 
        <Grid item xs={8}>
          <Typography variant='h6'>Predicting User's Anime Ratings with Matrix Factorization</Typography>
          <Typography color="textSecondary"> Scikit-learn, Pandas, Seaborn </Typography>
          <List>
            <ListItemText> Created a <Link href='https://github.com/angela-bi/mal-recommendation-system/tree/main' color={info}> preliminary recommendation system </Link> from a set of 100k users and their anime ratings on MyAnimeList.  </ListItemText>
            <ListItemText> Used Collaborative Filtering with Matrix Factorization and Gradient Descent to find new anime most similar to a user’s existing list and return a list of recommendations. </ListItemText>
          </List>
          <br/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Projects