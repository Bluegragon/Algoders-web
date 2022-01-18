import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function MentorCard(props) {
  const source=props.source;
     const title=props.title;
     const content=props.content;

  return (
    <Card sx={{ maxWidth: 345 ,p:3,boxShadow:'none'}}>
      <CardActionArea sx={{p:2}}>
        <CardMedia
          component="img"
          height="140"
          image={source}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
