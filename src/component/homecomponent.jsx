import React, { useEffect } from "react";
import "./home.css";
import images from "../images/slide-1.jpg";

function Homepage() {
  useEffect(() => {}, []);
  return (
    <div className="homemain" id="home">
      <div className="pagess" data-aos="fade-left">
        <img src={images} alt=" images" className="img" />
        <div className="page">
          <span className="pages">
            LIFE | IS ABOUT INFORMATION 
            <br />
            <span className="page">
              Just listen. <span id="LittlePage">Get insight</span> Enjoy the news
            </span>
          </span>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Homepage;
