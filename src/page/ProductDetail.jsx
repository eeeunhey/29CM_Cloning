import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:3001/products?id=${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProduct(data[0]);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className="product-detail-container">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <img src={product?.img} alt={product?.title} className="product-img" />
        </Col>

        <Col md={6} className="product-info">
          <h2 className="product-title">{product?.title}</h2>
          <p className="product-price">₩ {product?.price}</p>

          <Form.Select className="product-select">
            <option value="">사이즈 선택</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </Form.Select>

          <Button variant="dark" className="w-100 mt-3">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
