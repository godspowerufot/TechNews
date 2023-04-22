import React from "react";
import "./home.css";
import images from "../images/images (1).jpeg";

function Productpage() {
  const itemList = [
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
    {
      GadgetName: "HeadPhone",
      GadgetDescription: "Music",
    },
  ];
  // set
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }} id="catalogues">
        CATALOGUE
      </h1>

      <div className="product-cardcontainer" data-aos="fade-up">
        {itemList.map((article, index) => (
          <div className="product-card">
            <div className="product-image">
              <img src={images} alt="Gadget" />
            </div>
            <div className="product-info">
              <h2 className="product-name">{article.GadgetName}</h2>
              <p className="product-description">Gadget Description</p>
              <p className="product-price">$XX.XX</p>
              <button className="product-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Productpage;
