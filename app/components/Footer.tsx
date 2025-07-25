'use client'

import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__backToTop" onClick={scrollToTop}>
        Back to top
      </div>
      <div className="footer__linkContainer">
        <div className="footer__links">
          <h3 className="footer__linksTitle">Get to Know Us</h3>
          <p className="footer__link">About Walmart</p>
          <p className="footer__link">Careers</p>
          <p className="footer__link">Press Releases</p>
          <p className="footer__link">Walmart Cares</p>
          <p className="footer__link">Gift a Smile</p>
        </div>
        <div className="footer__links">
          <h3 className="footer__linksTitle">Connect with Us</h3>
          <p className="footer__link">Facebook</p>
          <p className="footer__link">Twitter</p>
          <p className="footer__link">Instagram</p>
        </div>
        <div className="footer__links">
          <h3 className="footer__linksTitle">Make Money with Us</h3>
          <p className="footer__link">Sell on Walmart</p>
          <p className="footer__link">Walmart Marketplace</p>
          <p className="footer__link">Walmart Global Selling</p>
          <p className="footer__link">Become an Affiliate</p>
          <p className="footer__link">Walmart Pay for Merchants</p>
          <p className="footer__link">Advertise Your Products</p>
        </div>
        <div className="footer__links">
          <h3 className="footer__linksTitle">Let Us Help You</h3>
          <p className="footer__link">COVID-19 and Walmart</p>
          <p className="footer__link">Your Account</p>
          <p className="footer__link">Returns Centre</p>
          <p className="footer__link">100% Purchase Protection</p>
          <p className="footer__link">Walmart App Download</p>
          <p className="footer__link">Help</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;