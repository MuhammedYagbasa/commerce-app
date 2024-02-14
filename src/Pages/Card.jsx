import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Col, Container, Row } from "reactstrap";
import Chip from "@mui/material/Chip";
import CommonSection from "../Components/Ui/CommonSection";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Alert, Button } from "@mui/material";
function Cardd() {
  const card = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    console.log("id", id);
    dispatch(cartActions.removeItem(id));
    toast.success("Sepetten çıkarıldı", {
      position: "top-left",
    });

    // dispatch(cartActions.removeItem(id));
  };

  return (
    <div>
      <Container>
        <Row>
          <h4>
            <CommonSection title="SEPETİM" />
          </h4>

          {card.cartItems.map((item, index) => (
            <Col key={index} lg="4" md="4" sm="6" xs="12">
              <Card key={index} style={{ marginBottom: "20px" }}>
                <i
                  style={{
                    float: "right",
                    fontSize: "20px",
                    margin: "1 0px",
                    cursor: "pointer",
                    color: "red",
                    zIndex: "1",
                    backgroundColor: "white",
                    borderRadius: "50px",
                    border: "1px solid #0000001f",
                    padding: "5px",
                    boxShadow: "0px 0px 5px 0px #0000001f",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    
                  }}
                  onClick={() => removeFromCart(item.id)}
                  className="ri-delete-bin-line"
                ></i>
                <CardMedia
                  sx={{ height: 250, width: 250 }}
                  image={item.imageUrl}
                  title="green iguana"
                  style={{ height: "250px", width: "250px", margin: "auto" }}
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
                  <Chip
                    style={{
                      fontSize: "20px",
                      marginBottom: "10px",
                      float: "right",
                      width: "100%",
                      height: "45px",
                    }}
                    label={item.price + " TL"}
                    color="success"
                  />
                </CardActions>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <hr />
          <Col lg="12" md="12" sm="12" xs="12">
            <div>
              {card.cartItems.length === 0 && (
                <div>
                  <Alert variant="outlined" severity="warning"  className="mb-3 text-lg">
                    Sepetinizde ürün bulunmamaktadır. Lütfen aşağıdaki butona tıklayarak alışverişe devam edin.
                  </Alert>
                  <div>
                    <Link to="/shop">
                      <Button variant="outlined" color="warning">
                        Alışverişe Devam Et
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
              <div className="float-end">
              <div className="mt-3">
                100 TL ve üzeri alışverişlerinizde kargo ücretsizdir.
                Siz de 100 TL ve üzeri alışveriş yaparak kargo ücreti  <br/> ödememek için alışverişinize devam edebilirsiniz.
              </div>
              <div className="border mt-2 rounded shadow-sm p-3 col-12 col-md-6  float-end mb-5">
                <h5>Toplam Tutar : 
                  <span className="float-end text-xs"> {card.totalAmaount} TL</span>
                  </h5>
                <h5>
                  Teslimat Ücreti :{" "}
                  <span style={{ color: card.totalAmaount > 100 ? "red" : "inherit", float: "right" }}>  {card.totalAmaount > 100 ? "Ücretsiz" : "10 TL"} </span>
                </h5>
                <h5>
                  Ödenecek Tutar :{" "}
                  <span className="float-end">
                  {card.totalAmaount > 0
                    ? card.totalAmaount > 100
                      ? `${card.totalAmaount} TL`
                      : `${card.totalAmaount + 10} TL`
                    : "0 TL"}
                     </span>
                </h5>
                {/* ödenecek tutar 0 bükse  */}
                <Button
                  variant="contained"
                  color="success"
                  className="mt-3"
                  style={{ width: "100%" }}
                >
                  Ödeme Yap
                </Button>

              </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cardd;
