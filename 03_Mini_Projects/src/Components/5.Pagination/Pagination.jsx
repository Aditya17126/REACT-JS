import React, { useEffect, useState } from "react";
import "./pagination.css";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchProducts() {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=100`);

      const result = await response.json();
      console.log(result.products);

      if (result && result.products && result.products.length) {
      
        setProducts(result.products);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const selectPageHandler = (val) => {
    if (val >= 1 && val <= products.length / 10 && val !== page) {
      setPage(val);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  //! WHEN YOU KEEP THE DEPENDNCY ARRAY EMPTY IT WILL GOING TO RENDER IT ONE TIME

  return (
    <div className="pagination">
      <h1>Pagination</h1>

      <div className="card-container">
        {products && products.length
          ? products.slice(page * 10 - 10 , page * 10).map((item) => {
              return (
                <div key={item.id} className="pagination-card">
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>

      {products.length > 0 && (
        <div className="pagination__pages">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={
              page > 1 ? "arrows" : "arrows_disable"
            }
          >
            ⬅️
          </span>

          {[...Array(products.length / 10)].map((_, idx) => {
            return (
              <span
                className={page === idx + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(idx + 1)}
                key={idx}
              >
                {idx + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < products.length / 10 ? "arrows" : "arrows_disable"
            }
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagination;
