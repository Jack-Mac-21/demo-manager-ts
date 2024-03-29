import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import northwestern from 'images/northwestern.svg';

export default function WinningCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Northwestern Logo"
        height="100"
        image={ northwestern }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Northwestern
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Northwestern leads all teams
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}