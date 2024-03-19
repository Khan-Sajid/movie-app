import React, { useState } from "react";
import styles from "./header.module.scss";
import SideDrawerComponent from "../sideDrawerComponent/sideDrawerComponent";

const Header = () => {
  const [openFilterOption, setOpenFilterOption] = useState(false);

  const closeDrawer = () => {
    setOpenFilterOption(false);
  };

  return (
    <>
      <header className={styles.header}>
        <span>Movie App</span>
        <button onClick={() => setOpenFilterOption(true)}>Sort & filter</button>
      </header>
      {openFilterOption && <SideDrawerComponent closeDrawer={closeDrawer} />}
    </>
  );
};

export default Header;
