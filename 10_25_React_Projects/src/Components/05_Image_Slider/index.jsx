import React, { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function FetchImages(getUrl) {
        try {
          setLoading(true);

          const response = await fetch(`${getUrl}&per_page=${limit}`, {
            headers: {
              Authorization:
                "rTPWR4ROuQvjZvaBEssl5fmvOQ5FtKSJowIF7AoPY8htt0USF0ZevMad",
            },
          });
          const data = await response.json();

          if (data) {
            setImages(data.photos);
            setLoading(false);
          }
        } catch (event) {
          setError(event.message);
          setLoading(false);
        }
      }
      if (url !== "") FetchImages(url);
    },
    [url]
  );

  console.log(images);
  function handlePrevious() {
    setCurrentSlide(
      currentSlide === "0" ? images.length - 1 : currentSlide - 1
    );
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div>Loading data ! RUKJA 5 MIN</div>;
  }

  if (error !== null) {
    return <div>Error Occured ! {error}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.src.original}
              src={imageItem.src.original}
              className={
                currentSlide === index
                  ? " current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? " current-indicator"
                    : "current-indicator update-current-indicator"
                }
                onClick={() => setCurrentSlide(index)}
                
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
