import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import styles from "./Header.module.css";
import { deleteCookie } from "src/utils/ckookie";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProfile } from "src/services/user";

function Header() {
  const [show, setShow] = useState(false);
  const { data } = useQuery(["profile"], getProfile);
  const role = data?.data.role;
  // const role = "USER"
  const queryClient = useQueryClient();

  const exiteHandler = () => {
    deleteCookie();
    setShow(!show);
    queryClient.invalidateQueries(["profile"]);
  };
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
      <div style={{ position: "relative" }}>
        {role==="ADMIN" && <button>پنل ادمین</button>}
        <div>
          <span>
            <img src="profile.svg" />
            <p onClick={() => setShow(!show)}>
              دیوار من
            </p>
          </span>
          {show && (
            <ul className={styles.navUl}>
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Link to="/dashboard">داشبورد</Link>
              </li>
              <li onClick={exiteHandler}>خروج</li>
            </ul>
          )}
        </div>
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
