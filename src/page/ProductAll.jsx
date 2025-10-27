import React, { useEffect } from 'react'

const ProductAll = () => {

  const getProducts = async () => {
    let url = `http://localhost:3001/products`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
  }


    useEffect (() => {
      getProducts();
    }, [])
  
  return (
    <div></div>
  )
}

export default ProductAll