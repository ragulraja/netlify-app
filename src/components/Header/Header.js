import React from "react";
import styles from "./Header.module.scss";
import Container from "@components/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>Amazon Store</p>
      <button className="snipcart-checkout">
        <span className="snipcart-total-price">$0.00</span>
      </button>
    </header>
  );
};

export default Header;

{
  /* <button
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
        <span className="snipcart-total-price">$0.00</span> */
}
