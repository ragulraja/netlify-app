import React from "react";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerTitle}>
        <p>Amazon Store</p>
        <button
          className="snipcart-add-item"
          data-item-id="starry-night"
          data-item-price="79.99"
          data-item-url="/paintings/starry-night"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-image="/assets/images/starry-night.jpg"
          data-item-name="The Starry Night"
        >
          Add to cart
        </button>
        <button className="snipcart-checkout">Click here to checkout</button>
        <span className="snipcart-total-price">$0.00</span>
        <p>Login</p>
      </div>
    </header>
  );
};

export default Header;
