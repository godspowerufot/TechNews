import React from "react";
import "./Footer.css";
import { Facebook, WhatsApp, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2
              style={{
                paddingTop: "20px",
              }}
            >
              {" "}
              Tech Insider
            </h2>
            <p>
              Tech Insider is a leading tech news company that provides
              comprehensive coverage of the latest developments in the world of
              technology. Our mission is to deliver high-quality, informative,
              and engaging content that keeps our audience up-to-date with the
              rapidly evolving world of technology. At Tech Insider, we have a
              team of experienced journalists, writers, and editors who are
              passionate about technology and are committed to delivering
              accurate and reliable news and analysis.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>
              123 Main Street
              <br />
              New York, NY 10001
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@company.com
            </p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a href="#facebook">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#whatsapp">
                  <WhatsApp />
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="#youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
