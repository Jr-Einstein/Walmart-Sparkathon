import React from "react";
import "./Headergreen.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  const handleLinkClick = () => {
    // Scroll to the top of the page when the link is clicked
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  return (
    <div className="headerg">
      <Link to="/">
        <img
          className="header__logo"
          src="../images/walmart-logo.png"
          alt="walmart logo"
        />
      </Link>

      <div className="header__search">
        <input 
          className="header__searchInput" 
          type="text" 
          placeholder="Search everything at Walmart online and in store"
        />
        <button className="header__searchButton">
          <img
            src="../images/search_icon.png"
            className="header__searchIcon"
            alt="search"
          />
        </button>
      </div>

      <div className="header__nav">
        <Link style={{ textDecoration: "none" }} to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Dashboard</span>
          </div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          to="/checkout"
          onClick={handleLinkClick}
        >
          <div className="header__optionBasket">
            <img
              src="../images/cart_icon.png"
              className="header__cartIcong"
              alt="cart"
            />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;