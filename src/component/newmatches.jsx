import React, { useState, useEffect } from "react";
import "./home.css";

const News = () => {
  console.log(news);

  // shuffle the news array

  return (
    <div className="cardContainer">
      {isLoading ? (
        <Typography>Waiting...</Typography>
      ) : (
        news.map((article, index) => (
          <div className="card" key={index} data-aos="zoom-in">
            {article.name}
            <img src={article.urlToImage} alt="news" className="card-image" />
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <p className="card-text">{article.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
    // image={article.urlToImage}
    //
  );
};

export default News;
