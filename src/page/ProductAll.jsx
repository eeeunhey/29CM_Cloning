import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은",searchQuery)
    let url = `https://my-json-server.typicode.com/eeeunhey/29CM_Cloning/products?q=${searchQuery}`;
    
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

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
