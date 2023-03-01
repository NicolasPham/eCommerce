import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

import { footerLinks, footerCats } from "../../constant";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper flexRow">
        <div className="item flexCol">
          <h1>Categories</h1>
          <div className="item_link flexCol">
            {footerCats.map((item, index) => (
              <Link className="link" to={`/products/${item}`} key={index}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="item flexCol">
          <h1>Links</h1>
          <div className="item_link flexCol">
            {footerLinks.map((item, index) => (
              <Link className="link" to={`/${item}`} key={index}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="item flexCol">
          <h1>About</h1>
          <p>
            We are a family-owned business that has been providing quality
            products and services for over 10 years. Our mission is to provide
            our customers with the best shopping experience possible. We strive
            to offer the latest trends in fashion, home decor, and more at
            competitive prices. Our team of experienced professionals is
            dedicated to providing you with exceptional customer service. We are
            committed to helping you find the perfect item for your needs and
            budget. Whether you’re looking for something special or just
            browsing, we’re here to help.
          </p>
        </div>

        <div className="item flexCol">
          <h1>Contract</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum arcu eu magna pulvinar efficitur. Praesent ultricies
            rhoncus urna, sit amet scelerisque odio sollicitudin et. Phasellus
            pharetra accumsan magna. In semper ex nibh, ut blandit magna
            convallis eu. Aliquam eget neque quis enim porttitor vestibulum.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Suspendisse elementum est quis nunc laoreet, sed iaculis velit
            scelerisque. Maecenas sit amet diam orci.
          </p>
        </div>
      </div>

      <div className="bottom flexRow">
        <div className="left flexRow">
          <Link className="link" to="/">
            NICOSTORE
          </Link>
          <span>© Copyright 2023. All rights reserved</span>
        </div>

        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
