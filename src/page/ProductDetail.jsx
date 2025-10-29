import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";

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
    <div>

      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img}/>
          </Col>
          <Col>
            <div>{product?.title}</div>
             <div>\ {product?.price}</div>
             <div>{product?.choice}</div>
             <div>{product?.size}</div>
             <Form.Select>
              <option></option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
             </Form.Select>
             <Button>추가</Button>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
