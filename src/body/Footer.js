import React, { Component } from "react";

class Footer extends Component {
  render() {
    console.log(window.location.pathname);
    if (window.location.pathname === "/signup") {
      return (
        <div className="footer-copyright footer-copyright-signup">
            <div className="signup-text">
                <h1>Take control of your health today!</h1>
            </div>
          <div className="container" style={{ fontSize: "16px" }}>
            © 2018 Copyright:{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/ryan-barrett"
            >
              Ryan Barrett
            </a>
            ,{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/dalazaro"
            >
              Daryl Lazaro
            </a>
            , &{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/stacysn"
            >
              Stacy Suen
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="footer-copyright">
          <div className="container" style={{ fontSize: "16px" }}>
            © 2018 Copyright:{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/ryan-barrett"
            >
              Ryan Barrett
            </a>
            ,{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/dalazaro"
            >
              Daryl Lazaro
            </a>
            , &{" "}
            <a
              className="copyright-name"
              target="_blank"
              href="https://github.com/stacysn"
            >
              Stacy Suen
            </a>
          </div>
        </div>
      );
    }
  }
}

export default Footer;
