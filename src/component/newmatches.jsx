import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./home.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews();
    // fetch news every 30 seconds
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        " https://apiv3.apifootball.com/?action=get_events&from=2021-07-12&to=2021-07-12&league_id=1&APIkey=xxxxxxxxxxxxxx"
      );
      const data = await response.json();

      setNews(data.articles);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  console.log(news);

  // shuffle the news array

  return (
    <div className="cardContainer">
      <h1> Football News</h1>
      {isLoading ? (
        <Typography>Waiting...</Typography>
      ) : (
        news.map((article, index) => (
          <div className="card" key={index}>
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
