import React from "react";
import "./Home.css";
import Product from "./Product";
import ImageSlider from "./Imageslider";
import Productbutton from "./Productbutton";
import Productbutton1 from "./Productbutton1";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <ImageSlider/>

        <div className="home__row">
          <Productbutton
            id="12321341"
            title="Disposable Plastic Drinking Straws – a pack of 100 clear, BPA-free straws designed for convenience and reliability, 7.75-inch"
            price={7.50}
            rating={3}
            image="../images/straw.jpg"
            badge_id={0}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="../images/mixer.jpg"
            badge_id={0}
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="../images/tablet.jpg"
            badge_id={0}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="../images/echo.jpg"
            badge_id={0}
          />
          <Productbutton1
            id="958462"
            title="Woven Bag for Women, Leather Tote Bag Large Summer Beach Travel Handbag and Purse Retro Handmade Shoulder Bag"
            price={19.99}
            rating={5}
            image="../images/leatherbag.jpg"
            badge_id={0}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="../images/monitor.jpg"
            badge_id={0}
          />
        </div>
        <div className="walmart-banner">
          <h2>Save money. Live better.</h2>
          <p>Get everything you need at unbeatable prices</p>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;