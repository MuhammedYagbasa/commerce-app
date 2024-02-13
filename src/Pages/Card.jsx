import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Cardd() {
  const card = useSelector(state => state.cart)

  console.log("card", card.cartItems);

  return (
    <div>
      <h1>Sepetim</h1>
      {card.cartItems.map((item, index) => (
        <div key={index}>
         <img src={item.imageUrl} alt="" style={{ width: "250px", height: "250px" }} />
          <h2>{item.productName}</h2>
          <p>{item.price} Tl</p>
          <p>{item.description}</p>
        </div>
      ))}
      {/* eğer 0 sa  */}
     <div>
     {card.cartItems.length === 0 && <h1>Sepetinizde ürün bulunmamaktadır</h1>}
        <h2>Toplam Tutar : {card.totalAmaount} TL</h2>
        <h2>Toplam Ürün : {card.totalQuantity}</h2>
     </div>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </div>

    
  )
}

export default Cardd