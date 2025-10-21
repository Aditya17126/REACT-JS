import React, { useEffect, useState } from "react";
import "./loadMoreButton.css";

function LoadMoreButton() {
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton , setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData , ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  
  useEffect(()=>{
     if(products && products.length === 150){
       setDisableButton(true);
     }
  })

   if(loading){
    return <div>
       <h1>Loading Data ! Please Wait...</h1>
    </div>
   }
   
  return (
    <div className="loadMoreButton">
      <h1>LOAD MORE BUTTONS</h1>

       <div className="products-container">
        {
           products && products.length ? 
            products.map((item ,idx)=>{
              return (
                 <div className="products-card" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                 </div>
              )
            })
           : null 
        }
       </div>

       <div className="button-container">
         <button disabled={disableButton} onClick={()=> setCount(count + 1)}>Load More Buttons</button>
          {
             disableButton ? <h1>You have Reached 150 products !!🚀🚀</h1> : null
          }
       </div>
    </div>
  );
}

export default LoadMoreButton;
