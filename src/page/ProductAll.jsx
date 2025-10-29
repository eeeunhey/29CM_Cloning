import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:3001/products`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container >
        <div className=" mx-auto px-30">
          <Row>
            {productList.map((menu, index) => (
              <Col lg={3} key={index}>
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProductAll;
