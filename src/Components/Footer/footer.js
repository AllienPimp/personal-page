import React from "react";
import "./footer.css";

function Footer() {
  return (
    <ul className="footer-page">
      <li>
        <a
          href="https://www.facebook.com/"
          rel="noopener noferrer"
          target="blank"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/i_miss_my_virginity/"
          rel="noopener noferrer"
          target="blank"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/vasile-baksai-3a25364b/"
          rel="noopener noferrer"
          target="blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/AllienPimp"
          rel="noopener noferrer"
          target="blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
    </ul>
  );
}

export default Footer;
