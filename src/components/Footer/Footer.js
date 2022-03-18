import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; Amazon Store 2022{" "}
      </a>
    </footer>
  );
};

export default Footer;
