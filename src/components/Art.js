import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

export const Art = () => {
  return (
    <Container justify = "center">
      <Typography variant='h4'> Artwork </Typography>
      <Box sx={{ width: 0.99, overflowY: 'scroll' }} display="flex" justifyContent="center">
        <ImageList variant="masonry" cols={3} gap={20}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  )
}

const itemData = [
  {
    img: 'public/art/cal_day_cover.jpg',
    title: 'Cal Day Cover',
  },
  {
    img: 'public/art/strike.jpg',
    title: 'Strike',
  },
  {
    img: 'public/art/career_fair_cover_angelabi.png',
    title: 'Career Fair Cover',
  },
  {
    img: 'public/art/chinese.jpg',
    title: 'Chinese',
  },
  {
    img: 'public/art/dinner.jpg',
    title: 'Dinner',
  },
  {
    img: 'public/art/fish_seller.jpg',
    title: 'Fish Seller',
  },
  {
    img: 'public/art/ihop.jpg',
    title: 'iHop',
  },
  {
    img: 'public/art/love.jpg',
    title: 'Love',
  },
  {
    img: 'public/art/self_portrait.jpg',
    title: 'Self Portrait',
  },
  {
    img: 'public/art/silver_spoon.jpg',
    title: 'Silver Spoon',
  },
];

export default Art