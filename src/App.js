import React, { useEffect, useState } from "react";
import "./App.css";
import "./component/PageLoader.css";
import Navbar from "./component/navbar";
import "./component/navbar.css";
import Productpage from "./component/productPage";
import AOS from "aos";
import { BrowserRouter as Router } from "react-router-dom";

import "aos/dist/aos.css";
import Footer from "./component/footer";
import Homepage from "./component/homecomponent";
import News from "./component/matches.jsx";
import PageLoader from "./component/pageLoade.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 0 });
  }, []);

  useEffect(() => {
    fetchNews();
    // fetch news every 30 seconds
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=308c878a2ad0495ebbdb63a0d0b2aed4"
      );
      const data = await response.json();

      setNews(data.articles);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(!true);
    }
  };

  return (
    <div className="App">
      <div className="containerNav">
        <Router>
          <Navbar />
          <Homepage />
          {isLoading ? (
            <PageLoader />
          ) : (
            ((<h1> TechNews</h1>),
            news &&
              news
                .slice(1, 15)
                .map((article, index) => (
                  <News article={article} key={index} />
                )))
          )}
          <Productpage />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
