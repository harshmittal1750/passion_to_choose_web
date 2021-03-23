import React from "react";
import styles from "../styles/Main.module.css";

let date = new Date();

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        copyright &copy; {date.getFullYear()} | Passion to Choose
      </footer>
    </React.Fragment>
  );
};

export default Footer;
