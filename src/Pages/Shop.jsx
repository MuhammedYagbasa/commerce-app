import React, { useState } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/Ui/CommonSection'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Col, Container, Row } from 'reactstrap';
import { IconButton, InputBase, Paper, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Products from "../assets/data/products"
import ProductList from "../Components/Ui/ProductList"
function Shop() {
  const [age, setAge] = useState(Products);
  const [agee, setAgee] = React.useState("");

  const handleChange = e => {
    setAge(e.target.value);
    const filterValue = e.target.value

    if (filterValue === "sofa") {
      const filterProducts = Products.filter((item) => item.category === "sofa")
      setAge(filterProducts)
    }
    if (filterValue === "mobile") {
      const filterProducts = Products.filter((item) => item.category === "mobile")
      setAge(filterProducts)
    }
  }
  const handleSearch = e => {
    const searchTerm = e.target.value
    const seracProducts = Products.filter((filter) => filter.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setAge(seracProducts)
  }

  return (
    <Helmet title={"Ürünler"}>
      <CommonSection title="ÜRÜNLERİMİZ" />
      <section>
        <Container className=''>
          <Row>
            <Col lg="6" >
              <Paper
                style={{ border: "1px solid #222" }}
                component="form"
                sx={{ m: 1, p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", height: 56 }}
              >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search "
                  onChange={handleSearch}
                />
              </Paper>
            </Col>
            <Col lg="3" xs="6">
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel id="demo-simple-select-helper-label">Fitrele</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Fitrele"
                  onChange={handleChange}
                >
                  <MenuItem value="sofa">Sandalye ve Koltuk</MenuItem>
                  <MenuItem value="mobile">Telefon</MenuItem>
                </Select>
              </FormControl>
            </Col>
       
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row >
            {age.length === 0 ? <Alert ariant="" color='warning' severity="warning" style={{ backgroundColor: "#efefef", color: "#222" }}>
              Aradığınız kıriterde bir ürün bulunamadı...! </Alert> : <ProductList data={age} />}
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Shop