import React from "react";
import styles from "./Header.module.scss";
import Container from "@components/Container";
import { useSnipcart } from "@hooks/use-snipcart";
import Link from "next/link";

const Header = () => {
  const { cart = {} } = useSnipcart();
  const { subtotal } = cart;

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <p className={styles.headerTitle}>Amazon Store</p>
        </a>
      </Link>
      <div className={styles.headerTitle2}>
      <button className="snipcart-checkout">
        <span className="snipcart-total-price">$0.00</span>
      </button>
      </div>
    </header>
  );
};

export default Header;
