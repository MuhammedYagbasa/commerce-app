import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../Components/Helmet/Helmet'
import HeroImg from "../assets/images/hero-img.png"
import "../Styles/Home.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Services from '../Services/Services'
import ProductList from '../Components/Ui/ProductList'
import Products from "../assets/data/products"
function Home() {
  const [dataChair, setChair] = useState([])
  const [dataSofa, setSofa] = useState([])
  const [dataMobile, setMobile] = useState([])
  const [dataWireless, setWireless] = useState([])
  const [dataWatch, setWatch] = useState([])

  
  useEffect(() => {
    const filterProductChair = Products.filter((item) => item.category === "chair");
    setChair(filterProductChair)

    const filterProductSofa = Products.filter((item) => item.category === "sofa");
    setSofa(filterProductSofa)

    const filterProductMobile = Products.filter((item) => item.category === "mobile");
    setMobile(filterProductMobile)

    const filterProductWireless = Products.filter((item) => item.category === "wireless");
    setWireless(filterProductWireless)

    const filterProductWatch = Products.filter((item) => item.category === "watch")
    setWatch(filterProductWatch)

  }, []);

  return (
    <Helmet title={"Home"}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className='hero_content'>
                <h3 className="hero_subtitle">Trend Olan Ürünler</h3>
                <h2>İç mekanınızı daha minimalist ve modern hale getirin </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus dolores ipsam dicta a ab dolorem eveniet
                  perspiciatis recusandae vero quibusdam.</p>
                <Button><Link className="hero_btn shadow" to="/shop">Daha fazla</Link></Button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={HeroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <h2 className='section_title'>Trend Ürünler </h2>
            </Col>
            <ProductList data={dataChair} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" md="12">
              <h2 className='section_title'>Trend Ürünler </h2>
            </Col>
            <ProductList data={dataSofa} />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <h2 className='section_title'>Yeni Ürünler </h2>
            </Col>
            <ProductList data={dataMobile} />
            <ProductList data={dataWireless} />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <h2 className='section_title'>İlginizi Çekecebilecek ürünler </h2>
            </Col>
            <ProductList data={dataWatch} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home