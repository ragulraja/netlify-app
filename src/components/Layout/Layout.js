import styles from "./Layout.module.scss";
import Header from "@components/Header/Header";
import Footer from "@components/Footer";
import Head from "next/head";

const Layout = ({ children, className, ...rest }) => {
  let layoutClassname = styles.layout;

  if (className) {
    layoutClassname = `${layoutClassname}.${className}`;
  }
  return (
    <div className={layoutClassname} {...rest}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
