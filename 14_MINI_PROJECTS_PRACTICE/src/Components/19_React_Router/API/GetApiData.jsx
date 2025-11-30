import React from "react";
//* this is a functiton not a component of react js
const getApiData = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=titanic&page=1`
    );

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getApiData;
