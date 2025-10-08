import React, { useEffect, useState } from "react";

function Load_More() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
       setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20 }&select=title,price`
      )
      
      const result = await response.json();
      if(result && result.products && result.products.length){
        setProducts(result.products)
        setLoading(false);
      }
     console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();

  }, []);

  return <div>Load_More</div>;
}

export default Load_More;
