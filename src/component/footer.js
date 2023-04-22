import React from "react";
import "./Footer.css";
import {
  Facebook,
  WhatsApp,
  Instagram,
  LinkedIn,
  Email,
  LocationCity,
  Telegram,
  GitHub,
  Phone,
} from "@mui/icons-material";

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
            <h2>Contact Us</h2>

            <p>
              <LocationCity className="iconss" />
              Akpaden
              <br />
              <Phone className="iconss" /> (234) 9018902180
              <br />
              <Email className="iconss" /> ufotgodspower8@gmail.com
            </p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a href="https://www.facebook.com/godspower.ufot.16 ">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="wa.me/+23490189021">
                  <WhatsApp />
                </a>
              </li>
              <li>
                <a href="https://instagram.cm/ufot.godspower">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="t.me/Godspowerufot">
                  <Telegram />
                </a>
              </li>
              <li>
                <a href="https://github.com/godspowerufot">
                  <GitHub />
                </a>
              </li>

              <li>
                <a href="https//www.linkedin.com/in/godspowerufot">
                  <LinkedIn />
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
