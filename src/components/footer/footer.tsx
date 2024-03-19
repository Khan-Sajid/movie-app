import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button>Favorites</button>
      <button>Wishlist</button>
    </footer>
  );
};

export default Footer;
