import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>قم</p>
        </span>
      </div>
      <div style={{position: "relative"}}>
        <Link to="/auth">
          <span>
            <img src="profile.svg" />
            <p onClick={() => setShow(!show)}>دیوار من</p>
          </span>
          {show && (
            <ul className={styles.navUl}>
              <li>داشبورد</li>
              <li>خروج</li>
            </ul>
          )}
        </Link>
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
