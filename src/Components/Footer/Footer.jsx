import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import "./Footer.css"
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col xl="4" lg="3" md="4" sm="7" xs="12" > 
            <div className="logo">
              <span className='logoIcon'>
                <i className="ri-shopping-bag-3-line "></i>
              </span>
              <h1 className='text-white'>Kral Moda</h1>
            </div>
            <p className="footer_text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Libero laboriosam mollitia quibusdam qui dignissimos itaque.
              Ab voluptas officia dolor impedit!
            </p>
          </Col>
          <Col xl="2" lg="3" md="2" sm="3" xs="3">
            <div className="footer_quyik_links">
              <h4 className="quyik_title">Menü</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Ana Sayfa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Ürünler</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Sepetim</Link>
                </ListGroupItem >
              </ListGroup>
            </div>
          </Col>
          <Col xl="3" lg="4" md="3" sm="2" xs="3">
            <div className="footer_quyik_links">
              <h4 className="quyik_title">Bağlantılar</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Telefon</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Kablosuz Kulaklık</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Sandalye</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Koltuk</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col xl="3" lg="2" md="3" sm="12" xs="4">
            <div className="footer_quyik_links">
              <h4 className="quyik_title ">İletişim</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  <p>İstanbul</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className='ri-phone-line'></i>
                  </span>
                  <p>123321123</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className='ri-mail-send-line'></i>
                  </span>
                  <p>abcd@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" >
            <div >
              <p className='text-center text-dark'>{year} Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer >
  )
}

export default Footer