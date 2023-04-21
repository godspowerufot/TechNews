import React, { useState } from "react";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const itemList = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "TechNews",
      link: "#news",
    },

    {
      text: "categories",
      link: "#catalogues",
    },

    { text: "Contact", link: "#footer" },
  ];
  // set menu icon to false on large devices
  // creaate a function to toggle when on small screen
  // set menu icon to false on large devices
  // creaate a function to toggle when on small screen
  const [showNavbar, setShowNavbar] = useState(true);

  const handleShowNavbar = () => {
    setShowNavbar((p) => !showNavbar);
  };

  return (
    <header>
      <nav className="navbar">
        {/* set navelement to false on large(horizontally ) */}
        <div className="menu-icon" onClick={handleShowNavbar}></div>

        <ul className={`nav-list ${showNavbar && "expanded"}`}>
          {itemList.map((text, index) => (
            <li key={"text" + index} className={text.class}>
              <Link
                style={{
                  fontSize: "1em",
                  fontWeight: "600",
                }}
                key={index}
                to={text.link}
                smooth
              >
                {text.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
