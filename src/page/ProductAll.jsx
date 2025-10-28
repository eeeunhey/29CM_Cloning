import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:3001/products`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
    setProductList(data);
  }


  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>

        < ProductCard productList={productList} />

    </div>
  )
}

export default ProductAll