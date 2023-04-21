import React from "react";
import { Typography } from "@mui/material";
import "./home.css";

const News = ({ article, index }) => {
  // shuffle the news array

  return (
    <div className="cardContainer" id="news">
      <div className="card " key={index}>
        {article?.name}
        <img src={article.urlToImage} alt="news" className="card-image" />
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <p className="card-text">{article.description}</p>
        </div>
      </div>
    </div>
    // image={article.urlToImage}
    //
  );
};

export default News;
