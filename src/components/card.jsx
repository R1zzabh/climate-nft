import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const cards = [
  { title: 'NFT 1', image: 'https://i.postimg.cc/Jn1Yq9VM/halftone-qr-bleed1.png', description: 'This is card 1.', prize: '100 Coins' },
  { title: 'Card 2', image: 'https://i.postimg.cc/C5dWYWKS/hamster.jpg', description: 'This is card 2.', prize: '200 Coins' },
  { title: 'Card 3', image: 'https://i.postimg.cc/SRKMDGxn/qr7-jpeg.jpg', description: 'This is card 3.', prize: '300 Coins' },
  { title: 'Card 4', image: 'https://i.postimg.cc/L5ys5KRX/qr5-jpeg.jpg', description: 'This is card 4.', prize: '400 Coins' },
  { title: 'Card 5', image: 'https://i.postimg.cc/L4q4B7Hz/qr-6.jpg', description: 'This is card 5.', prize: '500 Coins' },
  { title: 'Card 6', image: 'https://i.postimg.cc/yd3ddrxX/qr-8.jpg', description: 'This is card 6.', prize: '600 Coins' },
  { title: 'Card 7', image: 'https://i.postimg.cc/9MbxD1k0/qr-14.jpg', description: 'This is card 7.', prize: '700 Coins' },
  { title: 'Card 8', image: 'https://i.postimg.cc/rw5NdQ0T/qr-11-jpeg.jpg', description: 'This is card 8.', prize: '800 Coins' },
  { title: 'Card 9', image: 'https://i.postimg.cc/xCZzpzJg/qr-10.jpg', description: 'This is card 9.', prize: '900 Coins' },
];

const CardPage = () => {
  return (
    <Grid container spacing={4} padding={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              transition: '0.3s',
              borderRadius: '12px', // Rounded corners
              height: '100%', // Ensure card takes full height of grid cell
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#000', // Black background
              border: '4px solid #fff', // White border around card
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              }
            }}
          >
            <CardMedia
              component="img"
              width="100%" // Set width to 100% to make all images equal in size
              height="120" // Smaller image height
              image={card.image}
              alt={card.title}
              sx={{
                border: 'none', // Remove border around image
              }}
            />
            <CardContent sx={{ position: 'relative' }}>
              <Typography variant="h6" component="div" sx={{ 
                fontFamily: 'ENGRAVERS MT', 
                fontWeight: 'bold', 
                color: '#fff' 
              }}>
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ 
                fontFamily: 'COPPERPLATE', 
                fontWeight: 'bold', 
                color: '#fff' 
              }}>
                {card.description}
              </Typography>
              <Typography variant="body2" sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                color: '#fff'
              }}>
                Prize: {card.prize}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardPage;