import React, { useEffect } from "react";
import "./home.css";
import images from "../images/images (1).jpeg";

function Productpage() {
  const itemList = [
    {
      GadgetName: "Home",
      GadgetDescription: "#home",
    },
    {
      GadgetName: "Home",
      GadgetDescription: "#home",
    },

    {
      GadgetName: "Home",
      GadgetDescription: "#home",
    },
    {
      GadgetName: "Home",
      GadgetDescription: "#home",
    },
    {
      GadgetName: "Home",
      GadgetDescription: "#home",
    },
    {
      GadgetName: "Home",
      GadgetDescription: "#home",
    },
    {
      GadgetName: "Home",
      GadgetDescription: "#home",
    },
    {
      GadgetName: "Home",
      GadgetDescription: "#home",
    },
  ];
  // set
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }} id="catalogues">
        CATOLOGUE
      </h1>

      <div className="product-cardcontainer" data-aos="fade-in">
        {itemList.map((article, index) => (
          <div className="product-card">
            <div className="product-image">
              <img src={images} alt="Gadget" />
            </div>
            <div className="product-info">
              <h2 className="product-name">Gadget Name</h2>
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
