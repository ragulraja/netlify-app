import styles from "./Button.module.scss";

const Button = ({ children, className, ...rest }) => {
  // let ButtonClassname = styles.Button;

  // if (className) {
  //   ButtonClassname = `${ButtonClassname}.${className}`;
  // }
  return <button className={styles.Button}>{children}</button>;
};

export default Button;
