import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Container, Row } from "reactstrap";
import Chip from "@mui/material/Chip";

function Cardd() {
  const card = useSelector((state) => state.cart);
  return (
    <div>
      <Container>
        <Row>
          <h1>Sepetim</h1>
          <div>
            {card.cartItems.length === 0 && (
              <h1>Sepetinizde ürün bulunmamaktadır</h1>
            )}
            <h2>Toplam Tutar : {card.totalAmaount} TL</h2>
            <h2>Toplam Ürün : {card.totalQuantity}</h2>
          </div>
          {card.cartItems.map((item, index) => (
            <Col key={index} lg="4" md="4" sm="6" xs="12">
            <Card key={index} style={{marginBottom : "20px"}}>
              <CardMedia
                sx={{ height: 250, width: 250 }}
                image={item.imageUrl}
                title="green iguana"
                style={{height:"250px", width:"250px", margin:"auto"}}
                loading="lazy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
              <Chip  style={{fontSize:"20px" , marginBottom:"10px", float:"right", width:"100%", height:"45px"}} label={item.price + " TL"}  color="success"/>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cardd;
