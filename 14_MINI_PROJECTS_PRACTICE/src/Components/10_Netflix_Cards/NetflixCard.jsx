import React from "react";
import styles from './Netflix.module.css'

function NetflixCard({ data }) {
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    data;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f" }`,
    color: " var(--bg-color)",
    fontWeight : "bold",
    cursor : "pointer",
  };
  
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt="" width="40%" height="50%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name :{name} </h2>
        <h3>
          Rating :{" "}
          <span className={`${styles.rating} ${ratingClass}`}>
            {rating}{" "}
          </span>
        </h3>
        <p className="text-3xl font-bold underline text-red-700" > Summary : {description} </p>
        <h3>Genre : {genre.join(", ")}</h3>
        <p>Cast : {cast.join(", ")} </p>

        <a href={watch_url} target="_blank">
          <button style={btn_style}>WATCH NOW</button>
        </a>
      </div>
    </li>
  );
}

export default NetflixCard;
